/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/video',
	'collections/video',

	'views/video',
	'views/videoEdit'
], function ($, _, Backbone, Video, Videos, VideoView, VideoEditView) {
	'use strict';

	var VideoController = function(){
		this.el = $('section.video');
		this.views = {};
	};


	VideoController.prototype.run = function(param){
		var view, View, edit='';

		if((param.action && param.action == 'update') || (param.id && param.id == 'create')){
			View = VideoEditView;
			edit = 'edit_';
		}
		else {
			View = VideoView;
		}

		view = new View({
			model : new Video({
				id : param.id
			}),
			id    : 'videoItem_' + edit + param.id
		});

		this.views[param.id] = view;
		this.el.append(view.render());

	};

	VideoController.prototype.stop = function(param){
		console.log('stop video view');
		for(var current in this.views){
			this.views[current].unrender();
		}
	}

	return VideoController;
});
