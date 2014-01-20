/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var Model = Backbone.Model.extend({
		defaults: {
		},
		urlRoot : '/live',
		initialize: function(){
			
		}
	});

	return Model;
});
