/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	var View = Backbone.View.extend({
		tagName  : 'div',
		template : JST['app/scripts/templates/video_player_timeline.hbs'],
		pntrTemp : JST['app/scripts/templates/video_player_timeline_pointer.hbs'],
		events   : {
			'click .pointer' : 'link'
		},
		initialize : function(data){

			_.bindAll(this);

			this.videoId = data.videoId;
			this.contents = data.contents;
			this.duration = data.duration;
			this.listenTo(this.contents, 'add', this.addAll);
			this.listenTo(this.contents, 'del', this.delAll);
			this.listenTo(this.contents, 'change', this.update);
		},
		render : function(){
			var self = this;
			this.delegateEvents();
			this.$el.addClass('timeline').append(self.template());
			this.addAll(this.contents);
			this.sync();

			return this.$el;
		},
		unrender : function(){
			Backbone.pubsub.off(null, null, this);
			this.undelegateEvents();
			this.$el.remove();
		},
		read : function(){
			if(!this.editFields) return;
			this.editFields.forEach(function(field){
				field.destroy();
			});
		},
		edit : function(){
		},
		addAll : function(contents){
			var self = this;
			contents.forEach(function(content){
				self.add(content);
			});
		},
		add : function(obj){
			var self = this;
			this.$('.pointers').append(this.pntrTemp(obj.refine({
				duration : self.getDuration()
			})));
		},
		delAll : function(contents){
			var self = this;
			contents.forEach(function(content){
				self.del(content);
			});
		},
		del : function(obj){
			this.$('.item[data-id="'+obj.id+'"]').remove();
		},
		getDuration : function(){
			var d = this.duration,
				last;
			if(!d){
				last = this.contents.last();
				if(last){
					d = last;
				}
				else {
					d = 3600;
				}
				this.duration = d;
			}

			return d;
		},
		sync : function(){
			Backbone.pubsub.on('videoSync:' + this.videoId, this.updateProgress, this);
		},
		updateProgress : function(progress, scriptId){
			var self = this;
			this.$('.progress').css('width', (progress/this.getDuration()*100) + '%');
			this.$('.item').removeClass('on');
			this.$('.item[data-id="'+scriptId+'"]').addClass('on');
		},
		link : function(e){
			var current = e.currentTarget.parentNode.dataset.id;
			Backbone.pubsub.trigger('videoTimelineLink:' + this.videoId, current);
		}
	});

	return View;
});
