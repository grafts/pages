/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'editor'
], function ($, _, Backbone, JST, editor) {
	'use strict';

	var VideoView = Backbone.View.extend({
		tagName: 'div',
		template: JST['app/scripts/templates/videoEdit.hbs'],
		events: {
			'click a' : 'link'
		},
		initialize : function(id){
			var self = this;

			id && (this.id = id);
			this.el.setAttribute('class', 'video-itemEdit');
			this.$el.append(this.template(this.model.toJSON()));

			this.input = new editor(self.el.getElementsByClassName('input'));
		},
		render: function(){
			console.log('video edit view render');
			return this.$el;
		},
		unrender: function(){
			this.undelegateEvents();
			this.$el.hide();
			console.log(this.input.serialize());
		},
		link : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
		}
			

	});

	return VideoView;
});
