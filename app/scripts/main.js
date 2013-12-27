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
		},
		editor: {
			exports: 'editor'
		}
	},
	paths: {
		router : '../scripts/routes/routes',
		jquery: '../bower_components/jquery/jquery',
		backbone: '../bower_components/backbone/backbone',
		backboneController: '../scripts/vendor/backbone.controller',
		// replace underscore >> lodash
		underscore: '../bower_components/lodash/dist/lodash',
		handlebars: '../bower_components/handlebars/handlebars',

		loading : '../scripts/views/loading',

		editor: '../scripts/vendor/medium'
	}
});

require([
	'backbone', 'backboneController'
], function (Backbone, Controller) {
	var router,
		pushState = !!window.history.pushState;

	require(['router'], function(Router){
		router = new Router();
		Backbone.history.start({ hashChange: !pushState, pushState : pushState });
	});
});
