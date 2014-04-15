/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'handlebars',

	'youtube!',
	'views/components/cover',
	'views/components/video_scripts',
	'views/components/video_comments',
	'views/components/video_player_timeline',

	'collections/video_contents',

	'editor'
], function ($, _, Backbone, JST, Handlebars, YT, CoverView, ScriptsView, CommentsView, TimelineView, Contents, editor) {
	'use strict';

	var View = Backbone.Page.extend({
		// el: '.video-item',
		tagName: 'div',
		template : JST['app/scripts/templates/video.hbs'],
		components : {},
		events: {
			'click a'                                : 'link',
			'click .scripts .item.on .comments-link' : 'commentToggle',
			'click .reply'                           : 'replyFormToggle',
			'click .clock, .anker, .script'          : 'gotoClickedScript'
		},
		editModeEvents : {
			'click a'                                : 'link',
			'click .edit-tool > button'              : 'crud',
			'keydown .head .title'                   : 'modelSync',
			'keydown .head .subtitle'                : 'modelSync',
			'keydown .script p'                      : 'modelSync',
			'change  input.cover-file-input'         : 'modelSync'
		},
		editFields : ['.head .title', '.head .subtitle'],
		initialize: function(param){
			var self  = this;

			_.bindAll(this);

			this.el.setAttribute('class', 'video-item');

			this.$el.append(this.template(this.model.JSON()));
			this.contents = new Contents();
			this.model.get('contents') && this.contents.add(this.model.get('contents'));

			this.addComponents();
			this.updateVideo();
			this.updateCover();
			this.listenTo(this.model, 'change:videoInfo', this.updateVideo);
			this.listenTo(this.model, 'change:cover', this.updateCover);
			this.listenTo(this.model, 'change:contents', this.updateContents);

			// Backbone.pubsub.on('scroll', function(){
			// 	if(!self.editMode) return;

			// 	var scroll  = $(window).scrollTop();
			// 	if(this._limit && this._limit >= scroll){
			// 		self.$('.contents').removeClass('fix');
			// 		self.$('.dummy').remove();
			// 		delete this._limit;
			// 		delete this._fix;
			// 		return;
			// 	}

			// 	var video   = self.$('.player'),
			// 		limit   = video.offset().top;

			// 	if(scroll >= limit && !this._fix){
			// 		self.$('.contents').addClass('fix');
			// 		video.after($('<div class="dummy"></div>').css('height', video.height()));
			// 		this._limit = limit;
			// 		this._fix = true;
			// 	}
			// });

		},
		render: function(){
			console.log('video view render');
			this.$el.show();
			this.delegateEvents();
			return this.$el;
		},
		unrender: function(type){
			var self = this;
			Backbone.pubsub.trigger('videoUnrender:' + self.model.id, type);
			Backbone.pubsub.off(null, null, this);
			this.undelegateEvents();
			this.$el.hide();
		},
		destroy : function(){
			this.unrender(true);
			this.remove();
		},
		getEditAuth : function(){
			return new Promise(function(resolve, reject){
				resolve();
			});
		},
		addComponents : function(){
			var self     = this,
				video    = this.model.get('videoInfo'),
				duration = video && video.duration ? video.duration : 0,
				_add = function(resource){
					var Components = {
						scripts  : ScriptsView,
						timeline : TimelineView,
						comments : CommentsView
					};
					if(this.components[resource]){
						this.components[resource].unrender();
						this.components[resource].remove();
						delete this.components[resource];
					}

					this.components[resource] = new Components[resource]({
						id       : 'video_' + self.model.id + '_' + resource,
						videoId  : self.model.id,
						contents : self.contents,
						duration : duration
					});

					this.$('.'+resource+'-wrapper').append(this.components[resource].render());
				};

			_add.call(this, 'timeline');
			_add.call(this, 'scripts');
			_add.call(this, 'comments');
		},
		link : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
		},
		commentToggle : function(e){
			var id       = e.currentTarget.parentNode.id,
				contents = this.$('.contents'),
				comments = this.$('.comments-wrapper');
			
			if(!contents.hasClass('comments-on')){
				this.commentChange(id);
			}
			this.$('.comments-wrapper').find('.item').toggleClass('on');
			comments.toggle();
			this.$('.contents').toggleClass('comments-on');
		},
		commentChange : function(id){
			Backbone.pubsub.trigger('videoCommentsChange:' + this.model.id, id);
		},
		replyFormToggle : function(e){
			$(e.currentTarget.nextElementSibling).toggle();
		},
		gotoClickedScript : function(e){
			var current = e.currentTarget.parentNode.id;
			Backbone.pubsub.trigger('videoTimelineLink:' + this.model.id, current);
		},
		scrollToArticle : function(id){
			var self         = this,
				timeline     = this.$('.timeline-contents').find('.scripts'),
				items        = timeline.children(),
				item         = $(document.getElementById(id));

			items.removeClass('on');
			timeline.animate({
				scrollTop : timeline.scrollTop() + item.position().top
			},
			500,
			function(){
				item.addClass('on');
			});
			this.commentChange(id);
		},
		updateContents : function(){
			var self = this,
				// after = _.pluck(this.model.get('contents'), 'id'),
				// before = _.pluck(this.contents.models, 'id'),
				after = this.model.get('contents'),
				before = this.contents.models,
				event = 'change',
				changed;

			if(before.length < after.length){
				event = 'add';
				changed = _.difference(after, before);
			}
			else if(before.length > after.length){
				event = 'del';
				changed = _.difference(before, after);
			}
				
			this.contents.reset(this.model.get('contents'), { silent : true });
			this.contents.trigger(event, changed);
		},
		updateVideo : function(){
			var self       = this,
				video      = this.model.get('videoInfo'),
				editButton = this.$('.edit-tool[data-edit="video"]');

			if(this.$('iframe.video').length){
				this.deleteVideo(function(){
					self.addVideo();
				});
			}
			else {
				self.addVideo();
			}

			editButton.children().hide();

			if(video){
				editButton.children('.delete').show();
			}
			else {
				editButton.children('.upload').show();
			}

		},
		addVideo : function(){
			var self  = this,
				video = this.model.get('videoInfo'),
				loadPlayer, interval, progressSync, dom;

			if(!video) return;

			dom = $('<div class="video"></div>');
			self.$('.video-wrapper').append(dom);

			interval = function(player){

				var currentTime      = player.getCurrentTime() || 0,
					scriptId         = self.contents.reduce(function(before, after, i){
						if(currentTime <= after.get('time')) return before;
						return after;
					}).id;

				Backbone.pubsub.trigger('videoSync:' + self.model.id, currentTime, scriptId);
			};

			var on = {
					'unstarted' : function(player){
						console.log(arguments);
					},
					'ended' : function(player){
						clearInterval(progressSync);
					},
					'playing' : function(player){
						progressSync = setInterval(interval, 500, player);
					},
					'paused' : function(player){
						clearInterval(progressSync);
						console.log(arguments);
					},
					'buffering' : function(player){
						console.log(arguments);
					},
					'player cued' : function(player){
						console.log(arguments);
					}
				};

			var _createPlayer = function(){
					var player = new YT.Player(dom[0], {
						videoId : video.id
					});
					return new Promise(function(resolve, reject){
						resolve(player);
					});
				},
				_setStateEvent = function(player){
					// unstarted (-1), ended (0), playing (1), paused (2), buffering (3), player cued (5).
					var states = {
							'-1' : 'unstarted',
							'0'  : 'ended',
							'1'  : 'playing',
							'2'  : 'paused',
							'3'  : 'buffering',
							'5'  : 'player cued'
						};

					return new Promise(function(resolve, reject){
						player.addEventListener('onReady', function(){
							player.addEventListener('onStateChange', function(current, e){
								on[states[current.data]](player);
							});
							resolve(player);
						});
					});
				},
				_setPlayEvent = function(player){
					var currentScriptId,
						_findArtcle = function(id, player){
							var script = _.find(self.model.get('contents'), { 'id' : id}),
								time   = script.get('time');

							player.seekTo(time);
							player.playVideo();
						},
						_unrender = function(type, player, callback){
							Backbone.pubsub.off(null, null, player);
							if(type){
								player.destroy();
							}
							else {
								player.stopVideo();
							}
							callback && callback();
						};

					Backbone.pubsub.on('videoTimelineLink:' + self.model.id, function(scriptId){
						_findArtcle.call(this, scriptId, player);
					}, player);
					Backbone.pubsub.on('videoSync:' + self.model.id, function(currentTime, scriptId){
						if((!currentScriptId) || (currentScriptId != scriptId)){
							currentScriptId = scriptId;
							self.scrollToArticle(scriptId);
						}
					}, player);
					Backbone.pubsub.on('videoUnrender:' + self.model.id, function(type, callback){
						_unrender.call(this, type, player, callback);
					}, player);
					Backbone.pubsub.on('getVideoCurrentTime:' + self.model.id, function(callback){
						callback(player.getCurrentTime());
					}, player);

					// for first time.
					interval(player);

					return player;
				},
				_saveVideo = function(player){
					if(!video.duration){
						self.model.set('videoInfo', {
							id : video.id,
							duration : player.getDuration()
						}, {silent:true});
					}
					return player;
				},
				_setEditTool = function(player){
					self.$('.edit-tool[data-edit="video"]')
					.children().hide().end()
					.children('.delete').show();

					self.$('.player').addClass('on');
					return player;
				};

			dom.empty();

			_createPlayer()
			.then(_setStateEvent)
			.then(_setPlayEvent)
			.then(_saveVideo)
			.then(_setEditTool)
			.then(null, function(){
				console.log(arguments);
			});
		},
		deleteVideo : function(callback){
			var self = this;

			Backbone.pubsub.trigger('videoUnrender:' + this.model.id, true, function(){
				self.$('.video-wrapper').empty();
				self.$('.edit-tool[data-edit="video"]')
				.children().hide().end()
				.children('.upload').show();
				callback && callback();
			});
		},
		modelSync : _.debounce(function(e){
			var self = this,
				attr = e.currentTarget.dataset.attr,
				val  = e.currentTarget.textContent,
				model = self.model;

			if(!this.changed) this.changed = [];
			if(attr == 'script'){
				model = _.find(self.model.get('contents'), {id:e.currentTarget.parentNode.parentNode.id});
			}
			else if(attr == 'cover'){
				val = new Backbone.File('cover', e.currentTarget.files[0]);

				val.save().then(function(){
					model.set(attr, val);
					model.save();
					if(!_.find(self.changed, function(c){ return c.id == model.id; })) self.changed.push(model);
				});
				return;
			}
			model.set(attr, val);
			if(!_.find(this.changed, function(c){ return c.id == model.id; })) this.changed.push(model);
		}, 100),
		crud : function(e){
			var self     = this,
				resource = e.currentTarget.parentNode.dataset.edit,
				action   = e.currentTarget.className.replace('button ', '').replace('edit-tool-', ''),
				_getYoutubeId = function(url){
					try {
						var id = url.split('/').pop().split('=').pop();
						if(id.length != 11){
							return null;
						}
						return id;
					}
					catch(err){
						return null;
					}
				},
				_manage  = {
					create : {
						script : function(){
							Backbone.pubsub.trigger('getVideoCurrentTime:' + self.model.id, function(time){
								self.model.addContents({
									time : time,
									script : ''
								}).then(function(){
									return self.model.save();
								});
							});
						}
					},
					upload : {
						video : function(){
							var url = prompt("Insert Video URL"),
								id  = _getYoutubeId(url);

							if(!id){
								alert('Wrong URL');
								return;
							}

							self.model.set('videoInfo', {
								id : id
							});
						},
						cover : function(){
							self.$('#video_' + self.model.id + '_cover_file').click();
						}
					},
					delete : {
						video : function(){
							self.model.unset('videoInfo');
						},
						cover : function(){
							self.model.unset('cover');
						},
						article : function(){

						},
						script : function(e){
							self.model.delContents(_.find(self.model.get('contents'), { id : e.currentTarget.parentNode.parentNode.id })).then(function(){
								return self.model.save();
							});
						}
					},
					save : {
						article : function(){
							if((self.model.id == 1)){
								Backbone.history.navigate('/video/1', { trigger : true });
								return
							}
							if(!self.changed || self.changed.length < 1){
								Backbone.history.navigate('/video/' + self.model.id, { trigger : true });
								return
							}
							Backbone.Model.saveAll(self.changed).then(function(){
								Backbone.history.navigate('/video/' + self.model.id, { trigger : true });
							})
							.then(null, function(err){
								console.log(err);
							});
						}
					},
					publish : {
						article : function(){
							self.model.save({
								publish : true,
								publishedAt : new Date()
							}).then(function(err){
								Backbone.history.navigate('/video/' + self.model.id, { trigger : true });
							});
						}
					},
					unpublish : {
						article : function(){
							self.model.save({
								publish : false
							}).then(function(err){
								Backbone.history.navigate('/video/' + self.model.id, { trigger : true });
							});
						}
					}
				};

			_manage[action][resource](e);
		}
	});

	return View;
});