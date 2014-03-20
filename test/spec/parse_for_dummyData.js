/* global describe, it */
define([
	'jquery',
	'underscore',
	'backbone',

	'parse',
	'models/video'
], function ($, _, Backbone, Parse, Video) {
	'use strict';

	var maknoon = "SB5ViyYmWV",
		toScnd  = function(ms){
			var a = ms.split(':');
			return (+a[0]) * 60 + (+a[1]); 
		};

	describe('query for dummy', function () {

		describe('query mix', function () {
			var vid     = new Video(),
				dummy   = {
					title      : '미드 AP 트리스타나 강좌',
					subtitle   : 'AP 트리스타나로 미드를 지배! 팀원들이 잘한다고 리폿!',
					video      : { id : 'sFQn2YzWfds', duration : 2224 }
				};

			this.timeout(3000);

			it('add video. use plain parse function', function(done){
				var User      = Parse.Object.extend('_User'),
					userQuery = new Parse.Query(User);

				userQuery.get(maknoon)
				.then(function(user){
					dummy.author = user;
					vid.save(dummy, {
						success : function(data){
							should.exist(data);
							done();
						}
					});
				});
			});
			it('add mutiple content', function(done){
				vid.addContents([
{ time : toScnd("01:18"), script : "트리 E의 강력한 도트 데미지 " },
{ time : toScnd("02:40"), script : "E - 평(E와 평타가 깔끔하게 연계되어 마치 스킬 한개처럼 나감)" },
{ time : toScnd("05:18"), script : "라인이 상대 타워까지 밀렸다면 로밍 타이밍이 나옴 " },
{ time : toScnd("05:38"), script : "일단 킬을 하게 되면 W가 초기화 되기 때문에 첫 진입을 W로 하는 장면 " },
{ time : toScnd("09:00"), script : "오리아나와 서로 눈치를 보다가 원콤보로 오리아나를 암살" },
{ time : toScnd("11:00"), script : "갱에 실패한 정글러는 정글을 먹으러 가는데 위치가 미니언으로 인해 확인이 되니 정글러까지 암살" },
{ time : toScnd("12:40"), script : "W만 논타게팅 스킬이기 때문에 W의 명중률이 중요하다 " },
{ time : toScnd("14:40"), script : "너무 스킬을 빨리 사용해서 레드 데미지를 사용하지 못해 아쉬움이 남는 장면" },
{ time : toScnd("15:30"), script : "이런식의 레드 데미지를 이용하면 E 도트 데미지와 합해져서 엄청난 데미지를 줄 수 있다" },
{ time : toScnd("20:05"), script : "W 데미지를 주지 못했지만 E의 도트 데미지의 지속시간이 길어서 쉴드를 뚫고 오리아나를 처치 함" },
{ time : toScnd("27:50"), script : "미드 AP 트리를 쓰기 힘든 이유 W스킬이 빗나가거나 첫 진입때 상대를 잡지 못하면 후속딜을 넣을 수 없다 " },
{ time : toScnd("32:10"), script : "마찬가지로 트리가 물리게 되어 W스킬이 빠지면 딜로스가 엄청나게 심해진다" },
{ time : toScnd("35:15"), script : "트리는 스플릿 푸쉬를 하면 좋다 엄청난 순간 화력을 이용해 한명 암살이 가능하고 W로 인한 생존력도 높으며 원딜러이기 때문에 타워도 빨리 깨므로 성장을 잘했을경우 암살 위주의 스플릿 푸쉬를 하면 된다" }
				], {
					success : function(data){
						should.exist(data);
						done();
					}
				});
			});
			it('save', function(done){
				vid.save().then(function(data){
					should.exist(data);
					done();
				});
			});
		});
	});
});





