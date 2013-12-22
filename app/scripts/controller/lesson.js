/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'views/lesson'
], function ($, _, Backbone, LessonView) {
	'use strict';

	var LessonController = function(){
		
	};


	LessonController.prototype.run = function(){
		console.log(arguments);
	};

	return LessonController;
});
