// cmasViewpath5.js
// This is the common root CellModelArtifactSpace for @encapsule/encapsule-project services.

(function() {

    const { CellModelArtifactSpace } = require("@encapsule/holarchy");

    const irutAnonymousNamespaceSeed = "D6dk3L15Q-yLyxc9p7Qt-g";

    const appBuild = require("../app-build");

    const cmas = new CellModelArtifactSpace({
        spaceLabel:  [
            "~",
            "D6dk3L15Q-yLyxc9p7Qt-g",
            appBuild.app.author,
            appBuild.app.name
        ].join(".")
    });

    if (!cmas.isValid()) {
        throw new Error(cmas.toJSON());
    }

    module.exports = cmas;

})();

