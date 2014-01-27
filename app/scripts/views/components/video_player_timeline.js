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

			this.id = data.id;
			this.contents = data.contents;
			this.duration = data.duration;

		},
		render : function(){
			var self = this;

			this.$el
			.addClass('timeline')
			.append(self.template({ pointers : self.contents }));

			this.sync();

			return this.$el;
		},
		unrender : function(){
			Backbone.pubsub.off(null, null, this);
			this.undelegateEvents();
			this.$el.hide();
		},
		sync : function(){
			Backbone.pubsub.on('videoSync:' + this.id, this.updateProgress, this);
		},
		updateProgress : function(progress){
			var self = this;
			this.$('.progress').css('width', (progress/this.duration*100) + '%');
		},
		link : function(e){
			Backbone.pubsub.trigger('videoTimelineLink:' + this.id, $(e.currentTarget).data().seq);
		}
	});

	return View;
});
