/*global define*/

define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	var UserView = Backbone.View.extend({
		el: 'section.intro',
		events: {
			'click a' : 'link'
		},
		initialize: function(id){
		},
		render: function(){
			console.log('intro view render');
			this.$el.show();
			return false;
		},
		unrender: function(){
			this.undelegateEvents();
			this.$el.hide();
		},
		link : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
		}
	});

	return UserView;
});
