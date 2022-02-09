// SOURCES/CLIENT/html5-service/index.js

(function() {

    const html5ServiceCell_Declaration = {

        // This is a _partial_ declaration of Viewpath5's top-level app service model.
        // It is passed into the HolisticHTML5Service::constructor function by reference
        // to become the fully-specialized CellModel that is activated when the
        // HolisticHTML5Service_Kernel process completes its initialization and boot
        // process steps.

        id: "eqpX1M-aRPKuiL6RjgU-Kg",
        name: "AAAAAAABBBBBBCCCCCC",
        description: "This is a ksdjfskjhdfksjh  ksjfhsd kjshfd kjwehtmfnbzxvowtoijwoiazlkfvqweiprugh.",

        apmDeclaration: require("./AbstractProcessModel-html5-service"),

        actions: [
            // require("./ControllerAction-html5-service-step-worker")
        ],

        operators: [
        ],

        subcells: [
        ],

        lifecycle: {
            errorFunction: require("./html5-service-lifecycle-error") // lifecycle-action-error")
        }

    }; // html5ServiceCell_Declaration

    module.exports = html5ServiceCell_Declaration

})();

