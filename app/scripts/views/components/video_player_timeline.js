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
			Backbone.pubsub.on('videoSync:' + this.videoId, this.updateProgress, this);

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
				duration : self.duration
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
			var self = this,
				d    = this.duration,
				last;

			return new Promise(function(resolve, reject){
				if(!d || d==0){
					Backbone.pubsub.trigger('getVideoDuration:'+self.videoId, function(duration){
						resolve(duration);
					});
				} else {
					resolve(d);
				}
			});
			
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
		updateProgress : function(progress, scriptId){
			var self   = this,
				script = this.$('.item[data-id="'+scriptId+'"]');

			this.getDuration().then(function(duaration) {
				self.$('.progress').css('width', (progress/duaration*100) + '%');
			});

			if(!script.hasClass('on')){
				this.$('.item').removeClass('on');
				script.addClass('on');
			}
		},
		link : function(e){
			var current = e.currentTarget.parentNode.dataset.id;
			Backbone.pubsub.trigger('videoTimelineLink:' + this.videoId, current);
		}
	});

	return View;
});
