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

 	_.extend(Controller.prototype, {
		el          : $('div'),
		model       : Backbone.Model,
		collection  : Backbone.Collection,
		readView    : Backbone.View,
		editView    : Backbone.View,
		history     : [],
		initialize  : function(){},
		run         : function(param){
			var self = this,
				loading = new Loading();

			this.status = true;

			loading.render();
			loading.set();

			return self.createView(param).then(function(view){
				self.views[param.id] = view;
				self.history.push(param.id);
				self.current = param.id;
				self.el && self.el.show();
				self.garbageCollect();
				loading.done();
				$('body').animate({scrollTop:0}, 100);
				return view;
			});

		},
		pull : function(id){
			var self  = this,
				query = new Backbone.Query(self.model);

			return query.get(id);
		},
		createDummyView : function(View, id){
			var self = this;

			return new View({
				model : (new self.model()).insertDummyData(),
				id    : self.el.attr('class') + '_dummy' + id
			});
		},
		createView : function(param){
			var self = this,
				View, edit, view;

			if((param.action && param.action == 'update') || (param.id && param.id == 'create')){
				View = this.editView;
				edit = '_edit';
				param.id += edit;
			}
			else {
				View = this.readView;
				edit = '';
			}

			return new Promise(function(resolve, reject){
				try {
					if(self.views[param.id]){
						view = self.views[param.id];
						view.render();
						setTimeout(function(){
							resolve(view);
						}, 1000);
					}
					else if(param.id.match(/^1/)){
						view = self.createDummyView(View, param.id);
						self.el.append(view.render());
						setTimeout(function(){
							resolve(view);
						}, 1000);
					}
					else {
						self.pull(param.id).then(function(model){
							view = new View({
								model : model,
								id    : self.el.attr('class') + '_' + param.id + edit
							});
							self.el.append(view.render());
							resolve(view);
						});
					}
				}
				catch(err){
					console.log(err);
					reject(err);
				}
			});
		},
		pause : function(resourceChanged){
			var self = this;
			return new Promise(function(resolve, reject){
				self.pausedView = self.views[self.current];
				self.pausedView.$el.addClass('off');
				resolve();
			});
		},
		stop : function(resourceChanged){
			console.log(this.el.attr('class') + ' ' + this.current + ' view stop');
			if(resourceChanged){
				this.el && this.el.hide();
			}
			this.pausedView.$el.removeClass('off');
			this.pausedView.unrender();
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