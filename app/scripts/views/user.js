/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',

	'views/components/user_videos',
	'collections/video'
], function ($, _, Backbone, JST, VideosView, Videos) {
	'use strict';

	var UserView = Backbone.View.extend({
		tagName: 'div',
		template: JST['app/scripts/templates/user.hbs'],
		components : {},
		events: {
			'click a' : 'link'
		},
		initialize: function(id){
			// id && (this.id = id);
			this.el.setAttribute('class', 'user-item');
			this.$el.append(this.template(this.model.toJSON()));
			this.addCover(this.$('.head'), this.model.get('cover'));
			this.videos = new Videos({ author : this.model });
			this.listenTo(this.videos, 'sync', this.fetchVideo);
			this.videos.fetch();
			this.addComponents();

		},
		render: function(){
			console.log('user view render');
			this.delegateEvents();
			this.$el.show();
			return this.$el;
		},
		unrender: function(){
			this.undelegateEvents();
			this.$el.hide();
		},
		link : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
		},
		fetchVideo : function(){
			console.log(this.videos);
		},
		addComponents : function(){
			var self = this,
				_add = function(resource){
					var Components = {
						videos  : VideosView
					};
					if(this.components[resource]){
						this.components[resource].unrender();
						this.components[resource].remove();
						delete this.components[resource];
					}

					this.components[resource] = new Components[resource]({
						id       : 'user_' + self.model.id + '_' + resource,
						userId  : self.model.id,
						contents : self.videos
					});

					this.$('.'+resource+'-wrapper').append(this.components[resource].render());
				};

			_add.call(this, 'videos');
		}
	});

	return UserView;
});
