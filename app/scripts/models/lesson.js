/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var Model = Backbone.Model.extend({
		className : 'lesson',
		defaults: {
		}
	});

	return Model;
});
