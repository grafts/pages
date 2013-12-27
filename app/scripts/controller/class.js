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

	var ClassController = Backbone.Controller.extend({
		el          : $('section.class'),
		initialize  : function(){
			
		},
		model       : Class,
		collections : Classes,
		readView    : ClassView,
		editView    : ClassEditView
	});

	return ClassController;

});

