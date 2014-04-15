define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'collections/video'
], function ($, _, Backbone, JST, Vidoes) {
	var View = Backbone.View.extend({
		el : 'section.discoveries',
		template: JST['app/scripts/templates/discoveries.hbs'],
		events: {
			'click a' : 'link'
		},
		initialize  : function(){
			var self = this;
			this.videos = new Vidoes();
			this.listenTo(this.videos, 'sync', this.render);
		},
		render : function(){
			this.delegateEvents();
			this.$el.show();
			this.$el.html(this.template(this.videos.JSON()));
		},
		run : function(){
			if(this.videos.length == 0){
				this.videos.fetch();
			}
		},
		pause : function(){
			var self = this;
			return new Promise(function(resolve, reject){
				self.$('.discoveries-wrapper').addClass('off');
				resolve();
			});
		},
		stop : function(){
			self.$('.discoveries-wrapper').removeClass('off');
			this.undelegateEvents();
			this.$el.hide();
		},
		garbageCollect : function() {},
		link : function(e) {
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
		}
	});

	return View;
});
