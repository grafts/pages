define([
	'jquery',
	'underscore',
	'backbone',
	'controller/utils',
	'controller/intro',
	'controller/video',
	'controller/user',
	'controller/class',
	'controller/search',
], function ($, _, Backbone, UtilsController, IntroController, VideoController, UserController, ClassController, SearchController) {

	var Router          = Backbone.Router.extend({
		
		routes: {
			
			''                       : '_router',
			':resource'              : '_router',
			':resource/:id'          : '_router',
			':resource/:id/:action'  : '_router',
			'*actions'               : '_router'
		},

		controllers : {
			intro  : new IntroController(),
			video  : new VideoController(),
			user   : new UserController(),
			class  : new ClassController(),
			search : new SearchController()
		},

		initialize : function(){

			var self = this;

			_.bindAll(this);

			Backbone.pubsub = _.extend({}, Backbone.Events);
			(new UtilsController).run();
		},

		_router : function(resource, id, action){
			var search = deParam(Backbone.history.location.search);

			if(!resource || resource == ""){
				resource = 'intro';
			}

			if(!this.controllers[resource]){
				console.log('wrong url');
				return;
			}

			for(controller in this.controllers){
				this.controllers[controller] && this.controllers[controller].stop();
			}

			this.controllers[resource].run({ 
				id       : id,
				resource : resource,
				action   : action,
				search   : search
			});
			
			function deParam(qs){
				if (qs == "") return {};
				var param = {};
				qs.match(/^\?/) && (function(){ qs = qs.substr(1); })();
				qs = qs.replace('?').split('&');
				for (var i = 0; i < qs.length; ++i){
					var string = qs[i].split('=');
					if (string.length != 2) continue;
					param[string[0]] = decodeURIComponent(string[1].replace(/\+/g, " "));
				}
				return param;
			}
		}

	});

	return Router;

});
