define([
	'underscore',
	'backbone',
	'models/video_content_comment'
], function (_, Backbone, Comment) {
	'use strict';

	return Backbone.Collection.extend({
		model: Comment,
		JSON : function(){
			return this.models.map(function(model){
				return model.JSON();
			});
		}
	});
});
