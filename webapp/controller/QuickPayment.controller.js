sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/demo/nav/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"

], function(Controller, MessageToast,BaseController, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.nav.controller.QuickPayment", {
	onDisplayNotFound : function (oEvent) {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
		},
	getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onInit: function(evt) {
			// set explored app's demo model on this sample
			var oModel = new sap.ui.model.json.JSONModel("json/Tree.json");
			this.getView().setModel(oModel);
			this.clear();
		},

		handleButtonPress: function(evt) {
			

			var oFrame1 = this.getView().byId("pnl_01");
			var oFrame2 = this.getView().byId("pnl_02");
			var oFrame3 = this.getView().byId("pnl_03");
			var oFrame4 = this.getView().byId("pnl_04");
			var oFrame5 = this.getView().byId("pnl_05");
			var oFrame6 = this.getView().byId("pnl_06");
			var oFrame7 = this.getView().byId("pnl_07");
			var oFrame8 = this.getView().byId("pnl_08");
			var oFrame9 = this.getView().byId("pnl_09");

			if ("Procedure and Guidelines" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").show();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();

			}
			if ("Estimation of Security Deposit" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").show();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();

			}
			if ("Application Forms (3)" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").show();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();

			}
			if ("FAQs" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").show();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();

			}
			if ("Standard Drawings" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").show();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
			}
			if ("Apply Online" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").show();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();

			}
			if ("Apply Online - 100kW" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").show();
				$("#" + oFrame8.sId + "").hide();
			}
			if ("Check your online reference number" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").show();

			}
			if ("Changeover Connection" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").show();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
			}
			if ("Procedure and Guidelines " == evt.oSource.mProperties.text) {

				$("" + oFrame1 + "").hide();
				$("" + oFrame2 + "").hide();
				$("" + oFrame3 + "").hide();
				$("" + oFrame9 + "").hide();
				$("" + oFrame4 + "").hide();
				$("" + oFrame5 + "").hide();
				$("" + oFrame6 + "").hide();
				$("" + oFrame7 + "").hide();
				$("" + oFrame8 + "").hide();

			}
			if ("Estimation of Security Deposit " == evt.oSource.mProperties.text) {

				$("" + oFrame1 + "").hide();
				$("" + oFrame2 + "").hide();
				$("" + oFrame3 + "").hide();
				$("" + oFrame9 + "").hide();
				$("" + oFrame4 + "").hide();
				$("" + oFrame5 + "").hide();
				$("" + oFrame6 + "").hide();
				$("" + oFrame7 + "").hide();
				$("" + oFrame8 + "").hide();

			}
			if ("Application Forms" == evt.oSource.mProperties.text) {

				$("" + oFrame1 + "").hide();
				$("" + oFrame2 + "").hide();
				$("" + oFrame3 + "").hide();
				$("" + oFrame9 + "").hide();
				$("" + oFrame4 + "").hide();
				$("" + oFrame5 + "").hide();
				$("" + oFrame6 + "").hide();
				$("" + oFrame7 + "").hide();
				$("" + oFrame8 + "").hide();

			}
			if ("FAQs " == evt.oSource.mProperties.text) {

				$("" + oFrame1 + "").hide();
				$("" + oFrame2 + "").hide();
				$("" + oFrame3 + "").hide();
				$("" + oFrame9 + "").hide();
				$("" + oFrame4 + "").hide();
				$("" + oFrame5 + "").hide();
				$("" + oFrame6 + "").hide();
				$("" + oFrame7 + "").hide();
				$("" + oFrame8 + "").hide();

			}

		},

		clear: function() {
			//	alert();
			var oFrame1 = this.getView().byId("pnl_01");
			var oFrame2 = this.getView().byId("pnl_02");
			var oFrame3 = this.getView().byId("pnl_03");
			var oFrame4 = this.getView().byId("pnl_04");
			var oFrame5 = this.getView().byId("pnl_05");
			var oFrame6 = this.getView().byId("pnl_06");
			var oFrame7 = this.getView().byId("pnl_07");
			var oFrame8 = this.getView().byId("pnl_08");
			var oFrame9 = this.getView().byId("pnl_09");

			$("#" + oFrame1.sId + "").hide();
			$("#" + oFrame2.sId + "").hide();
			$("#" + oFrame3.sId + "").hide();
			$("#" + oFrame9.sId + "").hide();
			$("#" + oFrame4.sId + "").hide();
			$("#" + oFrame5.sId + "").hide();
			$("#" + oFrame6.sId + "").hide();
			$("#" + oFrame7.sId + "").hide();
			$("#" + oFrame8.sId + "").hide();

		},
		onBeforeRendering: function() {
			this.clear();
		},
       onHomePress : function (oEvent){
			this.getRouter().navTo("home");
		}
,
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