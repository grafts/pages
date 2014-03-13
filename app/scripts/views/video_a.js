/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',

	'youtube!',
	'views/components/video_player_timeline'
], function ($, _, Backbone, JST, YT, TimelineView) {
	'use strict';

	var VideoView = Backbone.View.extend({
		// el: '.video-item',
		tagName: 'div',
		template: JST['app/scripts/templates/video_a.hbs'],
		events: {
			'click a' : 'link',
			'click .comments-link' : 'commentToggle',
			'click .reply' : 'replyFormToggle',
			'click .anker' : 'gotoClickedScript',
			'click .clock' : 'gotoClickedScript'
		},
		initialize: function(id){
			var self = this,
				data = this.model.toJSON();


			_.bindAll(this);

			id && (this.id = id);
			this.el.setAttribute('class', 'video_a-item');

			data.contents = this.model.getContents();
			this.$el.append(this.template(data));

			this.model.on('change:cover', this.addCover);
			this.model.on('change:video', this.addPlayer);
			this.model.on('change:contents', this.addContents);

			this.addCover();
			this.addPlayer();
			this.addContents();

			this.portraitLayout = true;

		},
		render: function(){
			var self  = this,
				startScroll = true,
				scrollStoped = true,
				layoutChangeHeight = 640,
				_excuteAutoScroll = function(currentPosition){
					var windowHeight = $(window).height();
					if(!scrollStoped){
						return;
					}
					if(startScroll && currentPosition > (windowHeight*0.2)){
						scrollStoped = false;
						$('html').animate({
							scrollTop : windowHeight
						},
						200,
						function(){
							startScroll = false;
							scrollStoped = true;
						});
					}
					else if(!startScroll && currentPosition < (windowHeight*0.8)){
						scrollStoped = false;
						$('html').animate({
							scrollTop : 0
						},
						200,
						function(){
							startScroll = true;
							scrollStoped = true;
						});
					}
				},
				_setPlayer = function(currentPosition){
					var windowHeight = $(window).height(),
						maxHeight = 860,
						playerOffset;

					if(windowHeight > maxHeight){
						playerOffset = maxHeight;
					} else {
						playerOffset = windowHeight;
					}

					// scroll x 
					if(currentPosition >= (playerOffset+64)){
						self.$('.contents').addClass('fix');
						self.$('.head').addClass('off');
					} else {
						self.$('.contents').removeClass('fix');
						self.$('.head').removeClass('off');
					}

					//scroll y
					if(windowHeight > 640 && window.pageXOffset >= 0){
						$('.player').css('margin-left', -window.pageXOffset + 'px');
					}
				},
				_setLayout = _.debounce(function(){
					if($(window).height() > layoutChangeHeight){
						self.portraitLayout = true;
						self.$el.removeClass('landscape');
					} else {
						self.portraitLayout = false;
						self.$el.addClass('landscape');
					}
				}, 100);
			

			this.scrollEventBind = _.debounce(function(){
				var currentPosition = $(window).scrollTop();

				_excuteAutoScroll(currentPosition);
				_setPlayer(currentPosition);

			}, 1);

			Backbone.pubsub.on('resize', _setLayout, this);

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
			$(e.currentTarget.nextElementSibling).toggle();
			this.$('.contents').toggleClass('comments-on');
		},
		replyFormToggle : function(e){
			$(e.currentTarget.nextElementSibling).toggle();
		},
		gotoClickedScript : function(e){
			var current = $(e.currentTarget.parentNode).data().seq;
			Backbone.pubsub.trigger('videoTimelineLink:' + this.model.id, current);
		},
		scrollToArticle : function(scriptSeq){
			var item = this.$('.timeline-contents').find('.item:eq('+scriptSeq+')'),
				playerHeight = 0;

			if(!this.$el.hasClass('landscape')){
				playerHeight = self.$('.player').height();
			}

			$('html').animate({
				scrollTop : item.offset().top - playerHeight - 32
			},
			200,
			function(){
				
			});
		},
		addPlayer : function(){
			var self = this,
				dom = self.$('.video'),
				loadYoutubeLib,
				interval = function(video){
					Backbone.pubsub.trigger('videoSync:' + self.model.id, video.getCurrentTime());
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
			}

			dom.empty();

			loadYoutubeLib = Promise.resolve();

			loadYoutubeLib
			.then(createPlayer)
			.then(setStateEvent)
			.then(setPlayEvent)
			.then(function(){
				Backbone.pubsub.on('scroll', self.scrollEventBind, self);
			});

			function createPlayer(){
				var video = new YT.Player(dom[0], {
					videoId : '48auKg6es8E'
				});
				return video;
			}
			function setStateEvent(video){
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
			}
			function setPlayEvent(video){
				var currentScriptSeq = -1,
					_findArtcle = function(scriptSeq, video){
						var script = this.model.get('contents')[scriptSeq],
							time   = script.time;

						video.seekTo(time);
					};

				Backbone.pubsub.on('videoTimelineLink:' + self.model.id, function(scriptSeq){
					_findArtcle.call(this, scriptSeq, video);
				}, self);
					
				Backbone.pubsub.on('videoSync:' + self.model.id, function(currentTime){
					var contents = self.model.get('contents'),
						scriptSeq = _.findIndex(contents, function(content) {
							return content.time > currentTime;
						});

					if(scriptSeq < 0){
						scriptSeq = contents.length - 1;
					} else if(scriptSeq != 0){
						scriptSeq -= 1;
					}

					if(currentScriptSeq != scriptSeq){
						self.scrollToArticle(scriptSeq);
						currentScriptSeq = scriptSeq;
					}
				}, self);

				return video;
			}
		},
		addContents : function(){
			var self = this;
			
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
		addCover : function(){
			var self = this,
				cover = this.model.get('cover'),
				img;

			if(!cover){
				return;
			}

			this.$('.cover')
			.removeClass('with-cover').removeClass('with-dark-cover').removeClass('on')
			.removeAttr('background-image')
			.empty();

			img = new Image();
			img.src = cover.src;
			img.onload = _addCover;

			function _addCover(){
				var className = 'with-cover';

				if(is_dark(getAverageRGB(this))){
					className = 'with-dark-cover';
				}

				self
				.$('.cover').css('background-image', 'url(' + this.src + ')').addClass('on')
				.end().addClass(className);
			}

			function is_dark(averageRGB){
				var max = 255 * 3 / 2,
					avg = _.values(averageRGB).reduce(function(previousValue, currentValue){
						return previousValue + currentValue;
					});

					return (max > avg);
			}

			function getAverageRGB(imgEl) {

				var blockSize = 5, // only visit every 5 pixels
					defaultRGB = {r:255,g:255,b:255}, // for non-supporting envs
					canvas = document.createElement('canvas'),
					context = canvas.getContext && canvas.getContext('2d'),
					data, width, height,
					i = -4,
					length,
					rgb = {r:0,g:0,b:0},
					count = 0;

				if (!context) {
					return defaultRGB;
				}

				height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
				width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

				context.drawImage(imgEl, 0, 0);

				try {
					data = context.getImageData(0, 0, width, height);
				} catch(e) {
					/* security error, img on diff domain */
					return defaultRGB;
				}

				length = data.data.length;

				while ( (i += blockSize * 4) < length ) {
					++count;
					rgb.r += data.data[i];
					rgb.g += data.data[i+1];
					rgb.b += data.data[i+2];
				}

				// ~~ used to floor values
				rgb.r = ~~(rgb.r/count);
				rgb.g = ~~(rgb.g/count);
				rgb.b = ~~(rgb.b/count);

				return rgb;

			}
		}

	});

	return VideoView;
});
