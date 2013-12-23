/*global define*/

define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	var UtilsController = function(){
		this.scrollWatch = function(){
			$(window).scroll(function(e){
				Backbone.pubsub.trigger('scroll');
			});
		}
		this.logoStart = function(){
			Backbone.pubsub.on('scroll', _.debounce(update, 200));
			
			function update(){
				var top = $(window).scrollTop();
				if(top != 0){
					$('.logo').addClass('hide');
				}
				else {
					$('.logo').removeClass('hide');
				}
			}
		}
	};


	UtilsController.prototype.run = function(param){
		this.scrollWatch();
		this.logoStart();
	};

	UtilsController.prototype.stop = function(param){
		
	}

	return UtilsController;
});
