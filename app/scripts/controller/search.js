/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'views/search'
], function ($, _, Backbone, View) {
	'use strict';

	var IntroController = Backbone.Controller.extend({
		el          : $('.search'),
		initialize  : function(){
			var self = this;
			this.view = new View({ el : '.search' });
		},
		run : function(){
			console.log(arguments);
			this.view.render();
		},
		stop : function(){
			this.view.unrender();
		}
	});

	return IntroController;
});
