fun.views.footer = Backbone.View.extend({

    events: {

    },

    initialize : function(options) {
        fun.containers.footer = this.$el;
    },
    
    render : function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.footer)
        );
        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
    }

});