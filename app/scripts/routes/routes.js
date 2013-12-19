define([
	'jquery',
	'underscore',
	'backbone',
	'controller/video'
], function ($, _, Backbone, VideoController) {

	var Router          = Backbone.Router.extend({
		
		routes: {
			
			''              : '_router',
			'*actions'      : '_router'
		},

		controller : {
			video : new VideoController()
		},

		initialize : function(){

			var self = this;

			_.bindAll(this);

		},

		_router : function(id){
			var _path = Backbone.history.fragment.split('/'),
				_resource = _path[0],
				_search = deParam(Backbone.history.location.search);

			if(_resource == ""){
				_resource = 'video';
			}

			if(!this.controller[_resource]){
				console.log('wrong url');
				return;
			}

			this.controller[_resource].run({ 
				path : _path, 
				search : _search,
				id : id
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
