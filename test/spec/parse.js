/* global describe, it */
define([
	'jquery',
	'underscore',
	'backbone',

	'parse',
	'models/video',
	'collections/video'
], function ($, _, Backbone, Parse, Video, Videos) {
	'use strict';

	describe('Parse', function () {
		describe('exist', function(){
			it('exist', function(){
				should.exist(Parse);
			});
			it('exist properties : Object', function(){
				should.exist(Parse.Object);
			});
			it('exist properties : Query', function(){
				should.exist(Parse.Query);
			});
		});
		// describe('query!', function () {
		// 	var Video   = Parse.Object.extend("video"),
		// 		vid     = new Video(),
		// 		dummy   = {
		// 			title      : '리신공략, 각 라인별 일반적인 갱킹방법',
		// 			subtitle   : '갱킹이 리신이며 리신이 갱킹이다!',
		// 			videoInfo  : {
		// 				id : 'yL9i5OXUhg4'
		// 			}
		// 		};
		// 	this.timeout(5000);

		// 	it('set a new video', function(done){
		// 		vid.save(dummy, {
		// 			success: function(data) {
		// 				should.exist(data);
		// 				dummy = data;
		// 				done();
		// 			},
		// 			error: function(data, error) {
		// 				// The save failed.
		// 				// error is a Parse.Error with an error code and description.
		// 			}
		// 		});
		// 	});
		// 	it('set relational to dummy with existing dummy user', function(done){
		// 		var User      = Parse.Object.extend('_User'),
		// 			userQuery = new Parse.Query(User);

		// 		userQuery.get('ElgbZFZGLh')
		// 		.then(function(user){
		// 			vid.set('author', user);
		// 			vid.save(null, {
		// 				success : function(data){
		// 					should.exist(data);
		// 					done();
		// 				}
		// 			});
		// 		});
		// 	});
		// 	it('add relational to dummy with new dummy content', function(done){
		// 		var Moment     = Parse.Object.extend('content'),
		// 			moment     = new Moment(),
		// 			Comment    = Parse.Object.extend('comment'),
		// 			comment    = new Comment(),
		// 			relation   = vid.relation('contents'),
		// 			User       = Parse.Object.extend('_User'),
		// 			userQuery  = new Parse.Query(User);

		// 		userQuery.get('ElgbZFZGLh')
		// 		.then(function(user){
		// 			return comment.save({
		// 				author : user,
		// 				video  : vid,
		// 				comment : '댓글을 달면 이렇게 뜨는거야? 천송이가 뢥을 한다 쏭쏭쏭 붕붕아 맘마먹고 시퍼쪄요?'
		// 			});
		// 		})
		// 		.then(function(comment){
		// 			moment.add('comments', comment);
		// 			moment.set({
		// 				video  : vid,
		// 				time   : 111,
		// 				script : '속성 설정 속성 설정 속성 설정 속성 설정',
		// 			});

		// 			return moment.save();
		// 		})
		// 		.then(function(moment){
		// 			vid.add('contents', moment);
		// 			return vid.save();
		// 		})
		// 		.then(function(video){
		// 			should.exist(video);
		// 			done();
		// 		});
		// 	});
		// 	it('get saved object, and dummy data == Retrieved data', function(done){
		// 		var q = new Parse.Query(Video);
		// 		q.get(dummy.id, {
		// 			success : function(data){
		// 				(data.id).should.equal(dummy.id);
		// 				done();
		// 			}
		// 		});
		// 	});
		// 	it('get saved object with relational data, and dummy data == Retrieved data', function(done){
		// 		var q = new Parse.Query(Video);
		// 		q.include(['author', 'contents', 'contents.comments', 'contents.comments.author']);
		// 		q.get(dummy.id, {
		// 			success : function(data){
		// 				(data.id).should.equal(dummy.id);
		// 				done();
		// 			}
		// 		});
		// 	});
		// 	it('destroy relational comments', function(){
		// 		Parse.Object.destroyAll(
		// 			_.compact(_.flatten(vid.get('contents').map(function(content){
		// 				return content.get('comments');
		// 			}))
		// 		), {
		// 			success : function(data){
		// 				should.exist(data);
		// 			},
		// 			error : function(){
		// 			}
		// 		});
		// 	});
		// 	it('destroy relational timlines', function(){
		// 		Parse.Object.destroyAll(vid.get('contents'), {
		// 			success : function(data){
		// 				should.exist(data);
		// 			},
		// 			error : function(){
		// 			}
		// 		});
		// 	});
		// 	it('destroy', function(){
		// 		vid.destroy({
		// 			success : function(data){
		// 				should.exist(data);
		// 			},
		// 			error : function(){
		// 			}
		// 		});
		// 	});
		// });
		// describe('query mix', function () {
		// 	var vid     = new Video(),
		// 		dummy   = {
		// 			title      : '리신공략, 각 라인별 일반적인 갱킹방법',
		// 			subtitle   : '갱킹이 리신이며 리신이 갱킹이다!'
		// 		};
		// 	this.timeout(3000);

		// 	it('add video. use plain parse function', function(done){
		// 		var User      = Parse.Object.extend('_User'),
		// 			userQuery = new Parse.Query(User);

		// 		userQuery.get('ElgbZFZGLh')
		// 		.then(function(user){
		// 			dummy.author = user;
		// 			vid.save(dummy, {
		// 				success : function(data){
		// 					should.exist(data);
		// 					done();
		// 				}
		// 			});
		// 		});
		// 	});
		// 	it('add content with success/error callback', function(done){
		// 		vid.addContents({
		// 			time   : 100,
		// 			script : 'test message'
		// 		}, {
		// 			success : function(data){
		// 				should.exist(data.id);
		// 				done();
		// 			}
		// 		});
		// 	});
		// 	it('add content with then method', function(done){
		// 		vid.addContents({
		// 			time   : 200,
		// 			script : 'test message 2'
		// 		})
		// 		.then(function(data){
		// 			data.get('time').should.equal(200);
		// 			done();
		// 		});
		// 	});
		// 	it('add mutiple content', function(done){
		// 		vid.addContents([
		// 			{ time   : 100, script : 'test message' },
		// 			{ time   : 200, script : 'test message 2'}
		// 		], {
		// 			success : function(data){
		// 				should.exist(data);
		// 				data.should.have.length(2);
		// 				done();
		// 			}
		// 		});
		// 	});
		// 	it('edit content', function(done){
		// 		var content = vid.get('contents')[0];
		// 		content.set('time', 600);
		// 		content.save().then(function(data){
		// 			data.get('time').should.equal(600);
		// 			done();
		// 		});
		// 	});
		// 	it('add comment', function(done){
		// 		var dummyComment = {
		// 				comment : 'test comment',
		// 				author  : vid.get('author')
		// 			};
		// 		vid.get('contents')[0].addComments(dummyComment)
		// 		.then(function(data){
		// 			data.get('comment').should.equal(dummyComment.comment);
		// 			done();
		// 		});
		// 	});
		// 	it('delete first content', function(done){
		// 		vid.delContents(vid.get('contents')[0])
		// 		.then(function(data){
		// 			should.exist(data);
		// 			done();
		// 		});
		// 	});
		// 	it('empty video contents', function(done){
		// 		vid.empty()
		// 		.then(function(data){
		// 			should.exist(data);
		// 			done();
		// 		});
		// 	});
		// 	it('destroy video', function(){
		// 		vid.destroy({
		// 			success : function(data){
		// 				should.exist(data);
		// 			},
		// 			error : function(){
		// 			}
		// 		});
		// 	});
		// });

		describe('video collection test', function(){
			var User      = Parse.Object.extend('_User'),
				userQuery = new Parse.Query(User),
				maknoonId = 'SB5ViyYmWV';


			it('exist', function(){
				should.exist(Videos);
			});
			it('generate & fetch', function(done){
				var collection;
				userQuery.get(maknoonId).then(function(maknoon){
					collection = new Videos({ author : maknoon });
					return collection.fetch();
				})
				.then(function(data){
					(maknoonId).should.equal(data.models[0].get('author').id);
					done();
				});
			});
			it('generate & fetch', function(done){
				var collection;
				userQuery.get(maknoonId).then(function(maknoon){
					collection = new Videos({ author : maknoon, title : '이블린 강좌' });
					return collection.fetch();
				})
				.then(function(data){
					(maknoonId).should.equal(data.models[0].get('author').id);
					done();
				});
			});
		});

	});
});




