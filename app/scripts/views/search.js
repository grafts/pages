/*global define*/

define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	var View = Backbone.View.extend({
		events: {
			'click a' : 'link'
		},
		initialize: function(id){
		},
		render: function(){
			console.log('search view render');
			this.delegateEvents();
			this.$el.show();
		},
		unrender: function(){
			this.undelegateEvents();
			this.$el.hide();
		},
		link : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
		},
		test : function(){
			console.log(arguments);
		}
	});

	return View;
});
