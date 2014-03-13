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

	var viewProto = {
		read : function(){
		},
		edit : function(){
		}
	}
	_.extend(Backbone.View.prototype, viewProto);

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