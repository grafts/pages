define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var Content = Backbone.Model.extend({
		className : 'content',
		addComments  : function(data, option){
			var self    = this,
				multi   = _.isArray(data),
				content = data.content,
				Comment = Backbone.Model.extend('comment'),
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
		}
	});

	var Model = Backbone.Model.extend({
		defaults: {},
		urlRoot : '/video',
		className: 'video',
		initialize: function(){

		},
		getContents : function(){
			var self = this,
				contents = _.cloneDeep(this.get('contents')),
				_percent = function(total, current){
					return current / total * 100;
				},
				_hhmmss = function(secs){
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

			if(!contents){
				return null;
			}

			return contents.map(function(val, n){
				val.position = _percent(self.get('duration'), val.time);
				val.hhmmss = _hhmmss(val.time);
				val.seq = n;

				return val;
			});
		},
		addContents  : function(data, option){
			var self    = this,
				multi   = _.isArray(data),
				_single, _multi;

				
			_single = function(data){
				data.video = self;
				return (new Content(data)).save();
			},
			_multi  = function(data){
				return Backbone.Model.saveAll(data.map(function(content){
					content.video = self;
					return new Content(content);
				}));
			};

			return (multi ? _multi(data) : _single(data)).then(function(data){
				if(multi){
					data.forEach(function(content){
						self.add('contents', content);
					});
				}
				else {
					self.add('contents', data);
				}
				if(option && option.success){
					option.success(data);
				}
				return data;
			});
		},
		delContents : function(content){
			var self = this,
				id, target;
			
			self.set('contents', _.remove(self.get('contents'), function(val) { return val.id != content.id; }));

			return content.empty().then(function(){
				return content.destroy();
			});
		},
		empty : function(option){
			var contents = this.get('contents'),
				comments = _.compact(_.flatten(contents.map(function(content){
					return content.get('comments');
				})));

			return Parse.Object.destroyAll(contents.concat(comments), option);
		}

	});

	return Model;
});
