/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var dummy = {
		
	};

	var Model = Backbone.Model.extend({
		className : 'lesson',
		defaults: {},
		insertDummyData : function(){
			this.set(dummy);
			return this;
		}
	});

	return Model;
});
