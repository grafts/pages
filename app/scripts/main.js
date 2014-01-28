/*global require*/
'use strict';

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
