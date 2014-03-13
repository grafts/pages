/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/class',
	'collections/class',

	'views/class'
], function ($, _, Backbone, Class, Classes, ClassView) {
	'use strict';

	var Controller = Backbone.Controller.extend({
		el          : $('section.class'),
		initialize  : function(){
			
		},
		model       : Class,
		collection  : Classes,
		view        : ClassView
	});

	return Controller;

});

