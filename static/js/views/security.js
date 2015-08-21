fun.views.security = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.security = this.$el;
    },
    
    /*
    * Render the security view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.security));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});
