fun.views.gallery = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {
    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.gallery = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render gallery view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.gallery));

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
    }
});