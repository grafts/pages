/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';


	// var dummyText = '<p>게임이 중반쯤되고 미드 라이너도 와드를 박고 탑라이너도 올라오는 부시에 와드를 박으면 갱킹이 어려워집니다. 이럴때 시도해 볼만한 갱킹은 바론뒤쪽에 와드를 박은후 를 타고 들어가 삼거리를 통해 가는 것입니다. 물론 미드라인쪽으로 올라가도 돼지만 상대 미드라이너가 와드를 박았을 경우 센스있는 정글러에게 역갱을 당할 수 있습니다. 게임이 중반쯤되고 미드 라이너도 와드를 박고 탑라이너도 올라오는 부시에 와드를 박으면 갱킹이 어려워집니다.</p><blockquote>이럴때 시도해 볼만한 갱킹은 바론뒤쪽에 와드를 박은후 를 타고 들어가 삼거리를 통해 가는 것입니다. 물론 미드라인쪽으로 올라가도 돼지만 상대 미드라이너가 와드를 박았을 경우 센스있는 정글러에게 역갱을 당할 수 있습니다.</blockquote><p>일반적으로 퍼플 진영 탑라이너들은 대부분 바론에서 올라오는 쪽에만 하나박고 삼거리쪽엔 박지 않습니다. 아깝거든요!! 이것을 노려서 바론뒤로 올라가는 갱킹이 의외로 성공률이 높습니다. 미드도 와드가 박혔고 탑골목도 와드박혔기때문에 약간은 방심하며 공격적으로 딜교환을 하게 되는 것이죠.</p>';
	var dummyText = [
		{ text : '게임이 중반쯤되고 미드 라이너도 와드를 박고 탑라이너도 올라오는 부시에 와드를 박으면 갱킹이 어려워집니다. 이럴때 시도해 볼만한 갱킹은 바론뒤쪽에 와드를 박은후 를 타고 들어가 삼거리를 통해 가는 것입니다. 물론 미드라인쪽으로 올라가도 돼지만 상대 미드라이너가 와드를 박았을 경우 센스있는 정글러에게 역갱을 당할 수 있습니다. 게임이 중반쯤되고 미드 라이너도 와드를 박고 탑라이너도 올라오는 부시에 와드를 박으면 갱킹이 어려워집니다.' },
		{ tag : 'blockquote', text : '이럴때 시도해 볼만한 갱킹은 바론뒤쪽에 와드를 박은후 를 타고 들어가 삼거리를 통해 가는 것입니다. 물론 미드라인쪽으로 올라가도 돼지만 상대 미드라이너가 와드를 박았을 경우 센스있는 정글러에게 역갱을 당할 수 있습니다.' },
		{ text : '일반적으로 퍼플 진영 탑라이너들은 대부분 바론에서 올라오는 쪽에만 하나박고 삼거리쪽엔 박지 않습니다. 아깝거든요!! 이것을 노려서 바론뒤로 올라가는 갱킹이 의외로 성공률이 높습니다. 미드도 와드가 박혔고 탑골목도 와드박혔기때문에 약간은 방심하며 공격적으로 딜교환을 하게 되는 것이죠.', src:"/asd"}
	];

	var VideoModel = Backbone.Model.extend({
		defaults: {
			//
			//
			// for prototype, dummy data input
			id : 1,
			title : '리신공략, 각 라인별 일반적인 갱킹방법',
			subtitle : '갱킹이 리신이며 리신이 갱킹이다!',
			author : {
				id : 1,
				name : '아만다 사이프리드',
				avatar : 'images/avatar.jpg'
			},
			coverImage : { 
				src : "/images/cover_background.png" 
			},
			video : {
				id : '48auKg6es8E',
			},
			duration : 3051,
			contents : [
				{
					time : 200,
					script : {
						title : '룬 설정 방법',
						texts  : dummyText
					},
					comments : [
						{
							author : {
								id : 1,
								name : '아만다 사이프리드',
								avatar : '/images/avatar.jpg'
							},
							comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!',
							date : 'a days ago'
						},
						{
							author : {
								id : 1,
								name : '아만다 사이프리드',
								avatar : '/images/avatar.jpg'
							},
							comment : '댓글을 달면 이렇게 뜨는거야? 천송이가 뢥을 한다 쏭쏭쏭 붕붕아 맘마먹고 시퍼쪄요? 기름주세요 기~름~',
							date : '2 days ago'
						}
					]
				},
				{time : 400, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 500, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 570, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 900, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 1200, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 1290, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 1400, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 1450, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 1550, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 1800, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 1900, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 2200, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 2300, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 2340, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 2500, script : { title : '속성 설정', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] },
				{time : 2700, script : { title : '챔피언 픽', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] }, 
				{time : 2740, script : { title : '한타 싸움', texts : dummyText}, comments : [{id : 1, author : {id : 1, name : '아만다 사이프리드', avatar : '/images/avatar.jpg'}, comment : 'Words of wisdom indeed. But i do enjoy my midnight break and stroll to the 7-11!', date : 'a days ago'} ] } 
			],
			view : 123123,
			like : 123
			// for prototype, dummy data input
			//
			//
		},
		urlRoot : '/video',
		initialize: function(){

		},
		getContents : function(){
			var self = this,
				contents = _.cloneDeep(this.get('contents')),
				_percent = function(total, current){
					return current / total * 100;
				},
				_hhmmss = function(secs){
					var hours = Math.floor(secs / (60 * 60));

					var divisor_for_minutes = secs % (60 * 60);
					var minutes = Math.floor(divisor_for_minutes / 60) || '00';

					var divisor_for_seconds = divisor_for_minutes % 60;
					var seconds = Math.ceil(divisor_for_seconds) || '00';

					var hhmmss = '';

					if(hours != 0){
						hhmmss += (hours + ':'); 
					}
					if(minutes<10){
						minutes = '0' + minutes;
					}
					if(seconds<10){
						// seconds = '0' + minutes;
					}
					hhmmss += (minutes + ':'); 
					hhmmss += (seconds);

					return hhmmss;
				};

			return contents.map(function(val, n){
				val.position = _percent(self.get('duration'), val.time);
				val.hhmmss = _hhmmss(val.time);
				val.seq = n;

				return val;
			});
		}
	});

	return VideoModel;
});
