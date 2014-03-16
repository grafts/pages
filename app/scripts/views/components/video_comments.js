/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'collections/video_contents_comments'
], function ($, _, Backbone, JST, Collection) {
	var View = Backbone.View.extend({
		tagName : 'div',
		template : JST['app/scripts/templates/video_comments.hbs'],
		events : {
		},
		initialize : function(data){
			this.videoId    = data.videoId;
			this.contents   = data.contents;
			this.collection = new Collection(this.contents.models[0].get('comments'));
			this.listenTo(this.collection, 'reset', this.updateDom);
			Backbone.pubsub.on('videoCommentsChange:' + this.videoId, this.set, this);
		},
		render : function(id){
			this.delegateEvents();
			this.updateDom();
			return this.$el;
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
		set : function(seq){
			this.collection.reset(this.contents.models[seq].get('comments'));
		},
		link : function(e){
			
		}
	});

	return View;
});
