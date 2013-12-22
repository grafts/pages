/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'views/class'
], function ($, _, Backbone, ClassView) {
	'use strict';

	var ClassController = function(){
		
	};


	ClassController.prototype.run = function(){
		console.log(arguments);
	};

	return ClassController;
});
