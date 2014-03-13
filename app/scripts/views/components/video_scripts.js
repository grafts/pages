/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	var View = Backbone.View.extend({
		tagName : 'ul',
		template : JST['app/scripts/templates/video_scripts.hbs'],
		events : {
		},
		initialize : function(data){
			this.videoId = data.videoId;
			this.contents = data.contents;
			this.listenTo(this.contents, 'add', this.test);
			this.listenTo(this.contents, 'reset', this.reset);
		},
		render : function(){
			var self = this;
			this.delegateEvents();
			this.$el
			.addClass('scripts')
			.append(self.template({ scripts : self.contents.refine() }));

			return this.$el;
		},
		unrender : function(){
			Backbone.pubsub.off(null, null, this);
			this.undelegateEvents();
			this.$el.remove();
		},
		link : function(e){
			
		},
		test : function(){
			console.log(arguments);
		}
	});

	return View;
});
