/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/video',
	'collections/video',

	'views/video'
], function ($, _, Backbone, Video, Videos, VideoView) {
	'use strict';

	var Controller = Backbone.Controller.extend({
		el          : 'section.video',
		model       : Video,
		collection  : Videos,
		view        : VideoView,
 		options     : {
 			query   : {
 				include : ['author', 'contents', 'contents.comments', 'contents.comments.author']
 			}
 		}
	});

	return Controller;
});
