
(function() {

    const httpServiceFilterFactory = require("@encapsule/holism").service;

    const factoryResponse = httpServiceFilterFactory.create({
        id: "nymKRRepSYma8UHCsidOmg",
        name: "Backend Storage Status",
        description: "Returns a JSON-encoded object w/current disposition of the backend's storage service.",

        constraints: {
            request: {
                content: { encoding: "utf8", type: "text/plain" },
                query_spec: { ____opaque: true },
                request_spec: { ____opaque: true }
            },
            response: {
                content: { encoding: "utf8", type: "application/json" },
                error_context_spec: { ____opaque: true },
                result_spec: { ____opaque: true }
            }
        },

        handlers: {

            request_handler: function(request_) {

                let response = { error: null, result: undefined };
                let errors = [];
                let inBreakScope = false;
                while (!inBreakScope) {
                    inBreakScope = true;

                    let responderResponse = request_.response_filters.result.request({
                        ...request_,
                        response_descriptor: {
                            http: { code: 200, message: "Kick ass, dude." },
                            content: { encoding: "utf8", type: "application/json" },
                            data: request_.integrations.appStateContext.storage.postgresql()
                        }
                    });

                    break;
                }
                if (errors.length) {
                    response.error = errors.join(" ");
                }
                return response;
            }

        }

    });

    if (factoryResponse.error) {
        throw new Error(factoryResponse.error);
    }

    module.exports = factoryResponse.result;


})();

