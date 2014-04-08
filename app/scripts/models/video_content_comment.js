define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';
	return Backbone.Model.extend({
		className : 'comment',
		JSON : function(){
			var author = this.get('author').toJSON(),
				json   = this.toJSON();
			json.author = author;

			return json;
		}
	});
});
