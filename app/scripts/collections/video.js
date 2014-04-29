/*global define*/

define([
	'underscore',
	'backbone',
	'models/video'
], function (_, Backbone, Model) {
	'use strict';

	var Collection = Backbone.Collection.extend({
		model: Model,
		initialize : function(data){
			var currentUser = Backbone.User.current(),
				query       = new Backbone.Query(Model);

			query.include(['author']);
			if(!currentUser || !data || !data.author || currentUser.id != data.author.id){
				query.equalTo('publish', true);
			}
			if(data){
				Object.keys(data).forEach(function(key){
					query.equalTo(key, data[key]);
				});
			}
			this.query = query;
		},
		comparator : function(model) {
			return - model.updatedAt;
		},
		JSON : function(){
			return this.models.map(function(model){
				return model.JSON();
			});
		},
		insertDummyData : function(){
			var self  = this,
				len   = parseInt(Math.random(5)/1*5+2);

			for(var i=1; i<len; i++){
				self.add((new Model()).insertDummyData(i));
			}
			return this;
		}
	});

	return Collection;
});
