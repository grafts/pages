/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'views/gnb'
], function ($, _, Backbone, GNB) {
	'use strict';

	var UtilsController = Backbone.Controller.extend({
		el : '.header',
		initialize : function(){
			var self = this;

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
			this.token = Backbone.Auth.parseHash(location.hash);
			location.hash = '';
			
			this.gnb = new GNB;
			this.gnb.render();

			this.scrollWatch();
			this.resizeWatch();
			this.logoStart();

			Backbone.pubsub.on('gnb:toggle', toggleView, this);

			function toggleView(){
				$('.screen').toggleClass('scrollable').toggleClass('off');
			}
		},
		run : function(user){

		},
		stop : function(){

		},
		auth : function(){
			var self = this;

			return new Promise(function(resolve, reject){
				var user = Backbone.User.current();
				if(user){
					self.gnb.render(user);
					resolve(user);
				}
				else if(self.token){
					Backbone.Auth.getProfile(self.token.id_token, function (err, profile) {
						// store result.id_token and profile in local storage or cookie
						Backbone.User.become(profile.parse_session_token).then(function(user) {
							self.gnb.render(user);
							resolve(user);
						})
						.then(null, function (err) {
							reject(err);
						});
					});
				} else {
					resolve(null);
				}
			});
		}
	});

	return UtilsController;
});
