/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'views/video',
	'editor'
], function ($, _, Backbone, JST, VideoView, editor) {
	'use strict';

	var View = VideoView.extend({
		template: JST['app/scripts/templates/videoEdit.hbs'],
		events: {
			'click a' : 'link'
		},
		initialize: function(param){
			var self = this,
				data = this.model.toJSON();

			_.bindAll(this);

			// param.id && (this.id = id);
			this.el.setAttribute('class', 'video-item edit');

			data.contents = this.model.getContents();
			this.$el.append(this.template(data));

			this.addCoverImage(this.$('.head'), this.model.get('coverImage'));
			this.addPlayer();
			this.addContents();

		},
		render: function(){
			var self = this;
			console.log('video edit view render');
			this.input = new editor(self.el.getElementsByClassName('input'));
			console.log(this.input.serialize());
			this.$el.show();
			this.delegateEvents();
			return this.$el;
		}
	});

	return View;

});
