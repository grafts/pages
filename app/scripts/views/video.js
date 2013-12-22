/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	'use strict';

	var VideoView = Backbone.View.extend({
		// el: '.video-item',
		tagName: 'div',
		template: JST['app/scripts/templates/video.hbs'],
		initialize: function(id){
			console.log(arguments);
			id && (this.id = id);
			this.el.setAttribute('id', id);
			this.el.setAttribute('class', 'video-item');
		},
		render: function(){
			console.log('video view render');
			this.$el.show();
		}
	});

	return VideoView;
});
