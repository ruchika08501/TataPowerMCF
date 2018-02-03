sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	jQuery.sap.includeStyleSheet("css/MyAccount.css");

	return Controller.extend("sap.ui.demo.nav.controller.MyAccount", {
		onHomePress: function(oEvent) {

			this.getRouter().navTo("home");

		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf view.MyAccount
		 */
		/*	onInit: function() {
	  	     $('head').append('<link rel="stylesheet" type="text/css" href="../css/MyAccount.css">');
			}
*/
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf view.MyAccount
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf view.MyAccount
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf view.MyAccount
		 */
		//	onExit: function() {
		//
		//	}

	});

});