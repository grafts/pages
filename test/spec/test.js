/* global describe, it */
define([
	'jquery',
	'underscore',
	'backbone',

	'youtube!'
], function ($, _, Backbone, YT) {
	'use strict';

	describe('require basic components', function () {
		it('jquery', function () {
			should.exist($);
		});
		it('lodash', function () {
			should.exist(_);
		});
		it('backbone', function () {
			should.exist(Backbone);
		});
	});

	describe('youtube, YT', function () {
		it('exist', function () {
			should.exist(YT);
		});
		describe('should have properties', function () {
			it('loaded: 1', function(){
				YT.should.have.property('loading', 1);
			});
			it('loaded: 1', function(){
				YT.should.have.property('loaded', 1);
			});
			it('ready', function(){
				YT.should.have.property('loaded');
			});
		});
	});


});




