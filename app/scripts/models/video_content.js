define([
	'underscore',
	'backbone',
	'models/video_content_comment'
], function (_, Backbone, Comment) {
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
			addComments  : function(data, option){
				var self    = this,
					multi   = _.isArray(data),
					content = data.content,
					_single, _multi;

				delete data.content;

				_single = function(data){
					data.video = self.video;
					return (new Comment(data)).save();
				},
				_multi  = function(data){
					return Backbone.Model.saveAll(data.map(function(comment){
						comment.video = self.video;
						return new Comment(comment);
					}));
				};

				return (multi ? _multi(data) : _single(data)).then(function(data){
					if(multi){
						data.forEach(function(comment){
							self.add('comments', comment);
						});
					}
					else {
						self.add('comments', data);
					}
					if(option && option.success){
						option.success(data);
					}
					return data;
				});
			},
			delComments : function(comment){
				var self = this;
				
				self.set('comments', _.remove(self.get('comments'), function(val) { return val.id != content.id; }));
				return comment.destroy();
			},
			empty : function(option){
				return Parse.Object.destroyAll(this.get('comments'), option);
			},
			refine    : function(options){
				var val  = this.toJSON(),
					time = this.get('time');

				if(options && options.duration) val.position = percent(options.duration, time);
				if(time) val.hhmmss   = hhmmss(time);

				return val;
			}
		});

	return Model;
});
