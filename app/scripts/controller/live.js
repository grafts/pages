/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/live',

	'views/live',
	'views/liveEdit'
], function ($, _, Backbone, Live, LiveView, LiveEditView) {
	'use strict';

	var Controller = Backbone.Controller.extend({
		el          : $('section.live'),
		model       : Live,
		readView    : LiveView,
		editView    : LiveEditView
	});

	return Controller;
});
