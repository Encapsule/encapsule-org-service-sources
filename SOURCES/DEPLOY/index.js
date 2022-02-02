
(function() {

    const arccore = require("@encapsule/arccore");
    const got = require("got");

    let x = got("https://encapsule-project-service-deploy-6dedu.ondigitalocean.app/agent");



    x.then(
        response_ => {
            console.log("================================================================");
            console.log("RESPONSE:");
            console.log(response_);
        }
    ).catch(
        error_ => {
            console.log("================================================================");
            console.log("ERROR:");
            console.log(error_);
        }
    );

    

})();
