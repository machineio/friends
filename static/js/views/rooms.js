fun.views.rooms = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {
        
    },
    
    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.rooms = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        'use strict';
        //view cache
        var view = this,
            template;

        console.log('render rooms view');

        template = _.template(fun.utils.getTemplate(fun.conf.templates.rooms));

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
    }

});