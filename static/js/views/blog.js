fun.views.blog = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.blog = this.$el;
    },
    
    /*
    * Render the blog view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.blog));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});
