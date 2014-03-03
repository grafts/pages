/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'handlebars',

	'youtube!',
	'views/components/cover',
	'views/components/video_player_timeline',

	'collections/video_contents',

	'editor'
], function ($, _, Backbone, JST, Handlebars, YT, CoverView, TimelineView, Contents, editor) {
	'use strict';

	var View = Backbone.View.extend({
		// el: '.video-item',
		tagName: 'div',
		template : JST['app/scripts/templates/video.hbs'],
		events: {
			'click a'                                : 'link',
			'click .scripts .item.on .comments-link' : 'commentToggle',
			'click .reply'                           : 'replyFormToggle',
			'click .clock'                           : 'gotoClickedScript',
			'click .anker'                           : 'gotoClickedScript',
			'click .script'                          : 'gotoClickedScript'
		},
		initialize: function(param){
			var self = this,
				data = this.model.toJSON();

			_.bindAll(this);

			this.el.setAttribute('class', 'video-item');

			data.contents = this.model.getContents();
			this.$el.append(this.template(data));

			this.addCoverImage(this.$('.head'), this.model.get('coverImage'));
			this.addPlayer();
			// this.addContents();
			// this.addCoverImage(this.$('.relate'), this.model.get('relate').coverImage);

			this.contents = new Contents();
			this.listenTo(this.contents, 'reset', this.addContents);
			this.contents.add(this.model.get('contents'));
			this.contents.sort();
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
						},
						_unrender = function(type, video){
							if(type){
								video.destroy();
							}
							else {
								video.stopVideo();
							}
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
					Backbone.pubsub.on('videoUnrender:' + self.model.id, function(type){
						_unrender.call(this, type, video);
					}, self);
					Backbone.pubsub.on('getVideoCurrentTime:' + self.model.id, function(callback){
						callback(video.getCurrentTime());
					}, self);
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
						id : self.model.id,
						contents : self.model.getContents(),
						duration : self.model.get('video').duration
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

			if(!cover || !cover._url){
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
		},
		edit : function(){
			var self = this,
				unnecessaryDom = this.$('.head .author, .contents .widget, .contents .comments-link, .relate');

			try {
				// 1. check edit auth
				if(!this.getEditAuth()) return;
				// 2. tool class extend
				this.editMode = new Edit(this);
				// 3. class add to el for edit mode look css
				this.$el.addClass('edit');
				// 4. hide unnecessary Dom
				unnecessaryDom.hide();
				// 5. add tools for edit submit or cancel
				this.editMode.addTool();
				// 6. input area insert & save those to object collection
				this.editMode.input(this.el.querySelector('.head .title'), 'title');
				this.editMode.input(this.el.querySelector('.head .subtitle'), 'subtitle');
				this.editMode.input(this.el.querySelectorAll('.script'), 'script');
				// 7. event change for edit mode
				this.editMode.eventShift({
					'click a'                       : 'link',
					'click .script-delete'          : 'deleteScript',
					'click .script-add'             : 'addScript',
					'click .cover-manage > .upload' : 'coverUpload',
					'click .cover-manage > .delete' : 'coverDelete',
					'click a.edit-tool-save'        : 'save',
					'click a.edit-tool-publish'     : 'publish'
				});
				// 8. 
			}
			catch(err){
				console.log(err);
			}
		},
		read : function(){
			// 1. check current view mode
			if(!this.editMode){
				return;
			}
			// 2. destroy edit mode object
			delete this.editMode;
			// 3. remove 'edit' class 
			this.$el.removeClass('edit');
			// 4. show hided dom
			this.$('.head .author, .contents .widget, .contents .comments-link, .relate').show();
			// 5. remove tools
			this.editMode.deleteTools();
			// 6. remove input area & saved object collection
			this.editMode.deleteInput();
			// 7. event rollback
			this.editMode.eventRollback();
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
		test : function(){
			console.log('test arg = ');
			console.log(arguments);
		}
	});

	return View;
});


function Edit(context){
	var inputs = [];

	this.context = context;
	this.editOption = {
		debug: true
	};
	this._input = function(dom, type){
		inputs.push(
			new editor(
				_.defaults({
					element : dom,
					placeholder : type || 'Type your text.'
				}, this.editOption)
			)
		);
	};
}
Edit.prototype = {
	addTool : function(){

	},
	deleteTools : function(){

	},
	input : function(dom, type){
		var self = this;

		if(!dom.length){
			this._input(dom, type);
		}
		else {
			[].forEach.call(dom, function(el){
				self._input(el, type);
			});
		}
	},
	deleteInput : function(){

	},
	save : function(){
		return new Promise(function(resolve, reject){
			resolve();
		});
	},
	eventShift : function(events){
		this.defaultEvent = this.context.events;
		this.context.events = events;
		this.context.undelegateEvents();
		this.context.delegateEvents();
	},
	eventRollback : function(){

	}
}