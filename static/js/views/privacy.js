fun.views.privacy = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.privacy = this.$el;
    },
    
    /*
    * Render the privacy view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.privacy));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});
