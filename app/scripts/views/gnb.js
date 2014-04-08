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
			var self  = this,
				user  = Backbone.User.current(),
				attr  = e.currentTarget.dataset.attr,
				Model = attr == 'video' ? Video : Class,
				model = new Model({
					author : user
				});

			model.save().then(function(model){
				self._off();
				Backbone.history.navigate('/'+attr+'/' + model.id + '/update', { trigger : true });
			});
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
