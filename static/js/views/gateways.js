fun.views.gateways = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.gateways = this.$el;
    },
    
    /*
    * Render the gateways view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.gateways));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});
