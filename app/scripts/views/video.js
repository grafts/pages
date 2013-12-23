/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	'use strict';

	var VideoView = Backbone.View.extend({
		// el: '.video-item',
		tagName: 'div',
		template: JST['app/scripts/templates/video.hbs'],
		events: {
			'click a' : 'link'
		},
		initialize: function(id){
			id && (this.id = id);
			this.el.setAttribute('class', 'video-item');
			this.$el.append(this.template(this.model.toJSON()));
		},
		render: function(){
			console.log('video view render');
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
