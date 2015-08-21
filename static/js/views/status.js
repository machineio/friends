fun.views.status = Backbone.View.extend({

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
        fun.containers.status = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render status view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.status));

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
    }
});