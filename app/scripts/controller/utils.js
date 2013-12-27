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
		},
		run : function(){

			var gnb = new GNB;
			gnb.render();

			this.scrollWatch();
			this.logoStart();
		},
		stop : function(){

		}
	});

	return UtilsController;
});
