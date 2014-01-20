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

			this.model.on('change', this.setContents);


			// for prototype, dummy data input
			this.model.set({
				coverImage : { 
					src : "/images/cover_background.png" 
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
		setContents : function(){
			this.addCover();
			this.addPointers();
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
				cover = this.model.get('coverImage');

			if(!cover){
				return;
			}

			var img = new Image();
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
