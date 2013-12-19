/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	'use strict';

	var ClassView = Backbone.View.extend({
		template: JST['app/scripts/templates/class.hbs']
	});

	return ClassView;
});
