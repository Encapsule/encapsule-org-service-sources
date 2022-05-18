"use strict";

// These options are registered w/HolisticNodeService via its constructor request at ~.appModels.httpRequestProcessor.holismConfig.lifecycle.renderHTML5Options
var appBuild = require("../../../app-build");

module.exports = {
    documentPrologueComments: "  <!-- This HTML5 document was synthesized by a HolisticNodeService cell process. -->\n",
    documentEpilogueComments: "    <!-- Live long and prosper. -->\n",
    documentHeadSectionLinksMeta: `
    <!-- Encapsule.org specific resource includes -->
    <link rel="stylesheet" href="/css/encapsule-org-base-styles.css">
`
};
