/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	var View = Backbone.View.extend({
		tagName : 'div',
		template : JST['app/scripts/templates/video_player_timeline.hbs'],
		events : {
			'click .pointer' : 'link'
		},
		initialize : function(data){

			_.bindAll(this);

			this.videoId = data.videoId;
			this.contents = data.contents;
			this.duration = data.duration;

		},
		render : function(){
			var self = this;

			this.$el
			.addClass('timeline')
			.append(self.template({
				pointers : self.contents.refine({
					duration : self.duration
				})
			}));

			this.sync();

			return this.$el;
		},
		unrender : function(){
			Backbone.pubsub.off(null, null, this);
			this.undelegateEvents();
			this.$el.remove();
		},
		sync : function(){
			Backbone.pubsub.on('videoSync:' + this.videoId, this.updateProgress, this);
		},
		updateProgress : function(progress, scriptSeq){
			var self = this;
			this.$('.progress').css('width', (progress/this.duration*100) + '%');
			this.$('.item').removeClass('on').eq(scriptSeq).addClass('on');
		},
		link : function(e){
			Backbone.pubsub.trigger('videoTimelineLink:' + this.videoId, $(e.currentTarget).data().seq);
		}
	});

	return View;
});
