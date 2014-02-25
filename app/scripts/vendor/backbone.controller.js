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
		createDummyView : function(View){
			var self = this;

			return new View({
				model : new self.model(),
				id    : self.el.attr('class') + '_dummy'
			});
		},
		createView : function(param){
			var self = this,
				View, edit, view;

			if((param.action && param.action == 'update') || (param.id && param.id == 'create')){
				View = this.editView;
				edit = 'edit_';
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
					else if(param.id == 1){
						view = self.createDummyView(View);
						self.el.append(view.render());
						setTimeout(function(){
							resolve(view);
						}, 1000);
					}
					else {
						self.pull(param.id).then(function(model){
							view = new View({
								model : model,
								id    : self.el.attr('class') + '_' + edit + param.id
							});
							self.el.append(view.render())
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
		prepareStop : function(){
			this.views[this.current].$el.addClass('off');
		},
		stop : function(param){
			if(!this.status){
				return;
			}
			console.log(this.el.attr('class') + ' view stop');
			this.el && this.el.hide();
			this.views[this.current].$el.removeClass('off');
			this.views[this.history[this.history.length-1]].unrender();
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