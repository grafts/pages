/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'views/intro'
], function ($, _, Backbone, IntroView) {
	'use strict';

	var IntroController = Backbone.Controller.extend({
		el          : $('section.intro'),
		initialize  : function(){
			this.view = new IntroView();
		},
		run : function(){
			this.view.render();
		},
		stop : function(){
			this.view.unrender();
		}
	});

	return IntroController;
});
