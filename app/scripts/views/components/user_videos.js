/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'collections/video'
], function ($, _, Backbone, JST, Collection) {
	var View = Backbone.View.extend({
		tagName : 'div',
		template : JST['app/scripts/templates/user_videos.hbs'],
		events : {
		},
		initialize : function(data){
			this.userId    = data.userId;
			this.collection = data.contents;
			this.listenTo(this.collection, 'sync', this.updateDom);
			this.listenTo(this.collection, 'change', this.updateDom);
			Backbone.pubsub.on('userVideoAdd:' + this.userId, this.add, this);
		},
		render : function(id){
			this.delegateEvents();
			return this.$el;
		},
		updateDom : function(){
			var self = this;
			this.empty();
			this.$el
			.append(self.template({ videos : self.collection.JSON() }));
		},
		empty : function(){
			this.$el.empty();
		},
		unrender : function(){
			Backbone.pubsub.off(null, null, this);
			this.undelegateEvents();
			this.$el.remove();
		},
		set : function(seq){
			this.collection.reset(this.contents.models[seq].get('comments'));
		},
		add : function(model){
			this.collection.add(model);
		},
		link : function(e){
			
		}
	});

	return View;
});
