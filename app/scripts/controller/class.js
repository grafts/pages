/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/class',
	'collections/class',

	'views/class',
	'views/classEdit'
], function ($, _, Backbone, Class, Classes, ClassView, ClassEditView) {
	'use strict';

	var Controller = Backbone.Controller.extend({
		el          : $('section.class'),
		initialize  : function(){
			
		},
		model       : Class,
		collection  : Classes,
		readView    : ClassView,
		editView    : ClassEditView
	});

	return Controller;

});

