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
			var self = this;
			this.status = true;
			return new Promise(function(resolve, reject){
				self.view.render();
				resolve();
			});
		},
		prepareStop : function(){},
		stop : function(){
			this.el && this.el.hide();
			this.el.removeClass('off');
			this.status = false;
		}
	});

	return Controller;
});
