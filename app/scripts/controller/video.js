/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'views/video',
	'views/videoEdit'
], function ($, _, Backbone, VideoView, VideoEditView) {
	'use strict';

	var VideoController = function(){
		
	};


	VideoController.prototype.run = function(param){
		var view;

		if((param.action && param.action == 'update') || (param.id && param.id == 'create')){
			view = new VideoEditView(param.id);
		}
		else {
			view = new VideoView(param.id);
		}

		view.render();

	};

	VideoController.prototype.stop = function(param){
		console.log('stop video view');
	}

	return VideoController;
});
