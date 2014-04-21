/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'views/gnb',

	'models/video',
	'models/class'
], function ($, _, Backbone, GNB, Video, Class) {
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
			Backbone.pubsub.on('create', this.create, this);

			function toggleView(){
				$('.screen').toggleClass('scrollable').toggleClass('off');
			}
		},
		create : function(option){
			var self   = this,
				user   = Backbone.User.current(),
				models = {
					'video' : Video,
					'class' : Class
				},
				model, attr;

			if(!user) return

			model = new models[option.model]({
				author : user
			});

			model.save().then(function(data){
				Backbone.history.navigate('/'+option.model+'/' + data.id + '/update', { trigger : true });
			});
		},
		run : function(user){},
		stop : function(){},
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
