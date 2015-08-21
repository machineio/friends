fun.views.login = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events : {
        'click #login-btn': 'login',
        'click #signup-btn': 'signup'
    },
    
    /**
     * Class constructor
     */
    initialize: function(options) {
        fun.containers.login = this.$el;
    },
    
    /**
     * Renders the login view
     */
    render: function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.login));
            this.$el.html(template);
            
            // Cache the DOM stuff
            this.loginError = this.$('#signin-alert');
            // form inputs
            this.username = this.$('#username');
            this.password = this.$('#password');
        }
        this.$el.removeClass("hide").addClass("show");
    },
    
    /**
     * signup event
     */ 
    signup: function() {
        window.location = fun.conf.hash.signup;
    },
    
    /**
     * login event
     */
    login: function(event){
        event.preventDefault();
        
        var loginError = this.loginError;
        var username = this.username.val();
        var password = this.password.val();
        var view = this;

        var loginSuccess = function(view, loginError){
            // Clear the stuff from the inputs ;)
            view.$('#username').val('');
            view.$('#password').val('');
            loginError.removeClass("show" ).addClass("hide");
            fun.utils.redirect(fun.conf.hash.dashboard);
        };
        
        fun.utils.login(username, password, {
            success : function(jqXHR, textStatus){
                // currently this success call is never executed
                // the success stuff is going on case 200 of the error function.
                // Why? well... I really don't fucking know...
                loginSuccess(view, loginError);
            },
            error : function(jqXHR, textStatus, errorThrown) {
                switch(jqXHR.status) {
                    case 403:
                        var message = fun.utils.translate("usernameOrPasswordError");
                        loginError.find('p').html(message);
                        loginError.removeClass("hide" ).addClass("show");
                        break;
                    case 200:
                        // Check browser support
                        if (typeof(Storage) != "undefined") {
                            // Store
                            localStorage.setItem("username", username);
                        }
                        loginSuccess(view, loginError);
                        break;
                    default:
                        console.log('the monkey is down');
                        break;
                }
            }
        
        });
    }

});
