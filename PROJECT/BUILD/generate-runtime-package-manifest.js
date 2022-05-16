#!/usr/bin/env node

// THIS FILE IS CODE-GENERATED
// Encapsule holistic v0.4.1-shuksan qWz9bDhMRUuHfTWsrDRaLw ae2dc7a6190f40d8310f948aa48b7be3e1587574
//

(function() {

    const path = require("path");
    const arctoolslib = require("@encapsule/arctools");
    const program = arctoolslib.commander;
    const appServiceRuntimeDependencies = require("./app-service-runtime-dependencies.json");
    const appSourcesPackageManifest = require("../../package.json");

    function sortObjectKeys(input_) {
        let result = {};
        Object.keys(input_).sort().forEach(function(key_) {
	        result[key_] = input_[key_];
        });
        return result;
    }

    program
        .name("generate-runtime-package-manifest")
        .description("Generate runtime package manifest (package.json) from application build manifest (app-build.json).")
        .version("0.4.1")
        .option('--appBuildManifest <manifestPath>', 'Use <manifestPath> to select the location of the input app-build.json.')
        .parse(process.argv);

    if (!program.appBuildManifest) {
        console.error("Missing --appBuildManifest option value.");
        process.exit(1);
    }

    var filterResponse = arctoolslib.jsrcFileLoaderSync.request(program.appBuildManifest);
    if (filterResponse.error) {
        throw new Error("Invalid --appBuildManifest value. " + filterResponse.error);
    }

    const appBuildManifest = filterResponse.result.resource;

    // ================================================================
    // package.json generation

    let appRuntimePackageManifest = { ...appBuildManifest.app };
    appRuntimePackageManifest.name = `${appBuildManifest.app.name}-service-image`;
    appRuntimePackageManifest.description = `The '${appRuntimePackageManifest.name}' npm package contains a self-contained runtime image of the '${appBuildManifest.app.name}' holistic application service. See the included README.md for additional information.`;
    appRuntimePackageManifest.dependencies = sortObjectKeys(appServiceRuntimeDependencies);
    appRuntimePackageManifest.scripts = { start: "node ./SERVER/nodejs-service-runtime.js" };
    appRuntimePackageManifest.appgen = appSourcesPackageManifest.appgen;
    appRuntimePackageManifest.engines = appSourcesPackageManifest.engines;

    // Serialize the manifest as JSON and write to stdout.
    console.log(JSON.stringify(sortObjectKeys(appRuntimePackageManifest), undefined, 2));

})();

