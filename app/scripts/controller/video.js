/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/video',
	'collections/video',

	'views/video',
	'views/videoEdit'
], function ($, _, Backbone, Video, Videos, VideoView, VideoEditView) {
	'use strict';

	var Controller = Backbone.Controller.extend({
		el          : $('section.video'),
		model       : Video,
		collection  : Videos,
		readView    : VideoView,
		editView    : VideoEditView,
		pull        : function(id){
			var self  = this,
				query = new Backbone.Query(self.model);

			query.include(['author', 'contents', 'contents.comments', 'contents.comments.author']);
			return query.get(id);
		}
	});

	return Controller;
});
