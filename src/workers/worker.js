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
async function query(serial, numResults, input, predicates) {
    if (iterator) {
        iterator.removeAllListeners();
        iterator.close();
    }

    const normalizedInput = await engine.normalizeInput([input]);

    const expectedPredicateValues = {}
    predicates.map(p => p.normalize 
        ? expectedPredicateValues[p.value]= normalizedInput
        : expectedPredicateValues[p.value]= input)
    

    const expectedDatatypeValues = {};

    const queryObject = {
    numResults,
    urls: roots,
    treeNodes: nodes,
    expectedDatatypeValues,
    expectedPredicateValues,
    };

    const start = Date.now();
    const times = {};

    iterator = engine.query(queryObject);
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
