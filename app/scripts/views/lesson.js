/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	'use strict';

	var LessonView = Backbone.View.extend({
		template: JST['app/scripts/templates/lesson.hbs']
	});

	return LessonView;
});
