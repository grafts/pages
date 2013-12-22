/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	'use strict';

	var UserView = Backbone.View.extend({
		tagName: 'div',
		template: JST['app/scripts/templates/user.hbs'],
		initialize: function(id){
			id && (this.id = id);
			this.el.setAttribute('id', id);
			this.el.setAttribute('class', 'user-item');
		},
		render: function(){
			console.log('user view render', this.id);
		}
	});

	return UserView;
});
