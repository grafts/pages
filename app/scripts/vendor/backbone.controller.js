define([
	'jquery',
	'underscore',
	'backboneBase',
	'loading'
], function ($, _, Backbone, Loading) {
	'use strict';

	var Controller = function(){
		this.views = {};
		this.initialize.apply(this, arguments);
		return 1;
	};

 	_.extend(Controller.prototype, {
		el          : $('div'),
		model       : Backbone.Model,
		collections : Backbone.Collection,
		readView    : Backbone.View,
		editView    : Backbone.View,
		initialize  : function(){},
		run         : function(param){

			this.views[param.id] = this.createView(param);
			this.el.append(this.views[param.id].render());
			this.el && this.el.show();

			this.dummyLoading();
			this.garbageCollect();

		},
		createView : function(param){
			var View, edit;

			if((param.action && param.action == 'update') || (param.id && param.id == 'create')){
				View = this.editView;
				edit = 'edit_';
			}
			else {
				View = this.readView;
				edit = '';
			}

			if(this.views[param.id]){
				return this.views[param.id];
			}
			else {
				return new View({
					model : new this.model({
						id : param.id
					}),
					id    : this.el.attr('class') + '_' + edit + param.id
				});
			}
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

	return Backbone;
});