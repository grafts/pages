/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',

	'youtube!',
	'views/components/cover',
	'views/components/video_player_timeline'
], function ($, _, Backbone, JST, YT, CoverView, TimelineView) {
	'use strict';

	var View = Backbone.View.extend({
		// el: '.video-item',
		tagName: 'div',
		template: JST['app/scripts/templates/video.hbs'],
		events: {
			'click a'                                : 'link',
			'click .scripts .item.on .comments-link' : 'commentToggle',
			'click .reply'                           : 'replyFormToggle',
			'click .clock'                           : 'gotoClickedScript',
			'click .anker'                           : 'gotoClickedScript',
			'click .script'                          : 'gotoClickedScript'
		},
		initialize: function(id){
			var self = this,
				data = this.model.toJSON();

			_.bindAll(this);

			id && (this.id = id);
			this.el.setAttribute('class', 'video-item');

			data.contents = this.model.getContents();
			this.$el.append(this.template(data));

			this.addCoverImage(this.$('.head'), this.model.get('coverImage'));
			this.addPlayer();
			this.addContents();
			this.addCoverImage(this.$('.relate'), this.model.get('relate').coverImage);

		},
		render: function(){
			// var self  = this,
			// 	startScroll = true,
			// 	scrollStoped = true,
			// 	_excuteAutoScroll = function(currentPosition){
			// 		var windowHeight = $(window).height();
			// 		if(!scrollStoped){
			// 			return;
			// 		}
			// 		if(startScroll && currentPosition > (windowHeight*0.2)){
			// 			scrollStoped = false;
			// 			$('html').animate({
			// 				scrollTop : windowHeight
			// 			},
			// 			200,
			// 			function(){
			// 				startScroll = false;
			// 				scrollStoped = true;
			// 			});
			// 		}
			// 		else if(!startScroll && currentPosition < (windowHeight*0.8)){
			// 			scrollStoped = false;
			// 			$('html').animate({
			// 				scrollTop : 0
			// 			},
			// 			200,
			// 			function(){
			// 				startScroll = true;
			// 				scrollStoped = true;
			// 			});
			// 		}
			// 	};
			

			// this.scrollEventBind = _.debounce(function(){
			// 	var currentPosition = self.$el.offset().top;

			// 	_excuteAutoScroll(currentPosition);

			// }, 1);

			console.log('video view render');

			return this.$el;
		},
		unrender: function(){
			var self = this;
			Backbone.pubsub.off(null, null, this);
			this.undelegateEvents();
			this.$el.hide();
		},
		link : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
		},
		commentToggle : function(e){
			var seq      = e.currentTarget.parentNode.dataset.seq,
				contents = this.$('.contents'),
				comments = this.$('.script-comments-bundle');
			
			if(contents.hasClass('comments-on')){
				this.$('.script-comments-bundle').find('.item').removeClass('on');
			}
			else {
				this.commentChange(seq);
			}
			comments.toggle();
			this.$('.contents').toggleClass('comments-on');
		},
		commentChange : function(seq){
			this.$('.script-comments-bundle').find('.item').removeClass('on').eq(seq).addClass('on');
		},
		replyFormToggle : function(e){
			$(e.currentTarget.nextElementSibling).toggle();
		},
		gotoClickedScript : function(e){
			var current = $(e.currentTarget.parentNode).data().seq;
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
		addPlayer : function(){
			var self = this,
				dom = self.$('.video'),
				loadPlayer,
				interval = function(video){

					var currentTime      = video.getCurrentTime(),
						contents         = self.model.get('contents'),
						scriptSeq        = _.findIndex(contents, function(content) {
							return content.time > currentTime;
						});

					if(scriptSeq < 0){
						scriptSeq = contents.length - 1;
					} else if(scriptSeq != 0){
						scriptSeq -= 1;
					}

					Backbone.pubsub.trigger('videoSync:' + self.model.id, currentTime, scriptSeq);
				},
				progressSync;

			var on = {
					'unstarted' : function(video){
						console.log(arguments);
					},
					'ended' : function(video){
						clearInterval(progressSync);
					},
					'playing' : function(video){
						progressSync = setInterval(interval, 500, video);
					},
					'paused' : function(video){
						clearInterval(progressSync);
						console.log(arguments);
					},
					'buffering' : function(video){
						console.log(arguments);
					},
					'video cued' : function(video){
						console.log(arguments);
					}
				};

			var _removeLoadingImage = function(){
					dom.empty();
					return YT;
				},
				_createPlayer = function(YT){
					var video = new YT.Player(dom[0], {
						videoId : '48auKg6es8E'
					});
					return video;
				},
				_setStateEvent = function(video){
					// unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5).
					var states = {
							'-1' : 'unstarted',
							'0'  : 'ended',
							'1'  : 'playing',
							'2'  : 'paused',
							'3'  : 'buffering',
							'5'  : 'video cued'
						};

					video.addEventListener('onStateChange', function(current, e){
						on[states[current.data]](video);
					});
					return video;
				},
				_setPlayEvent = function(video){
					var currentScriptSeq = -1,
						_findArtcle = function(scriptSeq, video){
							var script = this.model.get('contents')[scriptSeq],
								time   = script.time;

							video.seekTo(time);
						};

					Backbone.pubsub.on('videoTimelineLink:' + self.model.id, function(scriptSeq){
						_findArtcle.call(this, scriptSeq, video);
					}, self);
					Backbone.pubsub.on('videoSync:' + self.model.id, function(currentTime, scriptSeq){
						if(currentScriptSeq != scriptSeq){
							currentScriptSeq = scriptSeq;
							self.scrollToArticle(scriptSeq);
						}
					});
					return video;
				};

			dom.empty();

			loadPlayer = Promise.resolve();

			loadPlayer
			.then(_removeLoadingImage)
			.then(_createPlayer)
			.then(_setStateEvent)
			.then(_setPlayEvent)
			.then(function(){
				// Backbone.pubsub.on('scroll', self.scrollEventBind, self);
			});

		},
		addContents : function(){
			var self = this,
				_addTimeline = function(){
					if(this.timeline){
						this.timeline.unrender();
						this.$('.timeline').remove();
						delete this.timeline;
					}

					this.timeline = new TimelineView({
						id : self.model.get('id'),
						contents : self.model.getContents(),
						duration : self.model.get('duration')
					});

					this.$('.video').after(this.timeline.render());
				},
				_addScripts = function(){
					this.$('.scripts').children(':eq(0)').addClass('on');
				};

			_addTimeline.call(this);
			_addScripts.call(this);
			
		},
		addCoverImage : function(dom, cover){
			var self  = this,
				name  = dom.attr('class');

			if(!cover || !cover.src){
				return;
			}

			if(!this.cover){
				this.cover = {};
			}

			if(this.cover[name]){
				this.cover[name].unrender();
				delete this.cover;
			}

			this.cover[name] = new CoverView({
				el       : dom,
				cover    : cover
			});

			this.cover[name].render();
		}
	});

	return View;
});
