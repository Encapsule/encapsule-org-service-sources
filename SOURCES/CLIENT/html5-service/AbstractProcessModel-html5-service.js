
(function() {

    const cmasEncapsuleProject = require("../../COMMON/cmas-encapsule-project");

    const apmDeclaration = {

        id: "5UGtkUMHRGyniDTLD2DHVw",
        name: "Encapsule Project HTML5 Service",
        description: "This APM models the top-level singleton cell process that represents the lifespan of a user's browser session.",

        ocdDataSpec: {
            ____types: "jsObject",
            ____defaultValue: {}

        },

        steps: {

            "app-service-start": {
                description: "HolisticHTML5Service kernel has activated and started the specialized application cell process. This process step name is reserved?",
                transitions: [ { transitionIf: { always: true }, nextStep: "app-service-running" } ]
            },

            "app-service-running": {
                description: "This is some process step label I made up. And, it's currently a terminal step; meaning that it defines no transitions.",
                actions: {
                    enter: [
                        {
                            holistic: {
                                app: {
                                    client: {
                                        display: {
                                            registerDisplayViewProcess: {
                                                processCoordinates: {
                                                    apmID: cmasEncapsuleProject.mapLabels({ APM: "EncapsuleProjectPage" }).result.APMID,
                                                    instanceName: "singleton"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ]
                }
            }

        }

    };

    module.exports = apmDeclaration;



})();

