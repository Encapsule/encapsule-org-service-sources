"use strict";

// These options are registered w/HolisticNodeService via its constructor request at ~.appModels.httpRequestProcessor.holismConfig.lifecycle.renderHTML5Options
var appBuild = require("../../../app-build");

module.exports = {
    documentPrologueComments: "  <!-- This HTML5 document was synthesized by a HolisticNodeService cell process. -->\n",
    documentEpilogueComments: "    <!-- Live long and prosper. -->\n",
    documentHeadSectionLinksMeta: `
    <!-- Encapsule.org specific resource includes -->
    <link rel="stylesheet" href="/css/encapsule-org-base-styles.css">
    <!-- See: http://www.favicon-generator.org/ -->
    <link rel="apple-touch-icon", sizes='57x57' href="/images/apple-icon-57x57.png">
    <link rel="apple-touch-icon", sizes="60x60", href="/images/apple-icon-60x60.png">
    <link rel="apple-touch-icon", sizes="72x72", href="/images/apple-icon-72x72.png">
    <link rel="apple-touch-icon", sizes="76x76", href="/images/apple-icon-76x76.png">
    <link rel="apple-touch-icon", sizes="114x114", href="/images/apple-icon-114x114.png">
    <link rel="apple-touch-icon", sizes="120x120", href="/images/apple-icon-120x120.png">
    <link rel="apple-touch-icon", sizes="144x144", href="/images/apple-icon-144x144.png">
    <link rel="apple-touch-icon", sizes="152x152", href="/images/apple-icon-152x152.png">
    <link rel="apple-touch-icon", sizes="180x180", href="/images/apple-icon-180x180.png">
    <link rel="icon", type="image/png", sizes="192x192", href="/images/android-icon-192x192.png">
    <link rel="icon", type="image/png", sizes="32x32", href="/images/favicon-32x32.png">
    <link rel="icon", type="image/png", sizes="96x96", href="/images/favicon-96x96.png">
    <link rel="icon", type="image/png", sizes="16x16", href="/images/favicon-16x16.png">
    <link rel="manifest", href="/images/manifest.json">
    <meta name="msapplication-TileColor", content="#ffffff" />
    <meta name="msapplication-TileImage", content="/ms-icon-144x144.png" />
`
};
