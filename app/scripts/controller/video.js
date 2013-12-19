/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'views/video'
], function ($, _, Backbone, VideoView) {
	'use strict';

	var VideoController = function(){
		
	};


	VideoController.prototype.run = function(){
		console.log(arguments);
	};

	return VideoController;
});
