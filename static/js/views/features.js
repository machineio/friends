fun.views.features = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.features = this.$el;
    },
    
    /*
    * Render the features view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.features));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});
