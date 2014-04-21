'use strict';

require.config({
	deps : ['main', 'promise'],
	shim : {
		underscore : {
			exports : '_'
		},
		backboneBase : {
			deps : [
				'underscore',
				'jquery'
			],
			exports : 'Backbone'
		},
		backbone : {
			deps : [
				'backboneBase'
			],
			exports : 'Backbone'
		},
		parseBase : {
			exports : 'Parse'
		},
		parse : {
			deps : [
				'parseBase'
			],
			exports : 'Parse'
		},
		handlebars : {
			exports : 'Handlebars'
		},
		editor : {
			exports : 'editor'
		},
		font : {
			deps : [
				'propertyParser'
			]
		},
		async : {
			deps : [
				'propertyParser'
			]
		}
	},
	paths: {
		router             : '../scripts/routes/routes',
		jquery             : '../bower_components/jquery/jquery',
		backboneBase       : '../bower_components/backbone/backbone',
		backbone           : '../scripts/vendor/backbone.controller',
		// replace underscore >> lodash
		underscore         : '../bower_components/lodash/dist/lodash',
		handlebars         : '../bower_components/handlebars/handlebars',
		moment             : '../bower_components/moment/moment',
		promise            : '../bower_components/es6-promise/promise',
		
		propertyParser     : '../bower_components/requirejs-plugins/src/propertyParser',
		async              : '../bower_components/requirejs-plugins/src/async',
		font               : '../bower_components/requirejs-plugins/src/font',
		goog               : '../bower_components/requirejs-plugins/src/goog',
		
		loading            : '../scripts/views/loading',
		
		editor             : '../scripts/vendor/medium',
		pen                : '../scripts/vendor/pen/pen',
		youtube            : '../scripts/vendor/youtube',
		parseBase          : '../scripts/vendor/parse-1.2.16',
		parse              : '../scripts/vendor/parse',

		auth               : 'http://theprometheus.tv/scripts/vendor/auth'
	}
});