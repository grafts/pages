/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'views/user',
	'views/userEdit'
], function ($, _, Backbone, UserView, UserEditView) {
	'use strict';

	var UserController = function(){
		
	};


	UserController.prototype.run = function(param){
		var view;

		if((param.action && param.action == 'update') || (param.id && param.id == 'create')){
			view = new UserEditView(param.id);
		}
		else {
			view = new UserView(param.id);
		}

		view.render();

	};

	UserController.prototype.stop = function(param){
		console.log('stop User view');
	}

	return UserController;
});
