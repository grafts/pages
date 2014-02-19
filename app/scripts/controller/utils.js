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
			};
			this.resizeWatch = function(){
				window.addEventListener('resize', function(){
					Backbone.pubsub.trigger('resize');
				});
			};
			this.logoStart = function(){
				Backbone.pubsub.on('scroll', update, this);
				
				function update(){
					var top = $(window).scrollTop();
					if(top > 0){
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
			this.resizeWatch();
			this.logoStart();

			Backbone.pubsub.on('gnb:toggle', toggleView, this);

			function toggleView(){
				$('.screen').toggleClass('scrollable').toggleClass('off');
			}
		},
		stop : function(){

		}
	});

	return UtilsController;
});
