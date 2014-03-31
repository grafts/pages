/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'pen'
], function ($, _, Backbone, JST, Pen) {
	var View = Backbone.Component.extend({
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
			// this.$('.item:eq(0)').addClass('on');
			return this.$el;
		},
		unrender : function(){
			Backbone.pubsub.off(null, null, this);
			this.undelegateEvents();
			this.$el.remove();
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
			var item = $(this.template(obj.refine()))[0];
			if(this.editFields){
				this.addEditField(item.querySelector('.editable'));
			}
			this.$el.append(item);
			this.sort();
		},
		delAll : function(contents){
			var self = this;
			contents.forEach(function(content){
				self.del(content);
			});
		},
		del : function(obj){
			if(this.editFields){
				var target = _.find(this.editFields, { id : obj.id });
				target && target.destroy();
			}
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
