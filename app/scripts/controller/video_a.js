/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/video_a',
	'collections/video_a',

	'views/video_a',
	'views/videoEdit'
], function ($, _, Backbone, Video, Videos, VideoView) {
	'use strict';

	var Controller = Backbone.Controller.extend({
		el          : 'section.video_a',
		model       : Video,
		collections : Videos,
		view        : VideoView,
	});

	return Controller;
});
