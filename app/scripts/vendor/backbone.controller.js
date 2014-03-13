define([
	'jquery',
	'underscore',
	'backboneBase',
	'parse',
	'loading'
], function ($, _, Backbone, Parse, Loading) {
	'use strict';

	var Controller = function(){
		this.views = {};
		this.initialize.apply(this, arguments);
		return 1;
	};

	function Edit(context){
		var inputs = [],
			editOption = {
				debug: false
			},
			input = function(dom, type){
				inputs.push(
					new editor(
						_.defaults({
							element : dom,
							placeholder : type || 'Type your text.'
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
		},
		deleteInputFields : function(){

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
		}
	});

 	_.extend(Controller.prototype, {
		el          : $('div'),
		model       : Backbone.Model,
		collection  : Backbone.Collection,
		view        : Backbone.View,
		history     : [],
		initialize  : function(){},
		run         : function(param){
			var self = this,
				loading = new Loading();

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
				self.el && self.el.show();
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
		pull : function(id){
			var self  = this,
				query = new Backbone.Query(self.model);

			return query.get(id);
		},
		createDummyView : function(id){
			var self = this;

			return new this.view({
				model : (new self.model()).insertDummyData(),
				id    : self.el.attr('class') + '_dummy' + id
			});
		},
		createView : function(param){
			var self = this;

			return new Promise(function(resolve, reject){
				var view;

				try {
					if(self.views[param.id]){
						view = self.views[param.id];
						view.render();
						setTimeout(function(){
							resolve(view);
						}, 1000);
					}
					else if(param.id.match(/^1/)){
						view = self.createDummyView(param.id);
						self.el.append(view.render());
						setTimeout(function(){
							resolve(view);
						}, 1000);
					}
					else {
						self.pull(param.id).then(function(model){
							view = new self.view({
								model : model,
								id    : self.el.attr('class') + '_' + param.id
							});
							self.el.append(view.render());
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
			console.log(this.el.attr('class') + ' ' + this.current + ' view stop');
			if(resourceChanged){
				this.el && this.el.hide();
			}
			if(this.pausedView){
				this.pausedView.$el.removeClass('off');
				this.pausedView.unrender();
				delete this.pausedView;
			}
			this.status = false;
		},
		garbageCollect : function(){
			
		},
		dummyLoading : function(){
			var loading = new Loading();
			loading.render();
			loading.set();
			setTimeout(function(){
				loading.done();
				$('body').animate({scrollTop:0}, 100, function() { 

				});
			}, 300);
		}
 	});

	

	Controller.extend = Backbone.Model.extend;
	Backbone.Controller = Controller;
	Backbone.pubsub = _.extend({}, Backbone.Events);

	// override backbone mode, collection to parse's
	Backbone.Model = Parse.Object;
	Backbone.Collection = Parse.Collection;
	Backbone.Query = Parse.Query;

	return Backbone;
});