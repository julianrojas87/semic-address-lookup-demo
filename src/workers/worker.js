const engine = require('../comunica-engine');

let nodes = null;
let roots = null;
function prefetch(urls) {
    roots = urls;
    engine.prefetch(urls).then((discoveredNodes) => {
        if (!nodes) {
            nodes = discoveredNodes;
        }
    })
}

let iterator = null;
async function query(serial, numResults, input) {
    if (iterator) {
        iterator.removeAllListeners();
        iterator.close();
    }

    const normalizedInput = await engine.normalizeInput([input]);

    const expectedPredicateValues = {
        'http://schema.org/name': normalizedInput,
        'http://schema.org/alternateName': normalizedInput,
        'http://www.w3.org/2004/02/skos/core#prefLabel': normalizedInput,
        'http://www.w3.org/2004/02/skos/core#altLabel': normalizedInput,
    }

    const expectedDatatypeValues = {};

    const query = {
        numResults,
        urls: roots,
        treeNodes: nodes,
        expectedDatatypeValues,
        expectedPredicateValues,
      };

    const start = Date.now();
    const times = {};

    iterator = engine.query(query);
    iterator.on('data', (d) => {
        // TODO: check if it's closed?
        nodes = d.knownTreeNodes;
        const rankedSubjects = [];
        for (const result of d.rankedSubjects) {
            if (!(result.subject in times)) {
                times[result.subject] = Date.now() - start;
            }
            const matchingQuads = result.matchingQuads.map(q => [q.subject.value, q.predicate.value, q.object.value]);
            const quads = result.quads.map(q => [q.subject.value, q.predicate.value, q.object.value]);
            rankedSubjects.push({
                subject: result.subject,
                score: result.score,
                matchingQuads, 
                quads,
                time: times[result.subject],
            });
        }
        postMessage([serial, rankedSubjects]);
    })
}

onmessage = function (e) {
    const [call, ...data] = e.data;
    if (call === "prefetch") {
        prefetch(data);
    } else if (call == "query") {
        query(...data);
    }
}
