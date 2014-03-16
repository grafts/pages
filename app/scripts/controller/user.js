/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/user',

	'views/user',
	'views/userEdit'
], function ($, _, Backbone, User, UserView) {
	'use strict';

	var Controller = Backbone.Controller.extend({
		el          : 'section.user',
		model       : User,
		// collection : Users,
		view        : UserView
	});

	return Controller;

});
