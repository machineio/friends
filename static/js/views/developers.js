fun.views.developers = Backbone.View.extend({

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
        fun.containers.developers = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render developers view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.developers));

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
    }
});