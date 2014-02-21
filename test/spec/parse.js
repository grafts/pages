/* global describe, it */
define([
	'jquery',
	'underscore',
	'backbone',

	'parse',
	'youtube!'
], function ($, _, Backbone, Parse, YT) {
	'use strict';

	describe('require basic components', function () {
		it('jquery', function () {
			should.exist($);
		});
		it('lodash', function () {
			should.exist(_);
		});
		it('backbone', function () {
			should.exist(Backbone);
		});
	});

	describe('youtube, YT', function () {
		it('exist', function () {
			should.exist(YT);
		});
		describe('should have properties', function () {
			it('loaded: 1', function(){
				YT.should.have.property('loading', 1);
			});
			it('loaded: 1', function(){
				YT.should.have.property('loaded', 1);
			});
			it('ready', function(){
				YT.should.have.property('loaded');
			});
		});
	});
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
		describe('get', function () {
			it('video:mFPXJdLTiV', function(){
				var Video      = Parse.Object.extend("video"),
					vid        = new Video(),
					query      = new Parse.Query(Video),
					dummyVidId = "mFPXJdLTiV";

				query.get(dummyVidId, {
					success: function(data) {
						should.exist(data);
					},
					error: function(object, error) {
					}
				});
			});
		});
		describe('query!', function () {
			var Video   = Parse.Object.extend("video"),
				vid     = new Video(),
				dummy   = {
					title      : '리신공략, 각 라인별 일반적인 갱킹방법',
					subtitle   : '갱킹이 리신이며 리신이 갱킹이다!',
					video      : {
						id : 'yL9i5OXUhg4'
					}
				};

			it('set a new video', function(done){
				vid.save(dummy, {
					success: function(data) {
						should.exist(data);
						dummy = data;
						done();
					},
					error: function(data, error) {
						// The save failed.
						// error is a Parse.Error with an error code and description.
					}
				});
			});
			it('set relational to dummy with dummy user', function(done){
				var User      = Parse.Object.extend('_User'),
					userQuery = new Parse.Query(User);

				userQuery.get('ElgbZFZGLh')
				.then(function(user){
					vid.set('author', user);
					vid.save(null, {
						success : function(data){
							should.exist(data);
							done();
						}
					});
				});
			});
			it('get saved object, and dummy data == Retrieved data', function(done){
				var q = new Parse.Query(Video);
				q.get(dummy.id, {
					success : function(data){
						(data.id).should.equal(dummy.id);
						done();
					}
				});
			});
			it('destroy', function(){
				vid.destroy({
					success : function(data){
						should.exist(data);
					},
					error : function(){
					}
				})
			});
		});
		describe('set relational datas', function () {
			
		});

	});
});




