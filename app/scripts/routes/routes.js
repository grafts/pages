define([
	'jquery',
	'underscore',
	'backbone',
	'controller/video',
	'controller/user',
], function ($, _, Backbone, VideoController, UserController) {

	var Router          = Backbone.Router.extend({
		
		routes: {
			
			''                       : '_router',
			':resource'              : '_router',
			':resource/:id'          : '_router',
			':resource/:id/:action'  : '_router',
			'*actions'               : '_router'
		},

		controller : {
			video : new VideoController(),
			user  : new UserController()
		},

		initialize : function(){

			var self = this;

			_.bindAll(this);

		},

		_router : function(resource, id, action){
			var search = deParam(Backbone.history.location.search);

			if(resource == ""){
				resource = 'video';
			}

			if(!this.controller[resource]){
				console.log('wrong url');
				return;
			}

			this.controller[resource].run({ 
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
