sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
],
function (Controller, MessageBox, JSONModel) {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onInit: function () {
            let oModel = new JSONModel({
                counter: 0
            });
            this.getView().setModel(oModel);
        },
        onFirstBtnPress: function () { 
            const oModel = this.getView().getModel();
            const iCounter = 0;
            oModel.setProperty("/counter", iCounter);
            MessageBox.success(`Counter successfully cleared`);
        },
        onSecondBtnPress: function () { 
            const oModel = this.getView().getModel();
            let iCounter = oModel.getProperty("/counter");
            iCounter++;
            oModel.setProperty("/counter", iCounter);
            MessageBox.information(`You clicked on btn ${iCounter} times`);
        },
        onThirdBtnPress: function () { 
            const oModel = this.getView().getModel();
            let iCounter = oModel.getProperty("/counter");
            iCounter += 1000;
            oModel.setProperty("/counter", iCounter);
        }
    });
});
