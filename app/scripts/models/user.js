/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var UserModel = Backbone.Model.extend({
		defaults: {
			id : '112',
			name : '아만다 사이프리드',
			description : '펜실베니아 갱킹의 제왕<br>리신 정글 하드캐리합니다',
			image : 'images/avatar.jpg',
			image_big : 'images/avatar_big.jpg',
		},
		initialize: function(){
			
		}
	});

	return UserModel;
});
