fun.views.enterprise = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.enterprise = this.$el;
    },
    
    /*
    * Render the enterprise view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.enterprise));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});
