import IRankedSubject from '@treecg/actor-init-typeahead/lib/interfaces/IRankedSubject';
import { EventEmitter } from 'events';

function compareResults(first: IRankedSubject, second: IRankedSubject): number {
    if (first.score.length < second.score.length) {
      // Longer scores are assumed to be better;
      // The missing entries are assumed to be `null`
      return 1;
    }
    if (second.score.length < first.score.length) {
      return -1;
    }
  
    for (let i = 0; i < first.score.length; i++) {
      const e1 = first.score[i];
      const e2 = second.score[i];
  
      if (e1 === null || e2 === null) {
        continue;
      }
  
      if (e1 < e2) {
        // Higher is better
        return 1;
      }
      if (e2 < e1) {
        return -1;
      }
    }
  
    if (first.subject < second.subject) {
      return -1;
    }
    if (second.subject < first.subject) {
      return 1;
    }
  
    return 0;
  }

export default class AutoCompleteWorker extends EventEmitter {
    protected workers: Record<string, Worker>;
    protected subResults: Record<string, any>;
    protected numResults: number;
    protected serial: Record<string, number>;

    constructor(numResults: number, urls: string[]) {
        super();
        this.numResults = numResults;
        this.workers = {};
        this.subResults = {};
        this.serial = {};
        for (const url of urls) {
            const worker = new Worker('./workers/worker.js', { type: 'module' });
            worker.postMessage(["prefetch", url]);
            worker.onmessage = (e) => {
                const [receivedSerial, data] = e.data;
                if (receivedSerial === this.serial[url]) {
                    this.subResults[url] = data;
                    this.mergeResults();
                }
            };
            this.workers[url] = worker;
            this.subResults[url] = [];
        }
    }

    public mergeResults() {
        let a: any[] = [];
        for (const b of Object.values(this.subResults)) {
            a = [...a, ...b];
        }
        a.sort(compareResults);
        this.emit("data", a.splice(0, this.numResults));
    }

    public query(input) {
        const expectedPredicateValues = {
            'http://schema.org/name': [ input ],
            'http://schema.org/alternateName': [ input ],
            'http://www.w3.org/2004/02/skos/core#prefLabel': [ input ],
            'http://www.w3.org/2004/02/skos/core#altLabel': [ input ],
        }

        const expectedDatatypeValues = {};

        for (const [url, worker] of Object.entries(this.workers)) {
            this.subResults[url] = [];
            const serial = this.serial[url];
            worker.postMessage(["query", serial, this.numResults, expectedPredicateValues, expectedDatatypeValues]);
        }
    }
}

