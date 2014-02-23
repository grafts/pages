/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'views/intro'
], function ($, _, Backbone, IntroView) {
	'use strict';

	var Controller = Backbone.Controller.extend({
		el          : $('section.intro'),
		initialize  : function(){
			this.view = new IntroView({ el : 'section.intro' });
		},
		run : function(){
			this.view.render();
		},
		stop : function(){
			this.view.unrender();
		}
	});

	return Controller;
});
