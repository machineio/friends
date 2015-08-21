fun.views.recordings = Backbone.View.extend({

	/**
	* Bind the event functions to the different HTML elements
	*/
	// click events missing
	events: {

	},
	
	/**
	* Class constructor
	*/
	initialize: function(options){
		fun.containers.recordings = this.$el;
	},

	/**
	* Render view
	*/
	render: function(){
		console.log('render recordings view');

		var template = _.template(fun.utils.getTemplate(fun.conf.templates.recordings));

		this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
	}
});