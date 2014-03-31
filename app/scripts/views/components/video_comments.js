/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'collections/video_contents_comments'
], function ($, _, Backbone, JST, Collection) {
	var View = Backbone.Component.extend({
		tagName : 'div',
		template : JST['app/scripts/templates/video_comments.hbs'],
		events : {
		},
		initialize : function(data){
			this.videoId    = data.videoId;
			this.contents   = data.contents;
			this.collection = new Collection();
			this.listenTo(this.collection, 'reset', this.updateDom);
			Backbone.pubsub.on('videoCommentsChange:' + this.videoId, this.set, this);
		},
		render : function(id){
			this.delegateEvents();
			this.updateDom();
			return this.$el;
		},
		edit : function(){
		},
		updateDom : function(){
			var self = this;
			this.$el.empty();
			this.$el
			.append(self.template({ comments : self.collection.JSON() }));
		},
		unrender : function(){
			Backbone.pubsub.off(null, null, this);
			this.undelegateEvents();
			this.$el.remove();
		},
		set : function(id){
			this.collection.reset(this.contents.get(id).get('comments'));
		},
		link : function(e){
			
		}
	});

	return View;
});
