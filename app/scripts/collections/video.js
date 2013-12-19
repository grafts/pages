/*global define*/

define([
	'underscore',
	'backbone',
	'models/video'
], function (_, Backbone, VideoModel) {
	'use strict';

	var VideoCollection = Backbone.Collection.extend({
		model: VideoModel
	});

	return VideoCollection;
});
