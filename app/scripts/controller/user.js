/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/user',
	'collections/video',

	'views/user'
], function ($, _, Backbone, User, Vidoes, UserView) {
	'use strict';

	var Controller = Backbone.Controller.extend({
		el          : 'section.user',
		model       : User,
		// collection : Users,
		view        : UserView,
		pull : function(id){
			var self = this,
				query = new Backbone.Query(self.model),
				user;

			query.include(self.options.query.include);

			return query.get(id).then(function(data){
				user = data;
				return (new Vidoes({ author : user })).fetch();
			})
			.then(function(videos){
				return {
					model       : user,
					attributes  : {
						videos  : videos
					}
				}
			});
		},
		createDummyView : function(id){
			var self = this;
			return new self.view({
				model  : (new self.model()).insertDummyData(),
				id     : self.$el.attr('class') + '_dummy_' + id,
				attributes : {
					videos : (new Vidoes()).insertDummyData()
				}
			});
		}
	});

	return Controller;

});
