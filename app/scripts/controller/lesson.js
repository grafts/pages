/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/lesson',

	'views/lesson'
], function ($, _, Backbone, Lesson, LessonView) {
	'use strict';

	var Controller = Backbone.Controller.extend({
		el          : $('section.lesson'),
		model       : Lesson,
		view        : LessonView
	});

	return Controller;
});
