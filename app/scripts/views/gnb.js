/*global define*/

define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	var GNB = Backbone.View.extend({
		el: '.header',
		events: {
			// 'click a' : 'link',
			'click .logo' : 'toggle'
		},
		initialize: function(id){

		},
		render: function(){
			console.log('gnb view render');
			return this.$el;
		},
		unrender: function(){
			this.undelegateEvents();
			this.$el.hide();
		},
		toggle : function(e){
			e.preventDefault();
			this.$el.toggleClass('on');
			$('.view').children('section').toggleClass('off');
			$('body').toggleClass('scrollable');
		},
		link : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
		}
	});

	return GNB;
});
