fun.views.terms = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.terms = this.$el;
    },
    
    /*
    * Render the terms view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.terms));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});
