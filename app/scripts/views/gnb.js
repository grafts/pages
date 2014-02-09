/*global define*/

define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	var GNB = Backbone.View.extend({
		el: '.header',
		events: {
			// 'click a' : 'link',
			'click .logo' : 'toggle',
			"submit form" : "submit"
		},
		initialize: function(id){
		},
		render: function(){
			console.log('gnb view render');
			return this.$el;
		},
		unrender: function(){
			this.undelegateEvents();
			this.$el.hide();
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
			if(Backbone.history.fragment == '' || Backbone.history.fragment.split('/')[0] == 'search'){
				return;
			}
			if(this.$el.hasClass('on')){
				this._off();
			} else {
				this._on();
			}
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
