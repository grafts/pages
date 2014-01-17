/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'views/search'
], function ($, _, Backbone, View) {
	'use strict';

	var Controller = Backbone.Controller.extend({
		el          : $('.search'),
		initialize  : function(){
			var self = this;
			this.view = new View({ el : '.search' });
		},
		run : function(data){

			var q = data.id;

			$('.header').addClass('on');
			$('.header').find(':input').val(q);

			this.view.render();
		},
		stop : function(){
			this.view.unrender();
		},
		searchExcute : function(){
			console.log(arguments);
		}
	});

	return Controller;
});
