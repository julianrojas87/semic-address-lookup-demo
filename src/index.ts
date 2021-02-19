import { ActorInitTypeahead } from '@treecg/actor-init-typeahead';
import ITreeNode from '@treecg/actor-init-typeahead/lib/interfaces/ITreeNode';
import engine from '../comunica-engine';

const engine: ActorInitTypeahead = require('../comunica-engine');

export default class AutoComplete {
    public async prefetch(urls: string[]): Promise<ITreeNode[]> {
        return engine.prefetch(urls);
    }

    public query(numResults, nodes, urls, input) {
        const expectedPredicateValues = {
            'http://schema.org/name': [ input ],
            'http://schema.org/alternateName': [ input ],
            'http://www.w3.org/2004/02/skos/core#prefLabel': [ input ],
            'http://www.w3.org/2004/02/skos/core#altLabel': [ input ],
        }

        const query = {
            numResults,
            urls,
            treeNodes: nodes,
            expectedDatatypeValues: {},
            expectedPredicateValues,
          };

        return engine.query(query);
    }
}

/*
export default class AutoCompleteWorker extends EventEmitter {
    protected worker: Worker;

    constructor() {
        super();
        this.worker = new Worker('./workers/worker.js', { type: 'module' });

        const self = this;
        this.worker.onmessage = (e) => {
            const [type, meta, value] = e.data;
            if (type == "reset") {
                self.emit("reset", meta);
            } else if (type == "end") {
                self.emit("end", meta);
            } else {
                const allQuads = [];
                for (const otherQuad of meta.quads) {
                    allQuads.push(RdfString.stringQuadToQuad(otherQuad));
                }
                meta.quads = allQuads;
                self.emit("data", RdfString.stringQuadToQuad(value), meta);
            }
        }
    }

    public async query(input: string) {
        this.worker.postMessage(input);
    }
}
*/
