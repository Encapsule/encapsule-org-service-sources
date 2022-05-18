// html5-service-runtime.js
// This is the main entry point of the HTML5 client JavaScript application that runs in the browser.

(function() {

    const {
        // HolisticHTML5Service is an JavaScript class definition that encapsulates
        // synthesis of an application-specialized @encapsule/holarchy.CellModel that
        // represents all of logic needed by the browser-hosted JavaScript client
        // application runtime.
        HolisticHTML5Service,
        // displayServiceException is an @encapsule/arccore.filter instance whose
        // request method uses low-level DOM API's to erase whatever is displayed
        // with a full-page error dialog that shows details passed through the filter's
        // request in-parameters.
        displayServiceException // This is an @encapsule/arccore.filter instance
    } = require("@encapsule/holistic-html5-service");

    let appServiceCore = null;

    let errors = []; // This is not a filter but use filter-like control flow here.
    let inBreakScope = false;

    try {

        while (!inBreakScope) {
            inBreakScope = true;

            // appServiceCore is an instance of @encapsule/holistic-service-core.HolisticServiceCore class
            // that defines all the common logic and metadata shared by both the HolisticNodeService and
            // HolisticHTML5Service service @encapsule/holarchy.CellProcessor instances.

            appServiceCore = require("../COMMON/app-service-core");
            if (!appServiceCore.isValid()) {
                errors.push("Your HolisticServiceCore instance is not valid:");
                errors.push(appServiceCore.toJSON());
                break;
            }

            // The HolisticHTML5Service class constructor request object is defined in a separate module
            // to make it simple to leverage a @encapsule/holodeck-assets test harness to define custom
            // test vectors for your specific HolisticHTML5Service specializations.

            const html5ServiceConstructorRequest = require("./html5-service-constructor-request");

            // Construct an instance of HolisticHTML5Service class which synthesizes a specialized
            // @encapsule/holarchy.CellModel representing all the client application logic that is
            // used to instantiate an @encapsule/holarchy.CellProcessor instance that hosts the client
            // application's runtime service.

            const html5Service = new HolisticHTML5Service(html5ServiceConstructorRequest);

            if (!html5Service.isValid()) {
                errors.push("Unable to construct new HolisticHTML5Service instance:");
                errors.push(html5Service.toJSON());
                break;
            }

            // Now we have constructed a service runtime environment (an @encapsule/holarchy.CellProcessor instance)
            // in our stack frame that represents the entirely of the client application's runtime logic and current
            // runtime state. Next step is to "boot" the runtime by effectively calling CellProcessor.act method to
            // deserialize the "bootROM", update the displayed page content, register event handlers, complete runtime
            // initialization, activate application-specific cell processes...
            let bootResponse = html5Service.boot();

            if (bootResponse.error) {
                errors.push("Unable to boot the HolisticHTML5Service instance due to unexpected error:");
                errors.push(bootResponse.error);
                break;
            }

            // After this entry point routine completes the service's specialized @encapsule/holarchy.CellProcessor
            // instance reacts to external actor calls to its 'act' method. External actors include event callbacks
            // set up during boot, user interactions, and potentially a developer who wants to manually act on the
            // runtime to investigate some or another failure. To make this last scenario possible we assign a
            // reference to the HolisticHTML5Service class instance's contained CellProcessor instance to the global
            // window variable.

            window.holisticHTML5Service = html5Service._private.serviceRuntime;

            break;

        } // while !inBreakScope

    } catch (bootstrapException_) {
        // Not so great news...
        errors.push("Suspended HolisticHTML5Service process cannot be deserialized from this HTML5 document and/or cannot be reactivated inside browser tab process due to unexpected error:");
        errors.push(bootstrapException_.message);
    }

    if (errors.length) {

        const appBuild = appServiceCore?appServiceCore.getAppBuild():"D.O.A";

        console.error(errors.join(" "));

        displayServiceException.request({
            appBuild: appBuild,
            headerText: "HolisticHTML5Service could not be started due to fatal error >:/",
            errorText: errors.join("\n")
        });

   }

})();
