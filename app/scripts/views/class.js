define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	'use strict';

	var VideoView = Backbone.View.extend({
		tagName: 'div',
		template: JST['app/scripts/templates/class.hbs'],
		events: {
			'click a' : 'link'
		},
		initialize: function(id){
			id && (this.id = id);
			this.el.setAttribute('class', 'class-item');
			this.$el.append(this.template(this.model.toJSON()));
		},
		render: function(){
			console.log('class view render');
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

	return VideoView;
});
