/*global define*/

define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	var View = Backbone.Page.extend({
		events: {
			// 'click a' : 'link',
			'click .signin' : 'signin'
		},
		initialize: function(id){
		},
		render: function(){
			console.log('intro view render');
			this.delegateEvents();
			this.adjustVideoPosition();
			this.$el.show();

			Backbone.pubsub.on('resize', this.adjustVideoPosition, this);
		},
		unrender: function(){
			this.undelegateEvents();
			Backbone.pubsub.off(null, null, this);
			this.$el.hide();
		},
		adjustVideoPosition : _.debounce(function(){
			var video = this.$('video'),
				vidWidth = video.width(),
				bodyWidth = $('body').width(),
				marginLeft = (vidWidth - bodyWidth)/2;

			video.css('margin-left', -marginLeft + 'px');
		}, 200),
		signin : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.Auth.signin();
		},
		link : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
		}
	});

	return View;
});
