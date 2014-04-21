/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/video',
	'models/class'
], function ($, _, Backbone, Video, Class) {
	'use strict';

	var GNB = Backbone.View.extend({
		el: '.header',
		template : JST['app/scripts/templates/gnb.hbs'],
		events: {
			// 'click a' : 'link',
			'click .logo'   : 'toggle',
			"submit form"   : "submit",
			'click .create' : 'create',
			'click .signin' : 'signin',
			'click .logout' : 'logout'
		},
		initialize: function(id){
		},
		render: function(user){
			console.log('gnb view render');
			var data;

			if(!user && !this.currentUser){
			}
			else if(this.currentUser != user){
				this.currentUser = user;
				data = this.currentUser.toJSON();
			}
			else {
				data = this.currentUser.toJSON();
			}
			this.$el.html(this.template({
				user : data
			}));

			return this.$el;
		},
		unrender: function(){
			this.undelegateEvents();
			this.$el.hide();
		},
		signin : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.Auth.signin();
		},
		logout : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.User.logOut();
			Backbone.Auth.logout();
			window.location.href = '/discoveries';
		},
		_on : function(){
			var bg,
				self = this;

			this.$el.addClass('on');
			Backbone.pubsub.trigger('gnb:toggle', null, this);

			bg = $('<div class="gnb-close"/>');
			this.$el.after(bg);
			setTimeout(function(){
				bg.addClass('on').on('click', function(){
					$(this).remove();
					self._off();
				});
			},1);
		},
		_off : function(){
			var bg = this.$el.next();

			this.$el.removeClass('on');
			Backbone.pubsub.trigger('gnb:toggle', null, this);

			if(bg.hasClass('gnb-close')){
				bg.remove();
			}
		},
		toggle : function(e){
			e.preventDefault();
			e.stopPropagation();
			if(Backbone.history.fragment == '' || Backbone.history.fragment.split('/')[0] == 'search'){
				return;
			}
			if(this.$el.hasClass('on')){
				this._off();
			} else {
				this._on();
			}
		},
		create : function(e){
			e.preventDefault();
			this._off();
			Backbone.pubsub.trigger('create', { model : e.currentTarget.dataset.attr });
		},
		link : function(e){
			e.preventDefault();
			e.stopPropagation();
			this._off();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
		},
		submit : function(e){
			e.preventDefault();

			var param = this.$('input').val();

			Backbone.history.navigate('/search/' + param, { trigger : true });
		}, 
		test : function(){
			console.log(arguments);
		}
	});

	return GNB;
});
