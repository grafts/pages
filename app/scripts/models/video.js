/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var VideoModel = Backbone.Model.extend({
		defaults: {
			view: 123123,
			like: 1123,
			unlike: 123
		},
		urlRoot : '/video',
		initialize: function(){
			
		}
	});

	return VideoModel;
});
