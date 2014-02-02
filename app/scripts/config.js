'use strict';

require.config({
	deps : ['main'],
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
		},
		youtube : {
			deps : [
				'youtubePreload'
			],
			exports : 'YT'
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
		youtubePreload     : '../scripts/vendor/youtubePreload',
		youtube            : 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vfldKI4RW',
	}
});