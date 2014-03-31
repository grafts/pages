define([
	'jquery',
	'underscore',
	'backboneBase',
	'parse',
	'loading',
	'pen'
], function ($, _, Backbone, Parse, Loading, Pen) {
	'use strict';

	var Controller = function(){
			this.views   = {};
			this.history = [];
			this.$el     = $(this.el);
			this.initialize.apply(this, arguments);
			return null;
		},
		Page      = Backbone.View.extend(),
		Component = Backbone.View.extend();

 	_.extend(Controller.prototype, {
 		initialize  : function(){},
 		options     : {
 			query   : {
 				include : []
 			}
 		},
		run         : function(param){
			var self        = this,
				loading     = new Loading();

			this.status = true;

			loading.render();
			loading.set();

			return self.createView(param).then(function(view){
				if((param.action && param.action == 'update') || (param.id && param.id == 'create')){
					view.edit();
				} else {
					view.read();
				}
				self.views[param.id] = view;
				self.history.push(param.id);
				self.current = param.id;
				self.$el && self.$el.show();
				self.garbageCollect();
				loading.done();
				$('body').animate({scrollTop:0}, 100);

				return view;
			})
			.then(null, function(err){
				//404
				if(err.code == 101){
					console.log(404);
				}
				console.log(err);
				loading.done();
				return err;
			});

		},
		createView : function(param){
			var self = this,
				_pull = function(id){
					var query = new Backbone.Query(self.model);
					query.include(self.options.query.include);
					return query.get(id);
				},
				_createDummyView = function(id){
					return new self.view({
						model : (new self.model()).insertDummyData(),
						id    : self.$el.attr('class') + '_dummy_' + id
					});
				};

			return new Promise(function(resolve, reject){
				var view;

				try {
					if(self.views[param.id]){
						view = self.views[param.id];
						view.render();
						resolve(view);
						return;
					}
					
					if(param.id == '1' || param.id == 'dummy'){
						view = _createDummyView(param.id);
						self.$el.append(view.render());
						setTimeout(function(){
							resolve(view);
						}, 1000);
					}
					else {
						_pull(param.id).then(function(model){
							model._silent = {};
							model.changed = {};
							view = new self.view({
								model : model,
								id    : self.$el.attr('class') + '_' + param.id
							});
							self.$el.append(view.render());
							resolve(view);
						})
						.then(null, function(err){
							reject(err);
						});
					}
				}
				catch(err){
					console.log(err);
					reject(err);
				}
			});
		},
		pause : function(resourceChanged, changedId){
			var self = this;
			return new Promise(function(resolve, reject){
				if(resourceChanged || (!resourceChanged && changedId != self.current)){
					self.pausedView = self.views[self.current];
					self.pausedView.$el.addClass('off');
				}
				resolve();
			});
		},
		stop : function(resourceChanged){
			console.log(this.$el.attr('class') + ' ' + this.current + ' view stop');
			if(resourceChanged){
				this.$el && this.$el.hide();
			}
			if(this.pausedView){
				this.pausedView.$el.removeClass('off');
				this.pausedView.unrender();
				delete this.pausedView;
			}
			this.status = false;
		},
		garbageCollect : function(){
			
		}
 	});

	_.extend(Page.prototype, {
		setEditModeEvents : function(){
			if(!this.editModeEvents) return false;
			this.defaultEvents = this.events;
			this.undelegateEvents();
			this.events = this.editModeEvents;
			this.delegateEvents();
			return true;
		},
		setDefaultEvents : function(){
			if(!this.defaultEvents) return false;
			this.undelegateEvents();
			this.events = this.defaultEvents;
			this.delegateEvents();
			delete this.defaultEvent;
			return true;
		},
		editOption : {
			debug: false,
			stay : false,
			list : ['bold', 'italic']
		},
		addEditField : function(dom, id){
			var self = this,
				field = new Pen(
					_.defaults({
						editor : dom,
					}, this.editOption)
				);
			field.id = dom.dataset.attr;
			this._editFields.push(field);
		},
		edit : function(){
			var self = this;
			if(this.editMode) return;

			this.editMode = true;
			this.$el.addClass('edit');
			if(this.editFields){
				this._editFields = [];
				this.editFields.forEach(function(selector){
					self.addEditField(self.el.querySelector(selector));
				});
			}
			this.components && Object.keys(this.components).forEach(function(key){
				self.components[key].edit();
			});
			this.setEditModeEvents();
		},
		read : function(){
			var self = this;

			if(!this.editMode) return;
			this.editMode = null;
			this.$el.removeClass('edit');
			this._editFields && this._editFields.forEach(function(field){
				field.destroy();
			});
			this.components && Object.keys(this.components).forEach(function(key){
				self.components[key].read();
			});
			this.setDefaultEvents();
		},
		updateCover : function(){
			if(this.model.get('cover')){
				this.addCover();
			}
			else {
				this.deleteCover();
			}
		},
		addCover : function(dom, cover){
			var self     = this,
				dom      = dom || this.$('.head'),
				cover    = cover || this.model.get('cover'),
				coverDom = $('<div class="cover"></div>'),
				img, _addCover, _is_dark, _getAverageRGB;

			if(!cover || !cover._url){
				return;
			}

			_addCover = function(){
				var className = 'with-cover';

				if(_is_dark(_getAverageRGB(this))){
					className = 'with-dark-cover';
				}

				coverDom.css('background-image', 'url(' + cover._url + ')').addClass('on');
				dom.addClass(className);
			};
			_is_dark = function(averageRGB){
				var max = 255 * 3 / 2,
					avg = _.values(averageRGB).reduce(function(previousValue, currentValue){
						return previousValue + currentValue;
					});

					return (max > avg);
			};
			_getAverageRGB = function(imgEl) {

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
			};

			img             = new Image();
			img.onload      = _addCover;
			img.crossOrigin = "anonymous";
			img.src         = cover._url;

			dom
			.prepend(coverDom)
			.find('.edit-tool[data-edit="cover"]')
			.children().hide().end()
			.children('.delete').show();
		},
		deleteCover : function(){
			this.$('.head')
			.removeClass('with-cover').removeClass('with-dark-cover')
			.find('.cover').remove().end()
			.find('.edit-tool[data-edit="cover"]').children().hide().end()
			.children('.upload').show();
		},
		test : function(){
			console.log('test arg = ');
			console.log(arguments);
		}
	});
	_.extend(Component.prototype, {
		read : function(){
			if(!this.editFields) return;
			this.editFields.forEach(function(field){
				field.destroy();
			});
			delete this.editFields;
		},
		edit : function(){
			var self = this;

			if(this.editFields) return;
			this.editFields = [];
			[].forEach.call(this.$('.editable'), function(dom){
				self.addEditField(dom);
			});
		},
		editOption : {
			debug: false,
			stay : false,
			list : ['bold', 'italic']
		},
		addEditField : function(dom){
			var self = this,
				field = new Pen(
					_.defaults({
						editor : dom,
					}, this.editOption)
				);
			if(dom.id) field.id = dom.dataset.id;
			this.editFields.push(field);
		},
		test : function(){
			console.log('test arg = ');
			console.log(arguments);
		}
	});

	Controller.extend   = Backbone.Model.extend;
	Backbone.Controller = Controller;
	Backbone.pubsub     = _.extend({}, Backbone.Events);
	Backbone.Model      = Parse.Object;
	Backbone.Collection = Parse.Collection;
	Backbone.Query      = Parse.Query;
	Backbone.File       = Parse.File;
	Backbone.Page       = Page;
	Backbone.Component  = Component;

	return Backbone;
});