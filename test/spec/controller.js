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
		describe('run', function () {
			var dummy = {
				id : 'DVeefWllwN'
			}
			it('video controller', function(done) {
				test.controller = new VideoController();
				should.exist(test.controller);
				done();
			});
			it('run video controller', function(done) {
				test.controller.run({ resource : 'video', id : dummy.id })
				.then(function(newView){
					test.controller.views[dummy.id].id.should.equal(newView.id);
					done();
				});
			});
			it('run video controller for dummy view', function(done) {
				test.controller.run({ resource : 'video', id : 1 })
				.then(function(newView){
					test.controller.views[1].id.should.equal(newView.id);
					done();
				});
			});
		});
	});
});