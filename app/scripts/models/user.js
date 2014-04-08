define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	//
	//
	// for prototype, dummy data input
	var dummy = {
			id          : 1,
			name        : 'Amanda Michelle Seyfried',
			username    : 'Amanda Michelle Seyfried',
			description : 'Lord of pennsylvanian ganking. Hard carring with junggle Lee Sin',
			thumb       : {
				_url    : '/images/avatar.jpg'
			},
			avatar      : {
				url    : '/images/avatar_big.jpg'
			},
			cover       : {
				_url    : '/images/cover_background.png'
			}
		};

	var Model = Backbone.Model.extend({
		className: '_User',
		defaults: {},
		insertDummyData : function(){
			this.set(dummy);
			return this;
		}
	});

	return Model;
});
