sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"

], function(Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.nav.controller.QuickPayment", {

		onInit: function(evt) {
			// set explored app's demo model on this sample
			var oModel = new sap.ui.model.json.JSONModel("json/Tree.json");
			this.getView().setModel(oModel);
			this.clear();
		},

		handleButtonPress: function(evt) {
			alert(evt.oSource.mProperties.text);

			if ("Procedure and Guidelines" == evt.oSource.mProperties.text) {

				$("#__panel0").show();
				$("#__panel1").show();
				$("#__panel2").show();
				$("#__panel3").show();
				$("#__panel4").show();
				$("#__panel5").show();
				$("#__panel6").hide();
				$("#__panel7").hide();
				$("#__panel8").hide();
				$("#__panel9").hide();
				$("#__panel10").hide();
				$("#__panel11").hide();
				$("#__panel12").hide();
				$("#__panel13").hide();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();

			}
			if ("Estimation of Security Deposit" == evt.oSource.mProperties.text) {
				$("#__panel0").hide();
				$("#__panel1").hide();
				$("#__panel2").hide();
				$("#__panel3").hide();
				$("#__panel4").hide();
				$("#__panel5").hide();
				$("#__panel6").show();
				$("#__panel7").hide();
				$("#__panel8").hide();
				$("#__panel9").hide();
				$("#__panel10").hide();
				$("#__panel11").hide();
				$("#__panel12").hide();
				$("#__panel13").hide();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();
			}
			if ("Application Forms (3)" == evt.oSource.mProperties.text) {
				$("#__panel0").hide();
				$("#__panel1").hide();
				$("#__panel2").hide();
				$("#__panel3").hide();
				$("#__panel4").hide();
				$("#__panel5").hide();
				$("#__panel6").hide();
				$("#__panel7").show();
				$("#__panel8").hide();
				$("#__panel9").hide();
				$("#__panel10").hide();
				$("#__panel11").hide();
				$("#__panel12").hide();
				$("#__panel13").hide();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();
			}
			if ("FAQs" == evt.oSource.mProperties.text) {

				$("#__panel0").hide();
				$("#__panel1").hide();
				$("#__panel2").hide();
				$("#__panel3").hide();
				$("#__panel4").hide();
				$("#__panel5").hide();
				$("#__panel6").hide();
				$("#__panel7").hide();
				$("#__panel8").show();
				$("#__panel9").hide();
				$("#__panel10").hide();
				$("#__panel11").hide();
				$("#__panel12").hide();
				$("#__panel13").hide();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();

			}
			if ("Standard Drawings" == evt.oSource.mProperties.text) {

				$("#__panel0").hide();
				$("#__panel1").hide();
				$("#__panel2").hide();
				$("#__panel3").hide();
				$("#__panel4").hide();
				$("#__panel5").hide();
				$("#__panel6").hide();
				$("#__panel7").hide();
				$("#__panel8").hide();
				$("#__panel9").show();
				$("#__panel10").hide();
				$("#__panel11").hide();
				$("#__panel12").hide();
				$("#__panel13").hide();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();

			}
			if ("Apply Online" == evt.oSource.mProperties.text) {

				$("#__panel0").hide();
				$("#__panel1").hide();
				$("#__panel2").hide();
				$("#__panel3").hide();
				$("#__panel4").hide();
				$("#__panel5").hide();
				$("#__panel6").hide();
				$("#__panel7").hide();
				$("#__panel8").hide();
				$("#__panel9").hide();
				$("#__panel10").show();
				$("#__panel11").hide();
				$("#__panel12").hide();
				$("#__panel13").hide();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();

			}
			if ("Apply Online - 100kW" == evt.oSource.mProperties.text) {
				$("#__panel0").hide();
				$("#__panel1").hide();
				$("#__panel2").hide();
				$("#__panel3").hide();
				$("#__panel4").hide();
				$("#__panel5").hide();
				$("#__panel6").hide();
				$("#__panel7").hide();
				$("#__panel8").hide();
				$("#__panel9").hide();
				$("#__panel10").hide();
				$("#__panel11").show();
				$("#__panel12").hide();
				$("#__panel13").hide();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();
			}
			if ("Check your online reference number" == evt.oSource.mProperties.text) {
				$("#__panel0").hide();
				$("#__panel1").hide();
				$("#__panel2").hide();
				$("#__panel3").hide();
				$("#__panel4").hide();
				$("#__panel5").hide();
				$("#__panel6").hide();
				$("#__panel7").hide();
				$("#__panel8").hide();
				$("#__panel9").hide();
				$("#__panel10").hide();
				$("#__panel11").hide();
				$("#__panel12").show();
				$("#__panel13").hide();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();

			}
			if ("Changeover Connection" == evt.oSource.mProperties.text) {
				$("#__panel0").show();
				$("#__panel1").hide();
				$("#__panel2").hide();
				$("#__panel3").hide();
				$("#__panel4").hide();
				$("#__panel5").hide();
				$("#__panel6").hide();
				$("#__panel7").hide();
				$("#__panel8").hide();
				$("#__panel9").hide();
				$("#__panel10").hide();
				$("#__panel11").hide();
				$("#__panel12").hide();
				$("#__panel13").hide();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();

			}
			if ("Procedure and Guidelines " == evt.oSource.mProperties.text) {
				$("#__panel0").show();
				$("#__panel1").hide();
				$("#__panel2").hide();
				$("#__panel3").hide();
				$("#__panel4").hide();
				$("#__panel5").hide();
				$("#__panel6").hide();
				$("#__panel7").hide();
				$("#__panel8").hide();
				$("#__panel9").hide();
				$("#__panel10").hide();
				$("#__panel11").hide();
				$("#__panel10").hide();
				$("#__panel11").hide();
				$("#__panel12").hide();
				$("#__panel13").show();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();

			}
			if ("Estimation of Security Deposit " == evt.oSource.mProperties.text) {

				$("#__panel0").hide();
				$("#__panel1").hide();
				$("#__panel2").hide();
				$("#__panel3").hide();
				$("#__panel4").hide();
				$("#__panel5").hide();
				$("#__panel6").hide();
				$("#__panel7").hide();
				$("#__panel8").hide();
				$("#__panel9").hide();
				$("#__panel10").hide();
				$("#__panel11").hide();
				$("#__panel12").hide();
				$("#__panel13").hide();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();

			}
			if ("Application Forms" == evt.oSource.mProperties.text) {
				$("#__panel0").hide();
				$("#__panel1").hide();
				$("#__panel2").hide();
				$("#__panel3").hide();
				$("#__panel4").hide();
				$("#__panel5").hide();
				$("#__panel6").hide();
				$("#__panel7").hide();
				$("#__panel8").hide();
				$("#__panel9").hide();
				$("#__panel10").hide();
				$("#__panel11").hide();
				$("#__panel12").hide();
				$("#__panel13").hide();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();

			}
			if ("FAQs " == evt.oSource.mProperties.text) {

				$("#__panel0").hide();
				$("#__panel1").hide();
				$("#__panel2").hide();
				$("#__panel3").hide();
				$("#__panel4").hide();
				$("#__panel5").hide();
				$("#__panel6").hide();
				$("#__panel7").hide();
				$("#__panel8").hide();
				$("#__panel9").hide();
				$("#__panel10").hide();
				$("#__panel11").hide();
				$("#__panel12").hide();
				$("#__panel13").hide();
				$("#__panel14").hide();
				$("#__panel15").hide();
				$("#__panel16").hide();

			}

		},

		clear: function() {
			//	alert();
			$("#__panel0").hide();
			$("#__panel1").hide();
			$("#__panel2").hide();
			$("#__panel3").hide();
			$("#__panel4").hide();
			$("#__panel5").hide();
			$("#__panel6").hide();
			$("#__panel7").hide();
			$("#__panel8").hide();
			$("#__panel9").hide();
			$("#__panel10").hide();
			$("#__panel11").hide();
			$("#__panel12").hide();
			$("#__panel13").hide();
			$("#__panel14").hide();
			$("#__panel15").hide();
			$("#__panel16").hide();

		},
		onBeforeRendering: function() {
			this.clear();
		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.core.demo.nav.view.PaymentHistory
		 */
		onAfterRendering: function() {
			this.clear();
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.core.demo.nav.view.PaymentHistory
		 */
		onExit: function() {
			this.clear();
		}

	});

});