define([
	'jquery',
	'underscore',
	'backbone',
	'controller/utils',
	'controller/intro',
	'controller/video',
	'controller/video_a',
	'controller/live',
	'controller/user',
	'controller/class',
	'controller/lesson',
	'controller/search',
], function ($, _, Backbone, UtilsController, IntroController, VideoController, Video_aController, LiveController, UserController, ClassController, LessonController, SearchController) {

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
			video_a: new Video_aController(),
			live   : new LiveController(),
			user   : new UserController(),
			class  : new ClassController(),
			lesson : new LessonController(),
			search : new SearchController()
		},

		initialize : function(){

			var self = this;

			_.bindAll(this);

			(new UtilsController).run();

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

			this.controllers[resource].run(param)
			.then(null, function(err){
				console.log(err);
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
