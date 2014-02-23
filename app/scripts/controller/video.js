/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',

	'models/video',
	'collections/video',

	'views/video',
	'views/videoEdit'
], function ($, _, Backbone, Video, Videos, VideoView, VideoEditView) {
	'use strict';

	//
	//
	// for prototype, dummy data input
	var dummy = {
			id         : 1,
			title      : '리신공략, 각 라인별 일반적인 갱킹방법',
			subtitle   : '갱킹이 리신이며 리신이 갱킹이다!',
			createdAt  : "2014-02-23T17:53:00.272Z",
			updatedAt  : "2014-02-23T17:53:02.047Z",
			publishAt  : "2014-02-23T17:53:02.047Z",
			publish    : true,
			author     : {
				id         : 1,
				name       : '아만다 사이프리드',
				avatar     : {
					_url       : '/images/avatar.jpg'
				}
			},
			coverImage : {
				_url       : "/images/cover_background.png" 
			},
			video      : {
				id         : '48auKg6es8E',
				duration   : 3051,
			},
			contents   : [],
			view       : 123123,
			like       : 123,
			relate     : {
				id         : 2,
				title      : 'Today is good day to die',
				subtitle   : '자르반 4세, 데마시아의 귀감',
				author     : {
					id     : 1,
					name   : '아만다 사이프리드',
					avatar : {
						_url   : '/images/avatar.jpg'
					}
				},
				coverImage : {
					_url       : "/images/light_cover_background.png" 
				}
			}
			// for prototype, dummy data input
			//
			//
		},
		dummyContent = { 
			time : 100, script : '룬 설정 방법', comments : []
		},
		dummyContentTitle = [
			'속성 설정', '챔피언 픽', '한타 싸움', '리븐 평타 캔슬', '레넥톤 평타 캔슬', '티아맷을 사용한 레넥톤 평타 캔슬', '리븐이 평타를 캔슬하려다가 실패할 경우 이렇게 됨.', '봇이 멸망하는 방법을 잘 알려주는 시점', '굉장히 굉장한 센스 블리츠 프랭크의 살인적인 엉덩이 그랩', '픽밴에서 니달리가 밴 되는 이유는 니달리가 내 맘에 안들기 때문이지.'
		],
		dummyContentComments = [
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : "2014-02-23T17:53:02.047Z"}, 
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : '댓글을 달면 이렇게 뜨는거야? 천송이가 뢥을 한다 쏭쏭쏭 붕붕아 맘마먹고 시퍼쪄요? 기름주세요 기~름~', date : '2 days ago'},
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : '마이 상대법수정하셔야 할거같아요. 궁쓰고달려오면 둔화효과 면역인데 탈진을걸라고하신게..나머진 다좋네요! 잔나 할때 처음으로 랭에서 접해서 트롤아닌가싶엇는데 대부분 님에 쓰신대로 플레이하고잇던게 다행이엇어요.', date : "2014-02-23T17:53:02.047Z"},
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : '잔나 유저인데 버프몹스틸 팁 감사합니다 ㅎㅎ 10번중에 3번은 스틸하는듯요 플레기준..ㅎㅎ', date : "2014-02-23T17:53:02.047Z"},
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : '잔나정말 좋은데ㅠㅠ 자꾸 고인이라고 무시하네요 픽률보면서 저도 안구에 습기가..ㅠㅠ', date : "2014-02-23T17:53:02.047Z"},
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : '아;ㅠㅠ 우리의 잔나 ㅠㅠ 기상캐스터 잔나 갖고싶다....... 승리의 잔나 얻을수 있었는데 불과 랭크 3점차이로 ㅠㅠ', date : "2014-02-23T17:53:02.047Z"},
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : '그리고 쓰레쉬가 그랩을 끌어서 절 맞추면 6렙전엔 어떻게 대처해야하나요? 그저 피하는 수밖엔 없나요?....걍 쉴드 키고 점멸로 빼야하는건가......', date : "2014-02-23T17:53:02.047Z"},
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : '형 나 쇼크임 엑셀 줬수다. 형엑셀주려고 레벨업 엄청나게 빠르게함', date : "2014-02-23T17:53:02.047Z"},
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : '공략보고 까는 사람들말인데 ㅋ 님들은 쏘핫트 님이랑 라인전 붙으면 이길수있음? ㅋㅋ 아니 적어도 개인적인 공략이나 템트리 특성 까려면 깔 사람보다 더 나은 실력이나 그런 걸 보여주고 하든가 ㅋㅋ 입롤들이', date : "2014-02-23T17:53:02.047Z"},
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : '형.. 미드녹턴 너무 어려움..', date : "2014-02-23T17:53:02.047Z"},
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : '미드 야스오 대처법에 대해서도 업데이트 해주셨으면 해요', date : "2014-02-23T17:53:02.047Z"},
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : '저템트리로 원딜이 3초나 걸림? 1초면될듯', date : "2014-02-23T17:53:02.047Z"},
			{author : {id : 1, name : '아만다 사이프리드', avatar : { _url:'/images/avatar.jpg'} }, comment : '님 동영상보구 감탄함 ㅋㅋ 녹턴 빠돌이 됨 ㅋㅋ', date : "2014-02-23T17:53:02.047Z"}
		];

	for(var i=100, time=dummy.video.duration; i<time; i+=parseInt(Math.random(10)/1*200+1)){
		(function(t){
			var c = _.cloneDeep(dummyContent);
			c.time = t;
			c.script = dummyContentTitle[parseInt(Math.random(dummyContentTitle.length+1)*10)];
			for(var j=0; j<10;j+=parseInt(Math.random(10)*10)){
				c.comments.push(dummyContentComments[parseInt(Math.random(dummyContentComments.length)*10)]);
			}
			dummy.contents.push(c);
		})(i)
	}
	// for prototype, dummy data input
	//
	//

	var Controller = Backbone.Controller.extend({
		el          : $('section.video'),
		model       : Video,
		collection  : Videos,
		readView    : VideoView,
		editView    : VideoEditView,
		pull : function(id){
			var self  = this,
				query = new Backbone.Query(self.model);

			query.include(['author', 'contents', 'contents.comments', 'contents.comments.author']);
			return query.get(id);
		},
		createDummyView : function(View){
			var self = this;

			return new View({
				model : new self.model(dummy),
				id    : self.el.attr('class') + '_dummy'
			});
		}
	});

	return Controller;
});
