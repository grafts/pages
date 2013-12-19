/*global define*/

define([
	'underscore',
	'backbone',
	'models/class'
], function (_, Backbone, ClassModel) {
	'use strict';

	var ClassCollection = Backbone.Collection.extend({
		model: ClassModel
	});

	return ClassCollection;
});
