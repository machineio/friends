fun.views.extra = Backbone.View.extend({

    events: {
        'click #subscribe-btn' : 'subscribe'
    },

    initialize : function(options) {
        fun.containers.extra = this.$el;
    },
    
    render : function(){
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
    }

});