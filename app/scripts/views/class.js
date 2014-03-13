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
			// id && (this.id = id);
			this.el.setAttribute('class', 'class-item');
			this.$el.append(this.template(this.model.toJSON()));
			this.addCover(this.$('.head'), this.model.get('cover'));
			this.addCover(this.$('.relate'), this.model.get('relate').cover);
		},
		render: function(){
			console.log('class view render');
			this.$el.show();
			this.delegateEvents();
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
		addCover : function(dom, cover){
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
