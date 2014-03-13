define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var percent = function(total, current){
			return current / total * 100;
		},
		hhmmss  = function(secs){
			var hours = Math.floor(secs / (60 * 60));

			var divisor_for_minutes = secs % (60 * 60);
			var minutes = Math.floor(divisor_for_minutes / 60) || '00';

			var divisor_for_seconds = divisor_for_minutes % 60;
			var seconds = Math.ceil(divisor_for_seconds) || '00';

			var hhmmss = '';

			if(hours != 0){
				hhmmss += (hours + ':'); 
			}
			if(minutes<10){
				minutes = '0' + minutes;
			}
			if(seconds<10){
				// seconds = '0' + minutes;
			}
			hhmmss += (minutes + ':'); 
			hhmmss += (seconds);

			return hhmmss;
		};

	var Model = Backbone.Model.extend({
			className : 'content',
			refine    : function(options){
				var val  = this.toJSON(),
					time = this.get('time');

				if(options && options.duration) val.position = percent(options.duration, time);
				if(time) val.hhmmss   = hhmmss(time);

				return val;
			}
		}),
		Collection = Backbone.Collection.extend({
			model: Model,
			comparator : function(model) {
				return model.get("time");
			},
			refine : function(options){
				return this.map(function(model){ return model.refine(options); });
			}
		});

	return Collection;
});
