define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	return Backbone.View.extend({
		tagName : 'div',
		initialize: function(option){
			this.el.className = 'progressBar';

			this.bar = $('<div class="bar"></div>');

			this.$el.append(this.bar);

		},
		render: function(data){
			$('body').append(this.$el);
			return this;
		},
		set : function(loaded, total){
			if(loaded && total && total != 0){
				this.percentage(loaded, total);
			} else {
				this.heartbeat();
			}
			return this;
		},
		percentage : function(_process){
			var _bar, _bar2;

			_bar = _process * 100;

			this.bar.width(_bar + '%');
		},
		heartbeat : function(){
			var self = this;

			this.process = 0.1;

			this.percentage(self.process);

			_heartbeat();

			function _heartbeat(){
				if(self.process < 1){
					self.process += (1- self.process) / 30;
					self.percentage(self.process);
					setTimeout(function(){
						_heartbeat();
					}, 100)
				}
			}

		},
		done : function(){
			var self = this;

			if(this.process){
				this.process = 1;
				this.percentage(self.process);
			}

			setTimeout(function(){
				self.hide();
			}, 500)
		},
		hide : function(page){
			this.undelegateEvents();
			this.$el.removeData().unbind(); 
			this.remove();
			Backbone.View.prototype.remove.call(this);
		},

		link : function(e){
			e.preventDefault();
			Backbone.history.navigate(e.target.pathname, { trigger : true });
		}
	});
});
