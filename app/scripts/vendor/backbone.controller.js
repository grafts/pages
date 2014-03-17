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
	};

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

	function Edit(context){
		var inputs = [],
			editOption = {
				debug: false,
				stay : false,
				list : ['bold']
			},
			input = function(dom, type){
				inputs.push(
					new Pen(
						_.defaults({
							editor : dom,
						}, editOption)
					)
				);
			};

		this.context = context;
		this._createInputField = function(selector, type){
			var self = this;

			[].forEach.call(context.el.querySelectorAll(selector), function(el){
				input(el, type);
			});
		}
		this._deleteInputFields = function(){
			inputs.forEach(function(field){
				field.destroy();
			});
		}
	}
	Edit.prototype = {
		createInputFields : function(inputs){
			var self = this;
			inputs.forEach(function(input){
				self._createInputField(input.selector, input.type)
			});
			// this.editor = new Pen({
			// 	editor: self.context.el.querySelector(inputs[0].selector), // {DOM Element} [required]
			// 	class: 'pen', // {String} class of the editor,
			// 	debug: false, // {Boolean} false by default
			// 	stay : false,
			// 	list: ['bold', 'italic', 'underline'] // editor menu list
			// });

		},
		deleteInputFields : function(){
			this._deleteInputFields();
			// this.editor.destroy();
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
			if(!this.defaultEvent) return;
			this.context.events = this.defaultEvent;
			this.context.undelegateEvents();
			this.context.delegateEvents();
		}
	}
	_.extend(Backbone.View.prototype, {
		editConfig : {},
		edit : function(){
			var self = this;

			try {
				// 1. check edit auth
				if(!this.getEditAuth()) return;
				// 2. tool class extend
				this.editMode = new Edit(this);
				// 3. class add to el for edit mode look css
				this.$el.addClass('edit');
				// 4. hide unnecessary Dom
				this.$('.uneditable').hide();
				// 5. input area insert & save those to object collection
				this.editMode.createInputFields(self.editConfig.fields);
				// 6. event change for edit mode
				this.editMode.eventShift(self.editConfig.event);
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
			// 2. remove 'edit' class 
			this.$el.removeClass('edit');
			// 3. show hided dom
			this.$('.uneditable').show();
			// 4. remove input area & saved object collection
			this.editMode.deleteInputFields();
			// 5. event rollback
			this.editMode.eventRollback();
			// 6. destroy edit mode object
			delete this.editMode;
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
		}
	});
	
	Controller.extend = Backbone.Model.extend;
	Backbone.Controller = Controller;
	Backbone.pubsub = _.extend({}, Backbone.Events);

	// override backbone model, collection to parse's
	Backbone.Model = Parse.Object;
	Backbone.Collection = Parse.Collection;
	Backbone.Query = Parse.Query;

	return Backbone;
});