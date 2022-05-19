"use strict";

(function () {
  var path = require("path"); // used only for logging here - leave path manipulation to the HolisticNodeService implementation to deal w/

  // As of holistic v0.0.49-spectrolite this is now a callback function dispatched inside a filter.

  module.exports = function (_ref) {

      var appBuild = _ref.appBuild,
          deploymentEnvironment = _ref.deploymentEnvironment;

      console.log("> \"".concat(path.resolve(__filename), "\" Preparing deploymentEnvironment=").concat(deploymentEnvironment, " @encapsule/holism-format memory-cached cached file resource route map for ").concat(appBuild.app.name, " to return back to @encapsule/holism config orchestrator."));

      var cacheControlOverride = `immutable, public, max-age=${(45/*days*/ * 24/*hours/day*/ * 60/*mins/hour*/ * 60/*secs/min*/)}`; // browser cache asset timeout example

      var memoryFileRegistrationMap = {

          // ======================================================================
          // STYLESHEETS
          // ======================================================================

          "ASSETS/css/encapsule-org-base-styles.css": {
              request_bindings: { method: "GET", uris: [ "/css/encapsule-org-base-styles.css" ] },
              response_properties: { contentEncoding: "utf8", contentType: "text/css" }
          },


          // ======================================================================
          // IMAGES
          // ======================================================================

          './ASSETS/images/seattle-emp-gehry-bronze-wall.jpg': {
              request_bindings: { uris: [ '/bronze-wall.jpg', '/images/bronze-wall.jpg' ], method: 'GET' },
              response_properties: { contentEncoding: 'binary', contentType: 'image/jpeg' }
          },

          './ASSETS/images/twitter.svg': {
              request_bindings: { uris: [ '/images/twitter.svg' ], method: 'GET' },
              response_properties: { contentEncoding: 'binary', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/github-octocat.svg': {
              request_bindings: { uris: [ '/images/github-octocat.svg' ], method: 'GET' },
              response_properties: { contentEncoding: 'binary', contentType: 'image/svg+xml' }
          },

          // TODO: deprecate these as soon as npm package logos are updated for all packages.
          // https://encapsule.io/images/blue-burst-encapsule.io-logo-251x64.png
          // v DEPRECATE ASAP
          './ASSETS/images/blue-burst-encapsule.io-logo-251x64.png': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-logo-251x64.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/blue-burst-encapsule.io-logo.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-logo.svg' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/svg+xml' }
          },
          // ^ DEPRECATE ASAP

          './ASSETS/images/blue-burst-encapsule.io-icon-16x16.png': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-icon-16x16.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/blue-burst-encapsule.io-icon-24x24.png': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-icon-24x24.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/blue-burst-encapsule.io-icon-32x32.png': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-icon-32x32.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/blue-burst-encapsule.io-icon-48x48.png': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-icon-48x48.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/blue-burst-encapsule.io-icon-56x56.png': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-icon-56x56.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/blue-burst-encapsule.io-icon-64x64.png': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-icon-64x64.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/blue-burst-encapsule.io-icon-72x72.png': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-icon-72x72.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/blue-burst-encapsule.io-icon-96x96.png': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-icon-96x96.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/blue-burst-encapsule.io-icon-1024x1024.png': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-icon-1024x1024.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/blue-burst-encapsule.io-icon-1024x1024.png': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-icon-1024x1024.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/blue-burst-encapsule.io-icon-490x478.png': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-icon-490x478.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/blue-burst-encapsule.io-icon-v2.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/blue-burst-encapsule.io-icon-v2.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-arccore.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-arccore.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-arccore-util.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-arccore-util.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-arccore-types.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-arccore-types.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-arccore-identifier.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-arccore-identifier.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-arccore-graph.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-arccore-graph.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-arccore-filter.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-arccore-filter.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-arccore-filter-32x32.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-arccore-filter-32x32.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-arccore-filter-32x32.png': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-arccore-filter-32x32.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/encapsule-arccore-discriminator.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-arccore-discriminator.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-hrequest.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-hrequest.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-holism.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-holism.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-holism-32x32.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-holism-32x32.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-holism-32x32.png': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-holism-32x32.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/encapsule-holistic.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-holistic.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-folder-icon.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-folder-icon.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },
          './ASSETS/images/encapsule-document-icon.svg': {
              request_bindings: { method: 'GET', uris: [ '/images/encapsule-document-icon.svg' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'image/svg+xml' }
          },

          './ASSETS/images/begin-at-the-beginning.jpg': {
              request_bindings: { method: 'GET', uris: [ '/images/begin-at-the-beginning.jpg' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/jpeg' }
          },

          './ASSETS/images/ITA-23.4.gif': {
              request_bindings: { method: 'GET', uris: [ '/images/ITA-23.4.gif' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/gif' }
          },

          './ASSETS/images/digraph-dfs-edge-types.png': {
              request_bindings: { method: 'GET', uris: [ '/images/digraph-dfs-edge-types.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },

          // ----------------------------------------------------------------------
          // Favorites icon
          // ----------------------------------------------------------------------
          './ASSETS/images/favicon.ico': {
	          request_bindings: { uris: [ '/favicon.ico', '/images/favicon.ico' ], method: 'GET' },
	          response_properties: { contentEncoding: 'binary', contentType: 'image/x-icon' }
          },
          './ASSETS/images/android-icon-192x192.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/android-icon-192x192.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/android-icon-144x144.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/android-icon-144x144.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/android-icon-96x96.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/android-icon-96x96.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/android-icon-72x72.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/android-icon-72x72.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/android-icon-48x48.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/android-icon-48x48.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/android-icon-36x36.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/android-icon-36x36.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/apple-icon-114x114.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/apple-icon-114x114.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/apple-icon-120x120.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/apple-icon-120x120.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/apple-icon-144x144.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/apple-icon-144x144.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/apple-icon-180x180.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/apple-icon-180x180.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/apple-icon-57x57.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/apple-icon-57x57.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/apple-icon-60x60.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/apple-icon-60x60.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/apple-icon-72x72.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/apple-icon-72x72.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/favicon-16x16.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/favicon-16x16.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/favicon-32x32.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/favicon-32x32.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/favicon-96x96.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/favicon-96x96.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/ms-icon-144x144.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/ms-icon-144x144.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/ms-icon-150x150.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/ms-icon-150x150.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/ms-icon-310x310.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/ms-icon-310x310.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/ms-icon-70x70.png' : {
              request_bindings: { method: 'GET', uris: [ '/images/ms-icon-70x70.png' ] },
              response_properties: { contentEncoding: 'binary', contentType: 'image/png' }
          },
          './ASSETS/images/manifest.json' : {
              request_bindings: { method: 'GET', uris: [ '/images/manifest.json' ] },
              response_properties: { contentEncoding: 'utf8', contentType: 'application/json' }
          },


          // ======================================================================
          // OTHER
          // ======================================================================
          './ASSETS/text/robots.txt': {
	          request_bindings: { method: 'GET', uris: [ '/robots.txt' ] },
	          response_properties: { contentEncoding: 'utf8', contentType: 'text/plain' }
          },


      /*
        // KEEP IN encapsule-org-service-sources for reference.

       // browserconfig.xml
      "ASSETS/images/browserconfig.xml": {
          request_bindings: { method: "GET", uris: [ "/browserconfig.xml" ] },
          response_properties: { contentEncoding: "utf8", contentType: "application/xml" }
      },
       // manifest.json
      "ASSETS/images/manifest.json": {
          request_bindings: { method: "GET", uris: [ "manifest.json", "/manifest.json" ] },
          response_properties: { contentEncoding: "utf8", contentType: "application/json" }
      },
        "ASSETS/images/g-logo.png": {
          request_bindings: { method: "GET", uris: [ "/images/g-logo.png"] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       "ASSETS/images/favicon-16x16.png": {
          request_bindings: { method: "GET", uris: [ "/favicon-16x16.png"] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       "ASSETS/images/favicon-32x32.png": {
          request_bindings: { method: "GET", uris: ["/favicon-32x32.png"] },
          response_properties: { contentEncoding: "binary", contentType: "image/png"  }
      },
       "ASSETS/images/favicon-48x48.png": {
          request_bindings: { method: "GET", uris: ["/favicon-48x48.png"] },
          response_properties: { contentEncoding: "binary", contentType: "image/png"  }
      },
       "ASSETS/images/favicon-96x96.png": {
          request_bindings: { method: "GET", uris: ["/favicon-96x96.png"] },
          response_properties: { contentEncoding: "binary", contentType: "image/png"  }
      },
       "ASSETS/images/favicon.ico": {
          request_bindings: { method: "GET", uris: ["/favicon.ico"] },
          response_properties: { contentEncoding: "binary", contentType: "image/x-icon"  }
      },
       "ASSETS/images/favicon.svg": {
          request_bindings: { method: "GET", uris: ["/images/favicon.svg"] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/images/encapsule-arccore.svg": {
          request_bindings: { method: "GET", uris: ["/images/encapsule-arccore.svg"] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml"  }
      },
       "ASSETS/images/encapsule-holistic.svg": {
          request_bindings: { method: "GET", uris: ["/images/encapsule-holistic.svg"] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml"  }
      },
       "ASSETS/images/react-logo.svg": {
          request_bindings: { method: "GET", uris: [ "/images/react-logo.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/images/warning-error-icon.svg": {
          request_bindings: { method: "GET", uris: [ "/images/warning-error-icon.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       // Android icons
      "ASSETS/images/android-icon-192x192.png": {
          request_bindings: { method: "GET", uris: ["/android-chrome-192x192.png"] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       "ASSETS/images/android-icon-512x512.png": {
          request_bindings: { method: "GET", uris: ["/android-chrome-512x512.png", "/android-chrome.png" ] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       // Apple icons
      "ASSETS/images/apple-icon-114x114.png": {
          request_bindings: { method: "GET", uris: [ "/apple-touch-icon-114x114.png" ] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
      "ASSETS/images/apple-icon-144x144.png": {
          request_bindings: { method: "GET", uris: [ "/apple-icon-144x144.png" ] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       "ASSETS/images/apple-icon-120x120.png": {
          request_bindings: { method: "GET", uris: [ "/apple-icon-120x120.png" ] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       "ASSETS/images/apple-icon-152x152.png": {
          request_bindings: { method: "GET", uris: [ "/apple-icon-152x152.png" ] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       "ASSETS/images/apple-icon-180x180.png": {
          request_bindings: { method: "GET", uris: [ "/apple-icon-180x180.png",  "/apple-touch-icon.png" ] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       "ASSETS/images/apple-icon-57x57.png": {
          request_bindings: { method: "GET", uris: [ "/apple-icon-57x57.png" ] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       "ASSETS/images/apple-icon-60x60.png": {
          request_bindings: { method: "GET", uris: [ "/apple-icon-60x60.png" ] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       "ASSETS/images/apple-icon-72x72.png": {
          request_bindings: { method: "GET", uris: [ "/apple-icon-72x72.png" ] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       "ASSETS/images/apple-icon-76x76.png": {
          request_bindings: { method: "GET", uris: [ "/apple-icon-76x76.png" ] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       //Microsoft icons and config
      "ASSETS/images/ms-icon-144x144.png": {
          request_bindings: { method: "GET", uris: [ "/images/ms-icon-144x144.png" ] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
       "ASSETS/images/mstile-150x150.png": {
          request_bindings: { method: "GET", uris: [ "/images/mstile-150x150.png" ] },
          response_properties: { contentEncoding: "binary", contentType: "image/png" }
      },
        // Icons
      "ASSETS/icons/link.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/link.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/add.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/add.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/garbage.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/garbage.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/save.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/save.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/broken-link.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/broken-link.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/unschedule.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/unschedule.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/schedule.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/schedule.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/settings.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/settings.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/zoom-in.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/zoom-in.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/zoom-out.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/zoom-out.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/cancel.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/cancel.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/launch.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/launch.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/arrow-thick-bottom.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/arrow-down.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/arrow-thick-top.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/arrow-up.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/arrow-thick-right.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/arrow-right.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/arrow-thick-left.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/arrow-left.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/file_copy.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/copy.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/table_chart.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/table-chart.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/email.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/email.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/phone.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/phone.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/triangle-down.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/triangle-down.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/triangle-right.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/triangle-right.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/question.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/question.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
       "ASSETS/icons/exclamation.svg": {
          request_bindings: { method: "GET", uris: [ "/icons/exclamation.svg" ] },
          response_properties: { contentEncoding: "utf8", contentType: "image/svg+xml" }
      },
      */

    };

    return {
      error: null,
      result: memoryFileRegistrationMap
    };

  }; // end HolisticAppServer::constructor function callback

})();
