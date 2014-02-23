/*global define*/

define([
	'underscore',
	'backbone',
	'models/video'
], function (_, Backbone, VideoModel) {
	'use strict';

	var Collection = Backbone.Collection.extend({
		model: VideoModel
	});

	return Collection;
});
