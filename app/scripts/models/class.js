/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var ClassModel = Backbone.Model.extend({
		defaults: {
		}
	});

	return ClassModel;
});
