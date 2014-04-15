define(function(require){
	var $                     = require('jquery'),
		_                     = require('underscore'),
		Backbone              = require('backbone'),
		UtilsController       = require('controller/utils'),
		IntroController       = require('controller/intro'),
		DiscoveriesController = require('views/discoveries'),
		VideoController       = require('controller/video'),
		Video_aController     = require('controller/video_a'),
		LiveController        = require('controller/live'),
		UserController        = require('controller/user'),
		ClassController       = require('controller/class'),
		LessonController      = require('controller/lesson'),
		SearchController      = require('controller/search');


	var Router          = Backbone.Router.extend({
		routes: {
			
			''                       : '_router',
			':resource'              : '_router',
			':resource/:id'          : '_router',
			':resource/:id/:action'  : '_router',
			'*actions'               : '_router'
		},

		controllers : {
			intro       : new IntroController(),
			video       : new VideoController(),
			video_a     : new Video_aController(),
			live        : new LiveController(),
			user        : new UserController(),
			class       : new ClassController(),
			lesson      : new LessonController(),
			search      : new SearchController(),
			discoveries : new DiscoveriesController()
		},

		initialize : function(){

			var self = this;
			
			this.util = new UtilsController();

			_.bindAll(this);

			require(['font!custom,families:[NanumBarunGothic, Nanum Myeongjo],urls:[/styles/fonts/NanumBarunGothic.css, //fonts.googleapis.com/earlyaccess/nanummyeongjo.css]'], function(){
				$('.serif').css('font-family', 'Nanum Myeongjo');
				$('.sans-serif').css('font-family', 'NanumBarunGothic');
			});
		},

		_router : function(resource, id, action){
			var self = this,
				search = deParam(Backbone.history.location.search),
				param = {
					id       : id,
					resource : resource,
					action   : action,
					search   : search
				},
				resourceChanged = (!!this.current && this.current != resource),
				pausedController;

			if(!resource || resource == ""){
				if(Backbone.User.current()){
					Backbone.history.navigate('/discoveries', { trigger : true });
					return;
				}
				resource = 'intro';
			}

			if(!this.controllers[resource]){
				console.log('wrong url');
				return;
			}

			if(this.current){
				pausedController = this.controllers[this.current];
				pausedController.pause(resourceChanged, id);
			}

			this.util.auth().then(function(user){
				return self.controllers[resource].run(param);
			})
			.then(function(currentView){
				pausedController && pausedController.stop(resourceChanged);
				self.current = resource;
			});
		}
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
	
	return Router;

});
