
// EncapsuleProjectPage.js

(function() {

    // Standard library includes...

    const React = require("react");
    const holarchyCM = require("@encapsule/holarchy-cm");

    // ? const holisticHTML5ServicePackage = require("@encapsule/holistic-html5-service");

    // Application-level includes...
    const cmasEncapsuleProject = require("../../COMMON/cmas-encapsule-project");

    let gdsmResponse = holarchyCM.generateDisplayStreamModels.request({

        displayViewSynthesizeRequest: {
            cmasScope: cmasEncapsuleProject,
            cellModelLabel: "EncapsuleProjectPage",
            specializationData: {
                description: "This display layer cell model specialized for the top-level page.",
                displayElement: {
                    displayLayoutSpec: {
                        ____types: "jsObject",
                        ____defaultValue: {},
                        propX: {
                            ____accept: "jsString",
                            ____defaultValue: "This is the default string value assigned to the propX property."
                        }
                    } // displayLayoutSpec
                }, // displayElement
            }
        },

        reactComponentClass: class EncapsuleProjectPage extends React.Component {

            constructor(props_) {
                super(props_);
                console.log("EncapsuleProjectProjectPage::constructor");
                this.displayName="EncapsuleProjectPage";
            }

            render() {

                const { renderContext, renderData } = this.props;

                let keyCount = 0;
                function makeKey() { return (`EncapsuleProjectPage${keyCount++}`); }
                const content = [];

                content.push(<p key={makeKey()}>Hello, World!</p>);
                content.push(<p key={makeKey()}>displayName=<code>{this.displayName}</code></p>);
                content.push(<p key={makeKey()}>displayPath=<code>{this.displayPath}</code></p>);
                content.push(<p key={makeKey()}>apmBindingPath=<code>{renderContext.apmBindingPath}</code></p>);
                content.push(<p key={makeKey()}>d2r2BusState=<code>{renderContext.d2r2BusState}</code></p>);
                content.push(<p key={makeKey()}>displayInstance=<code>{renderContext.displayInstance}</code></p>);

                return (<div style={{ fontFamily: "Arial", fontSize: "16pt", margin: "0px", padding: "1em" }}>{content}</div>);

            } // render

        }

    });

    if (gdsmResponse.error) {
        throw new Error(gdsmResponse.error);
    }

    module.exports = gdsmResponse.result;


})();

