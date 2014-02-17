/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	//
	//
	// for prototype, dummy data input
	var dummy = {
			id : 1,
			title      : 'How to stomp games and get dat LP',
			subtitle   : 'Solo Top , AD Carry, Diamond I, ADC , Mid , North America',
			author     : {
				id     : 1,
				name   : '아만다 사이프리드',
				avatar : '/images/avatar.jpg'
			},
			// coverImage : {
			// 	src    : "/images/cover_background.png" 
			// },
			view       : 123123,
			like       : 123,
			relate     : {
				id         : 2,
				title      : 'Today is good day to die',
				subtitle   : '자르반 4세, 데마시아의 귀감',
				author     : {
					id     : 1,
					name   : '아만다 사이프리드',
					avatar : '/images/avatar.jpg'
				},
				coverImage : {
					src    : "/images/light_cover_background.png" 
				}
			}
			// for prototype, dummy data input
			//
			//
		};

	var Model = Backbone.Model.extend({
		defaults: dummy
	});

	return Model;
});
