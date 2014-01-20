define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	'use strict';

	var View = Backbone.View.extend({
		tagName: 'div',
		template: JST['app/scripts/templates/live.hbs'],
		events: {
			'click a' : 'link'
		},
		initialize: function(id){
			var self = this;
			id && (this.id = id);
			this.el.setAttribute('class', 'live-item');
			this.$el.append(this.template(this.model.toJSON()));
		},
		render: function(){
			console.log('live view render');
			return this.$el;
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

	return View;
});
