define([
	'jquery',
	'underscore',
	'backbone',
	'templates',

	'views/components/cover'
], function ($, _, Backbone, JST, CoverView) {
	'use strict';

	var VideoView = Backbone.View.extend({
		tagName: 'div',
		template: JST['app/scripts/templates/class.hbs'],
		events: {
			'click a' : 'link'
		},
		initialize: function(id){
			id && (this.id = id);
			this.el.setAttribute('class', 'class-item');
			this.$el.append(this.template(this.model.toJSON()));
		},
		render: function(){
			console.log('class view render');
			this.$el.show();
			this.addCoverImage(this.$('.head'), this.model.get('coverImage'));
			this.addCoverImage(this.$('.relate'), this.model.get('relate').coverImage);
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
		addCoverImage : function(dom, cover){
			var self  = this,
				name  = dom.attr('class');

			if(!cover || !cover.src){
				return;
			}

			if(!this.cover){
				this.cover = {};
			}

			if(this.cover[name]){
				this.cover[name].unrender();
				delete this.cover;
			}

			this.cover[name] = new CoverView({
				el       : dom,
				cover    : cover
			});

			this.cover[name].render();
		}

	});

	return VideoView;
});
