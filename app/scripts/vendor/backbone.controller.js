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
		initialize  : function(){},
		run         : function(param){
			var self = this;

			self.dummyLoading();

			return self.createView(param).then(function(view){
				self.views[param.id] = view;
				self.el.append(view.render());
				self.el && self.el.show();
				self.garbageCollect();
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
				View, edit;

			if((param.action && param.action == 'update') || (param.id && param.id == 'create')){
				View = this.editView;
				edit = 'edit_';
			}
			else {
				View = this.readView;
				edit = '';
			}

			return new Promise(function(resolve, reject){
				if(self.views[param.id]){
					resolve(self.views[param.id]);
				}
				else if(param.id == 1){
					resolve(self.createDummyView(View));
				}
				else {
					self.pull(param.id).then(function(model){
						resolve(new View({
							model : model,
							id    : self.el.attr('class') + '_' + edit + param.id
						}));
					});
				}
			});

		},
		stop : function(param){
			console.log(this.el.attr('class') + ' view stop');
			this.el && this.el.hide();
			for(var current in this.views){
				this.views[current].unrender();
			}
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