"use strict";

// These options are registered w/HolisticNodeService via its constructor request at ~.appModels.httpRequestProcessor.holismConfig.lifecycle.renderHTML5Options
var appBuild = require("../../../app-build");

module.exports = {
    documentPrologueComments: "  <!-- This HTML5 document was synthesized by one of our Node.js backend servers.... -->\n",
    documentHeadSectionLinksMeta: "    <!-- ^--- Resources common to all holistic applications. v--- Resources specific to Encapsule.io application. -->\n",
    documentEpilogueComments: "    <!-- Live long and prosper. -->\n"
};
