/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'views/gnb'
], function ($, _, Backbone, GNB) {
	'use strict';

	var UtilsController = Backbone.Controller.extend({
		el : $('.header'),
		initialize : function(){
			this.scrollWatch = function(){
				$(window).scroll(function(e){
					Backbone.pubsub.trigger('scroll');
				});
			}
			this.logoStart = function(){
				Backbone.pubsub.on('scroll', update, this);
				
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
		},
		run : function(){

			var gnb = new GNB;
			gnb.render();

			this.scrollWatch();
			this.logoStart();

			Backbone.pubsub.on('gnb:toggle', toggleView, this);

			function toggleView(){
				$('.view').toggleClass('scrollable').children('section').toggleClass('off');
			}
		},
		stop : function(){

		}
	});

	return UtilsController;
});
