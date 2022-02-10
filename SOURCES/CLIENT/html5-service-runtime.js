// html5-service-runtime.js
// This is the main entry point of the HTML5 client JavaScript application that runs in the browser.

(function() {

    const { HolisticHTML5Service, displayServiceException } = require("@encapsule/holistic-html5-service");

    let appServiceCore = null;

    let errors = []; // This is not a filter but use filter-like control flow here.
    let inBreakScope = false;

    try {

        while (!inBreakScope) {
            inBreakScope = true;

            appServiceCore = require("../COMMON/app-service-core");
            if (!appServiceCore.isValid()) {
                errors.push("Your HolisticServiceCore instance is not valid:");
                errors.push(appServiceCore.toJSON());
                break;
            }

            const html5ServiceConstructorRequest = require("./html5-service-constructor-request");

            const html5Service = new HolisticHTML5Service(html5ServiceConstructorRequest);

            if (!html5Service.isValid()) {
                errors.push("Unable to construct new HolisticHTML5Service instance:");
                errors.push(html5Service.toJSON());
                break;
            }

            // Re-activate the tab service process that was dynamically synthesized by our Node.js service process (into an HTML5 document).
            let bootResponse = html5Service.boot();
            if (bootResponse.error) {
                errors.push("Unable to boot the HolisticHTML5Service instance due to unexpected error:");
                errors.push(bootResponse.error);
                break;
            }

            window.html5ServiceInstance = html5Service._private.serviceRuntime; // This is a little debug alias allowing devs to get at the HTML5 service's CellProcessor instance.

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
