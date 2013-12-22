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
		el: '.video-itemEdit',
		template: JST['app/scripts/templates/video.hbs'],
		initialize : function(){
			
		},
		render: function(){
			console.log('video editor render');
			this.$el.show();

			new editor({
				element: document.getElementById('videoEditor_title'),
				mode: 'rich',
				placeholder: 'Your Article'
			});

		}
	});

	return VideoView;
});
