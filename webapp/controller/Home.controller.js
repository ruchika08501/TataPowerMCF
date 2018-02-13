sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("sap.ui.demo.nav.controller.Home", {

		onDisplayNotFound: function(oEvent) {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget: "home"
			});
		},

		onInit: function() {
			this.mobileDropdown();
			//$("#__panel0").hide();

		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf view.MyAccount
		 */
		onBeforeRendering: function() {
			this.mobileDropdown();
			//$("#__panel0").hide();
		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf view.MyAccount
		 */
		onAfterRendering: function() {
			this.mobileDropdown();
			//$("#__panel0").hide();
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf view.MyAccount
		 */
		onExit: function() {
			this.mobileDropdown();
			//$("#__panel0").hide();
		},

		onNavToMyAccount: function(oEvent) {
			this.getRouter().navTo("MyAccount");
		},
		onNavToQuickBill: function(oEvent) {
			this.getRouter().navTo("PaymentHistory");
		},
		onNavToPaybill: function(oEvent) {
			this.getRouter().navTo("QuickPayment");
		},
		onHomePress: function(oEvent) {
			this.getRouter().navTo("home");
		},
		onNavToEmployeeOverview: function(oEvent) {
			this.getRouter().navTo("employeeOverview");
		},
		onlineform: function(oEvent) {
			this.getRouter().navTo("onlineform");
		}

	});

});