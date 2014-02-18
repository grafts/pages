/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'handlebars',
	'editor'
], function ($, _, Backbone, JST, Handlebars, editor) {
	'use strict';

	var VideoView = Backbone.View.extend({
		tagName: 'div',
		// el: '.user-itemEdit',
		template: JST['app/scripts/templates/user.hbs'],
		initialize : function(){
			
		},
		render: function(){
			console.log('user editor render');
			this.$el.show();

			new editor({
				element: document.getElementById('userEditor_title'),
				mode: 'rich',
				placeholder: 'Your Article'
			});
		},
		unrender : function(){
			
		}
	});

	return VideoView;
});
