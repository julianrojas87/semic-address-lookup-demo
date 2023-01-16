import IRankedSubject from '@treecg/actor-init-typeahead/lib/interfaces/IRankedSubject';
import { EventEmitter } from 'events';
import Swal from 'sweetalert2';
import { parse as wktParse } from 'wellknown';
import Leaflet from 'leaflet';
import config from '../config/site_config.json'

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

class AutoCompleteWorker extends EventEmitter {
    protected workers: Record<string, Worker>;
    protected subResults: Record<string, any>;
    protected numResults: number;
    protected serial: Record<string, number>;
    protected predicates: any;

    public config;

    constructor(numResults: number, urls: string[]) {
        super();
        this.numResults = numResults;
        this.workers = {};
        this.subResults = {};
        this.serial = {};
        this.updateSources(urls);
        this.predicates = config.predicates
    }

    public updateSources(urls: string[]) {
        let currentWorkerURLs = Object.keys(this.workers);
        // Remove workers for deselected urls
        for (let workerURL of currentWorkerURLs) {
            if (urls.indexOf(workerURL) === -1) {
                this.removeWorker(workerURL);
            }
        }
        for (let source of urls) {
            if (currentWorkerURLs.indexOf(source) === -1) {
                this.addWorker(source);
            }
        }
    }

    private addWorker(url) {
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

    private removeWorker(url) {
        delete this.workers[url];
        delete this.subResults[url];

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
        for (const [url, worker] of Object.entries(this.workers)) {
            this.subResults[url] = [];
            const serial = this.serial[url];
            worker.postMessage(["query", serial, this.numResults, input, this.predicates]);
        }
    }
}


function showLocation(quads: any): void {
    const labelQuad = quads.find(q => q[1] === "http://www.w3.org/ns/locn#fullAddress");
    const typeQuad = quads.find(q => q[1] === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type");
    const locationQuad = quads.find(q => q[1] === "http://www.opengis.net/ont/geosparql#asWKT");

    const id = locationQuad[0];
    const label = labelQuad[2];
    const wkt = wktParse(locationQuad[2]).coordinates.reverse();

    Swal.fire({
        title: `<strong><a href="${id}" target="_blank">${label}</a></strong>`,
        html: `<div>
                    <div style="margin-bottom: 10px;">
                        <span>
                            <strong>Type: </strong>
                            <a href="${typeQuad[2]}" target="_blank">Address</a>
                        </span>
                    </div>
                    <div style="height: 300px" id="map"></div>
               </div>`,
        showCloseButton: true,
        showConfirmButton: false
    });

    const map = Leaflet.map('map').setView(wkt, 16);
    Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    Leaflet.marker(wkt).addTo(map);
}


export { config, AutoCompleteWorker, showLocation }