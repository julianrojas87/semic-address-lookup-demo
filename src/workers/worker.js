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
function query(serial, numResults, expectedPredicateValues, expectedDatatypeValues) {
    if (iterator) {
        iterator.removeAllListeners();
        iterator.close();
    }

    const query = {
        numResults,
        urls: roots,
        treeNodes: nodes,
        expectedDatatypeValues,
        expectedPredicateValues,
      };

    iterator = engine.query(query);
    iterator.on('data', (d) => {
        // TODO: check if it's closed?
        nodes = d.knownTreeNodes;
        const rankedSubjects = [];
        for (const result of d.rankedSubjects) {
            const matchingQuads = result.matchingQuads.map(q => [q.subject.value, q.predicate.value, q.object.value]);
            const quads = result.quads.map(q => [q.subject.value, q.predicate.value, q.object.value]);
            rankedSubjects.push({
                subject: result.subject,
                score: result.score,
                matchingQuads, 
                quads,
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
