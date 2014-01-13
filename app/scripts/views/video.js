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
			var self = this;
			id && (this.id = id);
			this.el.setAttribute('class', 'video-item');
			this.$el.append(this.template(this.model.toJSON()));
			this.playerPositionUpdate = _.debounce(function(){
				if($(window).scrollTop() > 364){
					self.$('.player').addClass('fix');
				} else {
					self.$('.player').removeClass('fix');
				}
			}, 200);
		},
		render: function(){
			var self = this;
			Backbone.pubsub.on('scroll', self.playerPositionUpdate, this);
			console.log('video view render');
			return this.$el;
		},
		unrender: function(){
			var self = this;
			Backbone.pubsub.off('scroll', self.playerPositionUpdate, this);
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
