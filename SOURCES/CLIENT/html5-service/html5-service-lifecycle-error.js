// lifecycle-action-error.js
// This action is dispatched by holistic app client kernel to inform the derived app runtime that a fatal error has occurred.

const { displayServiceException } = require("@encapsule/holistic-html5-service");

module.exports = function(actionRequest_) {
    let response = { error: null };
    let errors = [];
    let inBreakScope = false;
    while (!inBreakScope) {
        inBreakScope = true;
        console.log(`[${this.operationID}::${this.operationName}]`);

        // OH... This is really super cool ;-) Never waste time determining if and if so where async code is failing.
        // Just return response.error === String from ControllerAction or TransitionOperator and we will take care
        // of ensuring that your derived app client process is notified of the problem.
        //
        // NOTE: Your code should not contain any code paths that produce any transport error(s).
        // However, this in unavoidable when you're building / fixing. And, w/out this facility
        // it's very time consuming to even determine if there are error(s) occuring inside a
        // CellProcessor instance. This callback categorically answers that question.

        const messageBody = actionRequest_.actionRequest.holistic.app.client.lifecycle.error;

        console.error("**** APP CLIENT LIFECYCLE ERROR SIGNAL! ****");
        console.warn(messageBody);

        // TODO: This needs some love inside the RTL. e.g. make this a filter, take the appBuild in as a param, label the stuff...
        displayServiceException.request({
            appBuild: { app: { name: "TEST", version: "7.7.7", codename: "XYZ", buildID: "PDQ", buildSource: "FAKE" } }, // TODO: This is available from metadata which is currently on the floor in tab service (fix that next).
            headerText: [
                `${(messageBody.errorType == "action-error")?"EXTERNAL ACTOR FAIL":"CELLPLANE EVAL FAIL"}`,
                `${(messageBody.lifecyclePhase === "app-client-boot")?"during tab service BOOT":"in the tab service RUNTIME"}.`
            ].join(" "),
            errorText: messageBody.badResponse.error
        });
        break
    }
    if (errors.length) {
        response.error = errors.join(" ");
    }
    return response;
};
