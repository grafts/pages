/*global define*/

define([
	'underscore',
	'backbone',
	'models/lesson'
], function (_, Backbone, LessonModel) {
	'use strict';

	var LessonCollection = Backbone.Collection.extend({
		model: LessonModel
	});

	return LessonCollection;
});
