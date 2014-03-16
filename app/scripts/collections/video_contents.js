define([
	'underscore',
	'backbone',
	'models/video_content'
], function (_, Backbone, Content) {
	'use strict';

	var Collection = Backbone.Collection.extend({
			model: Content,
			comparator : function(model) {
				return model.get("time");
			},
			refine : function(options){
				return this.map(function(model){ return model.refine(options); });
			}
		});

	return Collection;
});
