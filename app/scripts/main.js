/*global require*/
'use strict';

require([
	'backbone', 'router'
], function (Backbone, Router) {

	var router,
		pushState = !!window.history.pushState;

	router = new Router();
	Backbone.history.start({ hashChange: !pushState, pushState : pushState });
	
});
