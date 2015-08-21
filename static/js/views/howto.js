fun.views.howto = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.howto = this.$el;
    },
    
    /*
    * Render the howto view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.howto));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});
