define(['https://www.youtube.com/iframe_api'], function () {
	return {
		load : function(name, req, onLoad, config){
			if(config.isBuild){
				onLoad(null); //avoid errors on the optimizer
			}
			else {
				window.onYouTubeIframeAPIReady = function(){
					onLoad(YT);
				};
			}
		}
	};
});