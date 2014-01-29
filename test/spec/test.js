/* global describe, it */
define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone, Video, VideoView) {
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
});