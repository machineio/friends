fun.views.extra = Backbone.View.extend({

    events: {
        'click #subscribe-btn' : 'subscribe',
        'click #booknow-btn': 'booknow'
    },

    initialize : function(options) {
        fun.containers.extra = this.$el;
    },
    
    render : function(){
        // Render view function
        'use strict';
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.extra)
        );
        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");

        if(fun.utils.loggedIn()){
            this.renderNavDashboard();
            
        } else {
            this.renderNavLanding();
        }

        this.$('#checkin').datepicker({
            'format':'yyyy-mm-dd'
        });

        this.$('#checkout').datepicker({
            'format':'yyyy-mm-dd'
        });
    },

    renderNavLanding: function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.extraNavLanding)
        );
        
        var navLanding = this.$('#fun-extra-nav-landing');
        navLanding.html(template);

        this.renderSocial();
        this.renderSubscribe();
    },

    renderNavDashboard: function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.extraNavDashboard)
        );

        var navDashboard = this.$('#fun-extra-nav-dashboard');
        navDashboard.html(template);
    },

    renderSocial: function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.social)
        );

        var social = this.$('#fun-extra-social');
        social.html(template);
    },

    renderSubscribe: function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.subscribe)
        );

        var subscribe = this.$('#fun-extra-subscribe');
        subscribe.html(template);
    },

    subscribe: function(event){
        event.preventDefault();

        var email = this.$('#subscribe-email').val();
        
        fun.utils.subscribe(email, {
            success : function(jqXHR, textStatus){
                this.$('#subscribe-email').val('');
            },
            error : function(jqXHR, textStatus, errorThrown) {
                console.log('subscribe error');
            }
        });
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

        email = this.$('#email').val();
        room  = this.$('#room').val();
        checkin = this.$('#checkin').val();
        checkout = this.$('#checkout').val();
        guests = this.$('#guests').val();
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
        view.$('#email').val('');
        view.$('#checkin').val('');
        view.$('#checkout').val('');
        view.$('#guests').val('1');
    }

});