/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',

	'views/components/cover'
], function ($, _, Backbone, JST, CoverView) {
	'use strict';

	var UserView = Backbone.View.extend({
		tagName: 'div',
		template: JST['app/scripts/templates/user.hbs'],
		events: {
			'click a' : 'link'
		},
		initialize: function(id){
			// id && (this.id = id);
			this.el.setAttribute('class', 'user-item');
			this.$el.append(this.template(this.model.toJSON()));
			this.addCover(this.$('.head'), this.model.get('cover'));
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
		addCover : function(dom, cover){
			var self  = this,
				name  = dom.attr('class');

			if(!cover || !cover._url){
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

	return UserView;
});
