// html5-service-constructor-request.js

(function() {

    const appServiceCore = require("../COMMON/app-service-core");

    // const ViewpathPage = require("./view/ViewpathPage");
    // const ViewpathPageHeader = require("./view/ViewpathPageHeader");
    // const ViewpathPageFooter = require("./view/ViewpathPageFooter");
    // const ViewpathPageContent = require("./view/ViewpathPageContent");
    // const DataGatewaySpecializations = require("./storage/backend");

    const EncapsuleProjectPage = require("./view/EncapsuleProjectPage");

    module.exports = {

        appServiceCore,

        appModels: {

            html5ServiceCell: require("./html5-service"),

            cellModels: [
                // Register CellModel references defined in SOURCES/CLIENT here.

                EncapsuleProjectPage.CellModel


                /*
                ViewpathPage.CellModel,
                ViewpathPageHeader.CellModel,
                ViewpathPageFooter.CellModel,
                ViewpathPageContent.CellModel,

                DataGatewaySpecializations.readOrgProfileDefinitionModel,
                DataGatewaySpecializations.readOrgProjectDefinitionsModel,
                DataGatewaySpecializations.readOrgProjectsReportModel,
                DataGatewaySpecializations.readOrgResourceDefinitionsModel,
                DataGatewaySpecializations.readOrgResourceReservationsModel,
                DataGatewaySpecializations.readOrgSummaryReportModel,
                DataGatewaySpecializations.writeOrgDataUpdatesModel,
                */
            ],

            display: {
                d2r2Components: [
                    // Register d2r2 components defined in SOURCES/CLIENT/display/* here. (But, don't actually - see ./display/README.md)

                    EncapsuleProjectPage.d2r2Component

                    /*
                    ViewpathPage.d2r2Component,
                    ViewpathPageHeader.d2r2Component,
                    ViewpathPageFooter.d2r2Component,
                    ViewpathPageContent.d2r2Component,
                    */

                ]
            }
        }
    }


})();

