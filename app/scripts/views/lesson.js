define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	'use strict';

	var View = Backbone.View.extend({
		tagName: 'div',
		template: JST['app/scripts/templates/lesson.hbs'],
		events: {
			'click a' : 'link'
		},
		initialize: function(id){
			var self = this;
			id && (this.id = id);
			this.el.setAttribute('class', 'lesson-item');
			this.$el.append(this.template(this.model.toJSON()));
		},
		render: function(){
			console.log('lesson view render');
			// for prototype, dummy data input
			this.model.set('coverImage', {
				src : "/images/light_cover_background.png"
			});
			// for prototype, dummy data input

			this.addCover();

			return this.$el;
		},
		unrender: function(){
			this.undelegateEvents();
			this.$el.hide();
		},
		link : function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate(e.target.pathname || e.target.parentNode.pathname, { trigger : true });
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

	return View;
});
