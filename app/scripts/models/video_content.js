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
			var t = new Date(1970,0,1);
			t.setSeconds(secs);
			var s = t.toTimeString().substr(0,8);
			if(secs > 86399)
				s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
			return s.replace(/^00:/, '');
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
				val.hhmmss = hhmmss(time);

				return val;
			}
		});

	return Model;
});
