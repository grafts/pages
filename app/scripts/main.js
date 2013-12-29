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
		router             : '../scripts/routes/routes',
		jquery             : '../bower_components/jquery/jquery',
		backbone           : '../bower_components/backbone/backbone',
		backboneController : '../scripts/vendor/backbone.controller',
		// replace underscore >> lodash
		underscore         : '../bower_components/lodash/dist/lodash',
		handlebars         : '../bower_components/handlebars/handlebars',
		
		font               : '../bower_components/requirejs-plugins/src/font',
		propertyParser     : '../bower_components/requirejs-plugins/src/propertyParser',
		
		loading            : '../scripts/views/loading',
		
		editor             : '../scripts/vendor/medium'
	}
});

require([
	'backbone', 'backboneController', 'router', 'propertyParser'
], function (Backbone, Controller, Router) {
	var router,
		pushState = !!window.history.pushState;

	router = new Router();
	Backbone.history.start({ hashChange: !pushState, pushState : pushState });

	require(['font!custom,families:[Nanum Gothic, Nanum Myeongjo],urls:[//fonts.googleapis.com/earlyaccess/nanumgothic.css, //fonts.googleapis.com/earlyaccess/nanummyeongjo.css]'], function(){
		$('.serif').css('font-family', 'Nanum Myeongjo');
		$('.sans-serif').css('font-family', 'Nanum Gothic');
	});

});
