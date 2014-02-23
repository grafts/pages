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

	var Controller = Backbone.Controller.extend({
		el          : $('section.user'),
		model       : User,
		// collection : Users,
		readView    : UserView,
		editView    : UserEditView
	});

	return Controller;

});
