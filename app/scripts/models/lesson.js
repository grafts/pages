/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var LessonModel = Backbone.Model.extend({
		defaults: {
		}
	});

	return LessonModel;
});
