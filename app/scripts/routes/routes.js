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

			this.auth().then(function(user){
				self.util.run(user);
				return self.controllers[resource].run(param);
			})
			.then(function(currentView){
				pausedController && pausedController.stop(resourceChanged);
				self.current = resource;
			});
		},
		auth : function(){
			var result = Backbone.Auth.parseHash(location.hash);
			location.hash = '';

			return new Promise(function(resolve, reject){
				var user = Parse.User.current();
				if(user){
					resolve(user);
				}
				else if(result){
					Backbone.Auth.getProfile(result.id_token, function (err, profile) {
						// store result.id_token and profile in local storage or cookie
						Parse.User.become(profile.parse_session_token).then(function(user) {
							resolve(user);
						})
						.then(null, function (err) {
							reject(err);
						});
					});
				} else {
					resolve();
				}
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
