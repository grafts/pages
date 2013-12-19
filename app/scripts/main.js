/*global require*/
'use strict';

require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		handlebars: {
			exports: 'Handlebars'
		}
	},
	paths: {
		router : '../scripts/routes/routes',
		jquery: '../bower_components/jquery/jquery',
		backbone: '../bower_components/backbone/backbone',
		// replace underscore >> lodash
		underscore: '../bower_components/lodash/dist/lodash',
		handlebars: '../bower_components/handlebars/handlebars'
	}
});

require([
	'backbone', 'router'
], function (Backbone, Router) {
	var router = new Router,
		pushState = !!window.history.pushState;

	router.initialize();
	Backbone.history.start({ hashChange: !pushState, pushState : pushState });
});
