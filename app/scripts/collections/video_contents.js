define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var Model = Backbone.Model.extend({
			className : 'content'
		}),
		Collection = Backbone.Collection.extend({
			model: Model,
			comparator : function(model) {
				return model.get("time");
			}
		});

	return Collection;
});
