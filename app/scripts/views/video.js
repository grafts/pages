/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	'use strict';

	var VideoView = Backbone.View.extend({
		// el: '.video-item',
		tagName: 'div',
		template: JST['app/scripts/templates/video.hbs'],
		events: {
			'click a' : 'link'
		},
		initialize: function(id){
			var self = this;

			_.bindAll(this);

			id && (this.id = id);
			this.el.setAttribute('class', 'video-item');
			this.$el.append(this.template(this.model.toJSON()));
			this.playerPositionUpdate = _.debounce(function(){
				if($(window).scrollTop() > 364){
					self.$('.contents').addClass('fix');
				} else {
					self.$('.contents').removeClass('fix');
				}
			}, 1);

			this.model.on('change:coverImage', this.addCover);
			this.model.on('change:video', this.addPlayer);
			this.model.on('change:contents', this.addContents);

			//
			//
			// for prototype, dummy data input
			this.model.set({
				id : 1,
				title : '리신공략, 각 라인별 일반적인 갱킹방법',
				subtitle : '갱킹이 리신이며 리신이 갱킹이다!',
				coverImage : { 
					src : "/images/cover_background.png" 
				},
				video : {
					id : '48auKg6es8E',
				},
				contents : [
					{
						time : 40,
						script : {
							title : '룬 설정 방법',
							text  : '게임이 중반쯤되고 미드 라이너도 와드를 박고 탑라이너도 올라오는 부시에 와드를 박으면 갱킹이 어려워집니다. 이럴때 시도해 볼만한 갱킹은 바론뒤쪽에 와드를 박은후 를 타고 들어가 삼거리를 통해 가는 것입니다. 물론 미드라인'
						},
						comments : [
							{
								id : 1,
								author : 1,
								comment : 'wefwefwef'
							}
						]
					},
					{time : 40, script : { title : '룬 설정 방법', text  : '게임이 중반쯤되고 미드 라이너도 와드를 박고 탑라이너도 올라오는 부시에 와드를 박으면 갱킹이 어려워집니다. 이럴때 시도해 볼만한 갱킹은 바론뒤쪽에 와드를 박은후 를 타고 들어가 삼거리를 통해 가는 것입니다. 물론 미드라인'}, comments : [{id : 1, author : 1, comment : 'wefwefwef'} ] },
					{time : 40, script : { title : '룬 설정 방법', text  : '게임이 중반쯤되고 미드 라이너도 와드를 박고 탑라이너도 올라오는 부시에 와드를 박으면 갱킹이 어려워집니다. 이럴때 시도해 볼만한 갱킹은 바론뒤쪽에 와드를 박은후 를 타고 들어가 삼거리를 통해 가는 것입니다. 물론 미드라인'}, comments : [{id : 1, author : 1, comment : 'wefwefwef'} ] }, 
					{time : 40, script : { title : '룬 설정 방법', text  : '게임이 중반쯤되고 미드 라이너도 와드를 박고 탑라이너도 올라오는 부시에 와드를 박으면 갱킹이 어려워집니다. 이럴때 시도해 볼만한 갱킹은 바론뒤쪽에 와드를 박은후 를 타고 들어가 삼거리를 통해 가는 것입니다. 물론 미드라인'}, comments : [{id : 1, author : 1, comment : 'wefwefwef'} ] } 
				]
			});
			// for prototype, dummy data input
			//
			//

		},
		render: function(){
			var self  = this;
			Backbone.pubsub.on('scroll', self.playerPositionUpdate, this);
			console.log('video view render');
			return this.$el;
		},
		unrender: function(){
			var self = this;
			Backbone.pubsub.off('scroll', self.playerPositionUpdate, this);
			this.undelegateEvents();
			this.$el.hide();
		},
		link : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
		},
		addPlayer : function(){
			var self = this,
				dom = self.$('.video'),
				loadYoutubeLib;

			var on = {
				'unstarted' : function(){
					console.log(arguments);
				},
				'ended' : function(){
					console.log(arguments);
				},
				'playing' : function(){
					console.log(arguments);
				},
				'paused' : function(){
					console.log(arguments);
				},
				'buffering' : function(){
					console.log(arguments);
				},
				'video cued' : function(){
					console.log(arguments);
				}
			}

			dom.empty();

			loadYoutubeLib = new Promise(function(resolve, reject){
				require(['youtube'], resolve);
			});

			loadYoutubeLib
			.then(createPlayer)
			.then(setEvent);

			function createPlayer(YT){
				var video = new YT.Player(dom[0], {
					videoId : '48auKg6es8E'
				});
				return video;
			}
			function setEvent(video){
				// unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5).
				var status = {
						'-1' : 'unstarted',
						'0'  : 'ended',
						'1'  : 'playing',
						'2'  : 'paused',
						'3'  : 'buffering',
						'5'  : 'video cued'
					};

				video.addEventListener('onStateChange', function(current, e){
					console.log(arguments);
					on[status[current.data]]();
				});
			}
		},
		addPointers : function(){
			var self = this,
				pointers = this.model.get('contents');

			pointers = pointers.map(function(val, n){
				return {
					time : val.time,
					title : val.script.title,
					position : val.time
				}
			});
		},
		addCover : function(){
			var self = this,
				cover = this.model.get('coverImage'),
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
