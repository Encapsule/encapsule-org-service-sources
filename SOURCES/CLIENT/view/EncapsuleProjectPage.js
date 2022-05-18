
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

                const holisticHTML5Service = window.holisticHTML5Service;

                const { renderContext, renderData } = this.props;

                let keyCount = 0;
                function makeKey() { return (`EncapsuleProjectPage${keyCount++}`); }
                const content = [];

                content.push(<h1 key={makeKey()}>Hello, World!</h1>);

                content.push(<p key={makeKey()}>You have reached Encapsule.org which is a Node.js / HTML5 test application derived from <a href="https://github.com/Encapsule/holistic">@encapsule/holistic</a> vLatest that is deployed on the <a href="https://digitalocean.com">Digital Ocean</a> cloud service.</p>);
                content.push(<p key={makeKey()}>Check on the <a href="/health" title="Check HolisticNodeService health & status...">health</a> of the HolisticNodeService backend server process.</p>);
                content.push(<p key={makeKey()}>When this application is complete it will replace all existing static documentation with dynamic content and interactive examples.</p>);
                content.push(<p key={makeKey()}>Meanwhile please visit <a href="https://encapsule.io" title="Encapsule.io...">Encapsule.io</a> for online <a href="https://github.com/Encapsule/arccore">@encapsule/arccore</a> package documentation.</p>);

                content.push(<p key={makeKey()}>Visit <a href="https://github.com/Encapsule" title="Encapsule Project GitHub...">Encapsule Project GitHub</a> to browse public library and tools sources.</p>);
                content.push(<p key={makeKey()}>Follow <a href="https://twitter.com/Encapsule" title="Encapsule Project Twitter...">Encapsule Project Twitter</a> for news and updates.</p>);

                content.push(<p key={makeKey()}><strong><i>-- Everything that follows here is just debugging information that exposes the current state of this application service. --</i></strong></p>);

                content.push(<h1 key={makeKey()}>this.props</h1>);
                content.push(<p key={makeKey()}>This is a JSON serialization of 'this.props' passed into the React component that renders this simple page.</p>);
                content.push(<pre key={makeKey()}>{JSON.stringify(this.props, undefined, 4)}</pre>);

                // HolisticHTML5Service
                content.push(<h1 key={makeKey()}>HolisticHTML5Service</h1>);
                content.push(<p key={makeKey()}>This the following subsections are JSON serializations obtained by calling read accessor functions defined by @encapsule/holarchy.CellProcessor class on the 'window.holisticHTML5Service' class instance that codifies client application runtime logic and current state.</p>);

                content.push(<h2 key={makeKey()}>window.holisticHTML5Service.devArtifacts</h2>);
                content.push(<p key={makeKey()}>A list of all plug-in @encapsule/holarchy model artifact types available registered for use in this @encapsule/holarchy.CellProcessor instance.</p>);
                content.push(<pre key={makeKey()}>{JSON.stringify(holisticHTML5Service.devArtifacts, undefined, 4)}</pre>);

                content.push(<h2 key={makeKey()}>window.holisticHTML5Service.devCells</h2>);
                content.push(<p key={makeKey()}>A list of currently-activated cell processes managed by this @encapsule/holarchy.CellProcessor instance.</p>);
                content.push(<pre key={makeKey()}>{JSON.stringify(holisticHTML5Service.devCells, undefined, 4)}</pre>);

                content.push(<h2 key={makeKey()}>window.holisticHTML5Service.devData</h2>);
                content.push(<p key={makeKey()}>{'A JSON serialization of the current state of the @encapsule/holarchy.CellProcessor instance\'s contained ObservableCellData store.'}</p>);
                content.push(<pre key={makeKey()}>{JSON.stringify(holisticHTML5Service.devData, undefined, 4)}</pre>);

                content.push(<h2 key={makeKey()}>window.holisticHTML5Service.devInfo</h2>);
                content.push(<p key={makeKey()}>A JSON serialization of high-level information about this @encapsule/holarchy.CellProcessor instance.</p>);
                content.push(<pre key={makeKey()}>{JSON.stringify(holisticHTML5Service.devInfo, undefined, 4)}</pre>);

                content.push(<h2 key={makeKey()}>window.holisticHTML5Service.devLastEval</h2>);
                content.push(<p key={makeKey()}>{'A JSON serialization of the @encapsule/holarchy.CellProcessor instance\'s last cellplane evaluation telemetry structure.'}</p>);
                content.push(<pre key={makeKey()}>{JSON.stringify(holisticHTML5Service.devLastEval, undefined, 4)}</pre>);

                content.push(<h2 key={makeKey()}>window.holisticHTML5Service.devProcesses</h2>);
                content.push(<p key={makeKey()}>{'This is a JSON serialization of the @encapsule/holarchy.CellProcessor instance\'s currently-activated owned and shared cell process graphs.'}</p>);
                content.push(<pre key={makeKey()}>{JSON.stringify(holisticHTML5Service.devProcesses, undefined, 4)}</pre>);

                content.push(<h2 key={makeKey()}>window.holisticHTML5Service.devSpec</h2>);
                content.push(<p key={makeKey()}>{'This is a JSON serialization of the @encapsule/holarchy.CellProcessor instance\'s contained ObservableCellData store.'}</p>);
                content.push(<pre key={makeKey()}>{JSON.stringify(holisticHTML5Service.devSpec, undefined, 4)}</pre>);

                return (<div style={{ margin: "0px", padding: "1em" }}>{content}</div>);

            } // render

        }

    });

    if (gdsmResponse.error) {
        throw new Error(gdsmResponse.error);
    }

    module.exports = gdsmResponse.result;


})();

