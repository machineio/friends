fun.views.rooms = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #rooms-booknow-btn': 'booknow'
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

        this.$('#rooms-checkin').datepicker({
            'format':'yyyy-mm-dd'
        });

        this.$('#rooms-checkout').datepicker({
            'format':'yyyy-mm-dd'
        });

        this.$el.removeClass("hide").addClass("show");
    },

    booknow: function(event){
        // Render view function
        'use strict';
        var email,
            room,
            checkin,
            checkout,
            guests,
            empty,
            stufa,
            details,
            taskPayload,
            task,
            view = this;
        event.preventDefault();

        email = this.$('#rooms-email').val();
        room  = this.$('#rooms-room').val();
        checkin = this.$('#rooms-checkin').val();
        checkout = this.$('#rooms-checkout').val();
        guests = this.$('#rooms-guests').val();
        empty = fun.utils.emptyString(email);

        if (!empty){
            stufa = {
                'room':room,
                'checkin':checkin,
                'checkout':checkout,
                'guests':guests
            };

            details = JSON.stringify(stufa);

            taskPayload = {
                first_name: 'Random',
                last_name: 'Funster',
                title: 'new reservation',
                description: details,
                label: 'QTuanis Reservation',
                email: email,
            };

            task = new fun.models.Task(taskPayload);
            task.save();
        }

        // clean stuff on qtuanis
        view.$('#rooms-email').val('');
        view.$('#rooms-checkin').val('');
        view.$('#rooms-checkout').val('');
        view.$('#rooms-guests').val('1');
    }

});