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

	var View = Backbone.View.extend({
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
		initialize: function(param){
			var self  = this;

			_.bindAll(this);

			this.el.setAttribute('class', 'video-item');

			this.$el.append(this.template(this.model.JSON()));
			this.contents = new Contents();
			this.contents.add(this.model.get('contents'));

			this.addContents();
			this.updateVideo();
			this.updateCover();

			this.listenTo(this.model, 'change:video', this.updateVideo);
			this.listenTo(this.model, 'change:cover', this.updateCover);
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
		link : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
		},
		commentToggle : function(e){
			var seq      = this.$(e.currentTarget.parentNode).index(),
				contents = this.$('.contents'),
				comments = this.$('.comments-wrapper');
			
			if(!contents.hasClass('comments-on')){
				this.commentChange(seq);
			}
			this.$('.comments-wrapper').find('.item').toggleClass('on');
			comments.toggle();
			this.$('.contents').toggleClass('comments-on');
		},
		commentChange : function(seq){
			Backbone.pubsub.trigger('videoCommentsChange:' + this.model.id, seq);
		},
		replyFormToggle : function(e){
			$(e.currentTarget.nextElementSibling).toggle();
		},
		gotoClickedScript : function(e){
			var current = this.$(e.currentTarget.parentNode).index();
			Backbone.pubsub.trigger('videoTimelineLink:' + this.model.id, current);
		},
		scrollToArticle : function(scriptSeq){
			var self         = this,
				timeline     = this.$('.timeline-contents').find('.scripts'),
				items        = timeline.children(),
				item         = items.eq(scriptSeq);

			items.removeClass('on');
			// this.$('.scripts').addClass('moving');
			timeline.animate({
				scrollTop : timeline.scrollTop() + item.position().top
			},
			500,
			function(){
				item.addClass('on');
				// self.$('.scripts').removeClass('moving');
			});
			this.commentChange(scriptSeq);
		},
		updateVideo : function(){
			if(this.model.get('video')){
				this.addVideo();
			}
			else {
				this.deleteVideo();
			}
		},
		addVideo : function(){
			var self  = this,
				video = this.model.get('video'),
				loadPlayer, interval, progressSync, dom;

			if(!video) return;

			dom = $('<div class="video"></div>');
			self.$('.video-wrapper').append(dom);

			interval = function(player){

				var currentTime      = player.getCurrentTime(),
					contents         = self.model.get('contents'),
					scriptSeq        = _.findIndex(contents, function(content) {
						return content.get('time') > currentTime;
					});

				if(scriptSeq < 0){
					scriptSeq = contents.length - 1;
				} else if(scriptSeq != 0){
					scriptSeq -= 1;
				}

				Backbone.pubsub.trigger('videoSync:' + self.model.id, currentTime, scriptSeq);
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
					var currentScriptSeq = -1,
						_findArtcle = function(scriptSeq, player){
							var script = self.model.get('contents')[scriptSeq],
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

					Backbone.pubsub.on('videoTimelineLink:' + self.model.id, function(scriptSeq){
						_findArtcle.call(this, scriptSeq, player);
					}, player);
					Backbone.pubsub.on('videoSync:' + self.model.id, function(currentTime, scriptSeq){
						if(currentScriptSeq != scriptSeq){
							currentScriptSeq = scriptSeq;
							self.scrollToArticle(scriptSeq);
						}
					}, player);
					Backbone.pubsub.on('videoUnrender:' + self.model.id, function(type, callback){
						_unrender.call(this, type, player, callback);
					}, player);
					Backbone.pubsub.on('getVideoCurrentTime:' + self.model.id, function(callback){
						callback(player.getCurrentTime());
					}, player);
					return player;
				},
				_saveVideo = function(player){
					if(!video.duration){
						self.model.set('video', {
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
		deleteVideo : function(){
			var self = this;

			Backbone.pubsub.trigger('videoUnrender:' + this.model.id, true, function(){
				self.$('.video-wrapper').empty();
				self.$('.edit-tool[data-edit="video"]')
				.children().hide().end()
				.children('.upload').show();
			});
		},
		addContents : function(){
			var self     = this,
				video    = this.model.get('video'),
				duration = video && video.duration ? video.duration : this.model.get('contents')[this.model.get('contents').length-1].get('time'),
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
		editConfig : {
			event : {
				'click a'                       : 'link',
				'click .script-delete'          : 'deleteScript',
				'click .script-add'             : 'addScript',
				'click .edit-tool > .button'    : 'fileManage',
				'click .edit-tool-save'         : 'save',
				'click .edit-tool-publish'      : 'publish'
			},
			fields : [
				{ selector : '.head .title', type : 'title' },
				{ selector : '.head .subtitle', type : 'subtitle' },
				{ selector : '.script', type : 'script' }
			]
		},
		getEditAuth : function(){
			return true;
		},
		addScript : function(){
			var self = this,
				src   = '<li class="item"><div class="clock">{{hhmmss}}</div> <button class="anker"></button> <div class="script"> <p class="sans-serif">{{script}}</p> </div> <button class="script-delete"><i class="icon-cancel"></i></button></li>',
				tmplt = Handlebars.compile(src),
				el;

			Backbone.pubsub.trigger('getVideoCurrentTime:' + this.model.id, function(time){
				self.model.addContents({
					time : time,
					script : ''
				}).then(function(){
					console.log(arguments);
				}).then(null ,function(){
					console.log(arguments);
				});
			});
		},
		deleteScript : function(){

		},
		save : function(){
			var self = this;
			// 1. serialize & save
			this.editMode.save()
			// 3. change view mode
			.then(function(){
				self.read();
			});
		},
		publish : function(){
			var self = this;

			return this.model.save({
				'publish' : true,
				'publishedAt' : new Date()
			}).then(function(){
				return self.save();
			});
		},
		fileManage : function(e){
			var self     = this,
				resource = e.currentTarget.parentNode.dataset.edit,
				action   = e.currentTarget.className.replace('button ', ''),
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
					upload : {
						video : function(){
							var url = prompt("Insert Video URL"),
								id  = _getYoutubeId(url);

							if(!id){
								alert('Wrong URL');
								return;
							}

							self.model.set('video', {
								id : id
							});
						},
						cover : function(){

						}
					},
					delete : {
						video : function(){
							self.model.unset('video');
						},
						cover : function(){
							self.model.unset('cover');
						}
					}
				};

			_manage[action][resource]();
		},
		test : function(){
			console.log('test arg = ');
			console.log(arguments);
		}
	});

	return View;
});