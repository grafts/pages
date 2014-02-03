/*global define*/

define([
	'underscore',
	'backbone',
	'models/video_a'
], function (_, Backbone, Model) {
	'use strict';

	var Collection = Backbone.Collection.extend({
		model: Model
	});

	return Collection;
});
