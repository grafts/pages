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
			name        : '아만다 사이프리드',
			description : '펜실베니아 갱킹의 제왕. 리신 정글 하드캐리합니다',
			thumb       : {
				_url    : '/images/avatar.jpg',
			},
			avatar      : {
				_url    : '/images/avatar_big.jpg',
			},
			cover       : {
				_url    : '/images/cover_background.png'
			}
		};

	var Model = Backbone.Model.extend({
		defaults: dummy,
		className: '_User',
		initialize: function(){
			
		}
	});

	return Model;
});
