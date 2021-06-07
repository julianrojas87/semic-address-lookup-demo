const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-init/Bus/Init'
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_bus_rdf_score_Bus_RdfScore = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/bus-rdf-score/Bus/RdfScore'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-http/Bus/Http'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-parse/Bus/RdfParse'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_dereference_Bus_RdfDereference = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-dereference/Bus/RdfDereference'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html_Bus_RdfParseHtml = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-parse-html/Bus/RdfParseHtml'
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_bus_literal_normalize_Bus_LiteralNormalize = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/bus-literal-normalize/Bus/LiteralNormalize'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_Bus_RdfMetadata = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-metadata/Bus/RdfMetadata'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract_Bus_RdfMetadataExtract = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-metadata-extract/Bus/RdfMetadataExtract'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_links_Bus_RdfResolveHypermediaLinks = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-resolve-hypermedia-links/Bus/RdfResolveHypermediaLinks'
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_bus_tree_score_Bus_TreeScore = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/bus-tree-score/Bus/TreeScore'
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_score_json_myRdfScoreStringLength = new (require('@treecg/actor-rdf-score-string-length').ActorRdfScoreStringLength)({
  'ascending': [
  'true'
],
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-score.json#myRdfScoreStringLength',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__treecg_bus_rdf_score_Bus_RdfScore
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_score_json_mediatorRdfScore = new (require('@treecg/mediator-combine-sequence').MediatorCombineSequence)({
  'testField': 'suitable',
  'outputField': 'score',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-score.json#mediatorRdfScore',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__treecg_bus_rdf_score_Bus_RdfScore
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_http_json_mediatorHttp = new (require('@comunica/mediator-number').MediatorNumber)({
  'field': 'time',
  'type': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-number/Mediator/Number/type/TypeMin',
  'ignoreErrors': true,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/http.json#mediatorHttp',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_http_json_myHttpFetcher = new (require('@comunica/actor-http-native').ActorHttpNative)({
  'agentOptions': '{ "keepAlive": true, "maxSockets": 5 }',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/http.json#myHttpFetcher',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_mediatorRdfParseMediatypes = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-parsers.json#mediatorRdfParseMediatypes',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_mediatorRdfParseHandle = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-parsers.json#mediatorRdfParseHandle',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserN3 = new (require('@comunica/actor-rdf-parse-n3').ActorRdfParseN3)({
  'mediaTypes': {
  'application/n-quads': '1.0',
  'application/trig': '0.95',
  'application/n-triples': '0.8',
  'text/turtle': '0.6',
  'text/n3': '0.35'
},
  'mediaTypeFormats': {
  'application/n-quads': 'http://www.w3.org/ns/formats/N-Quads',
  'application/trig': 'http://www.w3.org/ns/formats/TriG',
  'application/n-triples': 'http://www.w3.org/ns/formats/N-Triples',
  'text/turtle': 'http://www.w3.org/ns/formats/Turtle',
  'text/n3': 'http://www.w3.org/ns/formats/N3'
},
  'priorityScale': '1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-parsers.json#myRdfParserN3',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserRdfXml = new (require('@comunica/actor-rdf-parse-rdfxml').ActorRdfParseRdfXml)({
  'mediaTypes': {
  'application/rdf+xml': '1.0'
},
  'mediaTypeFormats': {
  'application/rdf+xml': 'http://www.w3.org/ns/formats/RDF_XML'
},
  'priorityScale': '5.0E-1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-parsers.json#myRdfParserRdfXml',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserXmlRdfa = new (require('@comunica/actor-rdf-parse-xml-rdfa').ActorRdfParseXmlRdfa)({
  'mediaTypes': {
  'application/xml': '1.0',
  'text/xml': '1.0',
  'image/svg+xml': '1.0'
},
  'mediaTypeFormats': {
  'application/xml': 'http://www.w3.org/ns/formats/RDFa',
  'text/xml': 'http://www.w3.org/ns/formats/RDFa',
  'image/svg+xml': 'http://www.w3.org/ns/formats/RDFa'
},
  'priorityScale': '3.0E-1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-parsers.json#myRdfParserXmlRdfa',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_dereference_json_mediatorRdfDereference = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-dereference.json#mediatorRdfDereference',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_dereference_Bus_RdfDereference
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtml = new (require('@comunica/actor-rdf-parse-html').ActorRdfParseHtml)({
  'busRdfParseHtml': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html_Bus_RdfParseHtml,
  'mediaTypes': {
  'text/html': '1.0',
  'application/xhtml+xml': '0.9'
},
  'mediaTypeFormats': {
  'text/html': 'http://www.w3.org/ns/formats/HTML',
  'application/xhtml+xml': 'http://www.w3.org/ns/formats/HTML'
},
  'priorityScale': '2.0E-1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-parsers.json#myRdfParserHtml',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtmlMicrodata = new (require('@comunica/actor-rdf-parse-html-microdata').ActorRdfParseHtmlMicrodata)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-parsers.json#myRdfParserHtmlMicrodata',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html_Bus_RdfParseHtml
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtmlRdfa = new (require('@comunica/actor-rdf-parse-html-rdfa').ActorRdfParseHtmlRdfa)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-parsers.json#myRdfParserHtmlRdfa',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html_Bus_RdfParseHtml
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_literal_normalize_json_myNFKDNormalize = new (require('@treecg/actor-literal-normalize-nfkd').ActorLiteralNormalizeNFKD)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/literal-normalize.json#myNFKDNormalize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__treecg_bus_literal_normalize_Bus_LiteralNormalize
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_literal_normalize_json_mediatorLiteralNormalize = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/literal-normalize.json#mediatorLiteralNormalize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__treecg_bus_literal_normalize_Bus_LiteralNormalize
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataAll = new (require('@comunica/actor-rdf-metadata-all').ActorRdfMetadataAll)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/resolve-hypermedia.json#myRdfMetadataAll',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_Bus_RdfMetadata
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_mediatorMetadata = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/resolve-hypermedia.json#mediatorMetadata',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_Bus_RdfMetadata
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataExtractHydraControls = new (require('@comunica/actor-rdf-metadata-extract-hydra-controls').ActorRdfMetadataExtractHydraControls)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/resolve-hypermedia.json#myRdfMetadataExtractHydraControls',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract_Bus_RdfMetadataExtract
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataExtractHydraCount = new (require('@comunica/actor-rdf-metadata-extract-hydra-count').ActorRdfMetadataExtractHydraCount)({
  'predicates': [
  'http://www.w3.org/ns/hydra/core#totalItems',
  'http://rdfs.org/ns/void#triples'
],
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/resolve-hypermedia.json#myRdfMetadataExtractHydraCount',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract_Bus_RdfMetadataExtract
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataExtractTree = new (require('@treecg/actor-rdf-metadata-extract-tree').ActorRdfMetadataExtractTree)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/resolve-hypermedia.json#myRdfMetadataExtractTree',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract_Bus_RdfMetadataExtract
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_mediatorMetadataExtract = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'metadata',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/resolve-hypermedia.json#mediatorMetadataExtract',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract_Bus_RdfMetadataExtract
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_myHypermediaLinksTreeAll = new (require('@treecg/actor-rdf-resolve-hypermedia-links-tree-all').ActorRdfResolveHypermediaLinksTreeAll)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/resolve-hypermedia.json#myHypermediaLinksTreeAll',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_links_Bus_RdfResolveHypermediaLinks
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_mediatorHypermediaLinks = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/resolve-hypermedia.json#mediatorHypermediaLinks',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_links_Bus_RdfResolveHypermediaLinks
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_tree_score_json_mediatorTreeScore = new (require('@treecg/mediator-combine-sequence').MediatorCombineSequence)({
  'testField': 'suitable',
  'outputField': 'score',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/tree-score.json#mediatorTreeScore',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__treecg_bus_tree_score_Bus_TreeScore
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_tree_score_json_myRdfScoreExactPrefix = new (require('@treecg/actor-tree-score-exact-prefix').ActorTreeScoreExactPrefix)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/tree-score.json#myRdfScoreExactPrefix',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__treecg_bus_tree_score_Bus_TreeScore
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserJsonLd = new (require('@comunica/actor-rdf-parse-jsonld').ActorRdfParseJsonLd)({
  'mediatorHttp': https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_http_json_mediatorHttp,
  'mediaTypes': {
  'application/ld+json': '1.0',
  'application/json': '0.5'
},
  'mediaTypeFormats': {
  'application/ld+json': 'http://www.w3.org/ns/formats/JSON-LD',
  'application/json': 'http://www.w3.org/ns/formats/JSON-LD'
},
  'priorityScale': '9.0E-1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-parsers.json#myRdfParserJsonLd',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_dereference_json_rdfDereferencer = new (require('@comunica/actor-rdf-dereference-http-parse').ActorRdfDereferenceHttpParse)({
  'mediatorHttp': https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_http_json_mediatorHttp,
  'mediatorRdfParseMediatypes': https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_mediatorRdfParseMediatypes,
  'mediatorRdfParseHandle': https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_mediatorRdfParseHandle,
  'maxAcceptHeaderLength': 1024,
  'maxAcceptHeaderLengthBrowser': 128,
  'mediaMappings': {
  'ttl': 'text/turtle',
  'turtle': 'text/turtle',
  'nt': 'application/n-triples',
  'ntriples': 'application/n-triples',
  'nq': 'application/n-quads',
  'nquads': 'application/n-quads',
  'rdf': 'application/rdf+xml',
  'rdfxml': 'application/rdf+xml',
  'owl': 'application/rdf+xml',
  'n3': 'text/n3',
  'trig': 'application/trig',
  'jsonld': 'application/ld+json',
  'json': 'application/json',
  'html': 'text/html',
  'htm': 'text/html',
  'xhtml': 'application/xhtml+xml',
  'xht': 'application/xhtml+xml',
  'xml': 'application/xml',
  'svg': 'image/svg+xml',
  'svgz': 'image/svg+xml'
},
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-dereference.json#rdfDereferencer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_dereference_Bus_RdfDereference
});
const urn_comunica_typeaheadinit = new (require('@treecg/actor-init-typeahead').ActorInitTypeahead)({
  'mediatorRdfDereference': https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_dereference_json_mediatorRdfDereference,
  'mediatorRdfScore': https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_score_json_mediatorRdfScore,
  'mediatorLiteralNormalize': https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_literal_normalize_json_mediatorLiteralNormalize,
  'mediatorMetadata': https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_mediatorMetadata,
  'mediatorMetadataExtract': https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_mediatorMetadataExtract,
  'mediatorHypermediaLinks': https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_mediatorHypermediaLinks,
  'mediatorTreeScore': https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_tree_score_json_mediatorTreeScore,
  'name': 'urn:comunica:typeaheadinit',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_score_json_myRdfScoreBiGram = new (require('@treecg/actor-rdf-score-bigram').ActorRdfScoreBiGram)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-score.json#myRdfScoreBiGram',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__treecg_bus_rdf_score_Bus_RdfScore,
  'beforeActors': [
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_score_json_myRdfScoreStringLength
]
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_http_json_myHttpProxy = new (require('@comunica/actor-http-proxy').ActorHttpProxy)({
  'mediatorHttp': https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_http_json_mediatorHttp,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/http.json#myHttpProxy',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http,
  'beforeActors': [
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_http_json_myHttpFetcher
]
});
const https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_score_json_myRdfScoreExactPrefix = new (require('@treecg/actor-rdf-score-exact-prefix').ActorRdfScoreExactPrefix)({
  'maxPrefixTolerance': [
  '1'
],
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@treecg/actor-init-typeahead/^1.0.0/config/sets/rdf-score.json#myRdfScoreExactPrefix',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__treecg_bus_rdf_score_Bus_RdfScore,
  'beforeActors': [
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_score_json_myRdfScoreBiGram
]
});
const urn_comunica_my = ({
  'busInit': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init,
  'actors': [
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_score_json_myRdfScoreExactPrefix,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_score_json_myRdfScoreBiGram,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_score_json_myRdfScoreStringLength,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_http_json_myHttpProxy,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_http_json_myHttpFetcher,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_dereference_json_rdfDereferencer,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserN3,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserJsonLd,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserRdfXml,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserXmlRdfa,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtml,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtmlMicrodata,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtmlRdfa,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_literal_normalize_json_myNFKDNormalize,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataAll,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataExtractHydraControls,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataExtractHydraCount,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataExtractTree,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_resolve_hypermedia_json_myHypermediaLinksTreeAll,
  urn_comunica_typeaheadinit,
  https___linkedsoftwaredependencies_org_bundles_npm__treecg_actor_init_typeahead__1_0_0_config_sets_tree_score_json_myRdfScoreExactPrefix
]
});
module.exports = urn_comunica_typeaheadinit;

