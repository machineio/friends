fun.views.support = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.support = this.$el;
    },
    
    /*
    * Render the support view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.support));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});
