/* global describe, it */
define([
	'jquery',
	'underscore',
	'backbone',

	'controller/intro',
	'controller/video'
], function ($, _, Backbone, IntroController, VideoController) {
	'use strict';

	var test = {};
	// before(function(done){
	// 	setTimeout(function(){
	// 		a = 2;
	// 		done();
	// 	}, 1000)
	// });

	describe('controller', function () {
		describe('exists', function () {
			it('just Controller', function() {
				should.exist(Backbone.Controller);
			});
			it('extented controller exists', function() {
				should.exist(Backbone.Controller.extend);
			});
			it('generate new controller exists', function() {
				test.controller = new (Backbone.Controller.extend());
				should.exist(test.controller);
			});
		});
		describe('extend and new controller', function () {
			it('intro controller', function() {
				$('body').append('<section class="intro"></section>');
				test.introController = new IntroController();
				should.exist(test.introController);
			});
			it('run intro controller, should not have views object', function() {
				test.introController = new IntroController();
				test.introController.run({ resource : 'intro' });
				should.not.exist(test.introController.views['intro']);
			});
			it('video controller', function() {
				$('body').append('<section class="video"></section>');
				test.controller = new VideoController();
				should.exist(test.controller);
			});
			it('run video controller', function() {
				test.controller.run({ id : 1, resource : 'video' });
				should.exist($('section.video').children().length);
			});
		});
	});
});