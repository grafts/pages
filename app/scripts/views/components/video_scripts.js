/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'pen'
], function ($, _, Backbone, JST, Pen) {
	var View = Backbone.View.extend({
		tagName : 'ul',
		template : JST['app/scripts/templates/video_scripts.hbs'],
		events : {
		},
		initialize : function(data){
			this.videoId = data.videoId;
			this.contents = data.contents;
			this.listenTo(this.contents, 'reset', this.reset);
			this.listenTo(this.contents, 'add', this.addAll);
			this.listenTo(this.contents, 'del', this.delAll);
			this.listenTo(this.contents, 'change', this.update);
		},
		render : function(){
			var self = this;
			this.delegateEvents();
			this.$el.addClass('scripts');
			this.addAll(this.contents);
			return this.$el;
		},
		unrender : function(){
			Backbone.pubsub.off(null, null, this);
			this.undelegateEvents();
			this.$el.remove();
		},
		read : function(){
			if(!this.editFields) return;
			this.editFields.forEach(function(field){
				field.destroy();
			});
			delete this.editFields;
		},
		edit : function(){
			var self = this,
				editOption = {
					debug: false,
					stay : false,
					list : ['bold', 'italic']
				};

			if(this.editFields) return;
			this.editFields = [];
			[].forEach.call(this.$('.editable'), function(dom){
				var field = new Pen(
						_.defaults({
							editor : dom,
						}, editOption)
					);
				if(dom.id) field.id = dom.id;
				self.editFields.push(field);
			});
		},
		reset : function(){
			var seq = this.$el.children('.on').index();
			seq==-1?seq=0:null;
			this.$el.html(this.template({ scripts : this.contents.refine() }))
			.children(':eq('+seq+')').addClass('on');
		},
		addAll : function(contents){
			var self = this;
			contents.forEach(function(content){
				self.add(content);
			});
		},
		add : function(obj){
			this.$el.append(this.template(obj.refine()));
			this.sort();
		},
		delAll : function(contents){
			var self = this;
			contents.forEach(function(content){
				self.del(content);
			});
		},
		del : function(obj){
			this.$('#'+obj.id).remove();
			this.sort();
		},
		sort : _.debounce(function(){
			var self = this;

			var c=0, arr = [].slice.call(this.el.children).sort(function(a, b){
				a = a.dataset.time * 1;
				b = b.dataset.time * 1;
				if(a < b) c= -1;
				if(a > b) c= 1;
				return c;
			});
			var frag = document.createDocumentFragment();
			for (var i = 0; i < arr.length; i++) {
				frag.appendChild(arr[i]);
			}
			this.el.appendChild(frag);
		}, 10),
		update : function(){

		},
		test : function(){
			console.log('test arg = ');
			console.log(arguments);
		}

	});

	return View;
});
