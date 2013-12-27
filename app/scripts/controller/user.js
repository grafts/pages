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

	var UserController = Backbone.Controller.extend({
		el          : $('section.user'),
		model       : User,
		// collections : Users,
		readView    : UserView,
		editView    : UserEditView
	});

	return UserController;

});
