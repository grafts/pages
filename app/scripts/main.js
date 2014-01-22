/*global require*/
'use strict';

require.config({
	shim : {
		underscore : {
			exports : '_'
		},
		backbone : {
			deps : [
				'underscore',
				'jquery'
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
		backbone           : '../bower_components/backbone/backbone',
		backboneController : '../scripts/vendor/backbone.controller',
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

require([
	'backbone', 'backboneController', 'router', 'promise'
], function (Backbone, Controller, Router) {
	var router,
		pushState = !!window.history.pushState;

	window.YTConfig = {};

	router = new Router();
	Backbone.history.start({ hashChange: !pushState, pushState : pushState });

	require(['font!custom,families:[NanumBarunGothic, Nanum Myeongjo],urls:[/styles/fonts/NanumBarunGothic.css, //fonts.googleapis.com/earlyaccess/nanummyeongjo.css]'], function(){
		$('.serif').css('font-family', 'Nanum Myeongjo');
		$('.sans-serif').css('font-family', 'NanumBarunGothic');
	});

});
