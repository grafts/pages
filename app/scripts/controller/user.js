/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/user',

	'views/user',
	'views/userEdit'
], function ($, _, Backbone, User, UserView, UserEditView) {
	'use strict';

	var UserController = function(){
		this.el = $('section.user');
		this.views = {};
	};


	UserController.prototype.run = function(param){
		var view, View, edit='';

		if((param.action && param.action == 'update') || (param.id && param.id == 'create')){
			View = UserEditView;
			edit = 'edit_';
		}
		else {
			View = UserView;
		}

		view = new View({
			model : new User({
				id : param.id
			}),
			id    : 'userItem_' + edit + param.id
		});

		this.views[param.id] = view;
		this.el.append(view.render());

	};

	UserController.prototype.stop = function(param){
		console.log('stop User view');
		for(var current in this.views){
			this.views[current].unrender();
		}
	}

	return UserController;
});
