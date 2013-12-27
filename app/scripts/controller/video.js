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

	var VideoController = Backbone.Controller.extend({
		el          : $('section.video'),
		model       : Video,
		collections : Videos,
		readView    : VideoView,
		editView    : VideoEditView
	});

	return VideoController;
});
