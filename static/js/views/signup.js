fun.views.signup = Backbone.View.extend({

    /*
     * Bind the events functions to the different HTML elements
     */
    events : {
        'click #login-btn': 'login',
        'click #signup-btn': 'signup'
    },
    
    /*
     * Class constructor
     */
    initialize : function(options) {
        fun.containers.signup = this.$el;
    },
    
    /*
     * Renders the signup view
     */
    render : function(){
        'use strict';
        var template;
        if (!this.$el.html()){
            template = _.template(fun.utils.getTemplate(fun.conf.templates.signup));
            this.$el.html(template);

            // Cache the DOM stuff
            this.signupError = this.$('#signup-alert');
            // Form inputs
            this.account = this.$('#signup_username');
            this.newAccount = this.account;
            this.email = this.$('#signup_email');
            this.password = this.$('#signup_password');
            this.confirmPassword = this.$('#confirm_password');
        }
        this.$el.removeClass("hide").addClass("show");
    },
    
    /*
     * login event
     */
    login: function() {
        window.location = fun.conf.hash.login;
    },
    
    /*
     * signup event
     */
    signup: function(event){
        'use strict';
        var signupError,
            account,
            password,
            confirmPassword,
            email,
            view,
            rules,
            validationRules,
            callbacks,
            validForm;
        event.preventDefault();
        signupError = this.signupError;
        account = this.account.val();
        password = this.password.val();
        confirmPassword = this.confirmPassword.val();
        email = this.email.val();
        // check if this view stuff is really needed
        view = this;
        // form validation rules
        rules = {
            rules: {
                signup_username: {
                    minlength: 2,
                    required: true
                },
                signup_email: {
                    required: true,
                    email: true
                },
                signup_password: {
                    minlength: 6,
                    required: true
                },
                confirm_password: {
                    required: false,
                    minlength: 6,
                    equalTo: '#signup_password'
                    
                }
            }
        }
        validationRules = $.extend (rules, fun.utils.validationRules);

        $('#signup-form').validate(validationRules);
        
        // new user account callbacks
        callbacks = {
            success: function(){
                // Clear the stuff from the inputs ;)
                view.$('#signup_username').val('');
                view.$('#signup_email').val('');
                view.$('#signup_password').val('');
                view.$('#confirm_password').val('');
                signupError.hide();
                // login the created user
                fun.utils.login(account, password,
                    {
                        success : function(xhr, status){
                            fun.utils.redirect(fun.conf.hash.dashboard);
                        },
                        error : function(xhr, status, error){
                            switch(xhr.status) {
                                case 403:
                                    var message = fun.utils.translate("usernameOrPasswordError");
                                    signupError.find('p').html(message);
                                    signupError.removeClass("hide").addClass("show");
                                    break;
                                case 200:
                                    // Check browser support
                                    if (typeof(Storage) != "undefined") {
                                        // Store
                                        localStorage.setItem("username", account);
                                    }
                                    fun.utils.redirect(fun.conf.hash.login);
                                    break;
                                default:
                                    console.log('the monkey is down');
                                    break;
                            }
                        }
                    }
                );
            },

            error: function(model, error){
                // Catch duplicate errors or some random stuff
                signupError.removeClass("hide").addClass("show");
                // TODO: on error add class error and label to the input field
                if (error.responseText.indexOf('account') != -1){
                    signupError.find('p').html('Username is already taken.');
                }
                else if (error.responseText.indexOf('email') != -1){
                    signupError.find('p').html('Email is invalid or already taken.');
                }
                else {
                    signupError.find('p').html('what daa!?');
                }
                
            }
        };
        
        // check for a valid form and create the new user account
        validForm = $('#signup-form').valid();
        if (validForm){
            //event.preventDefault();
            this.model = new fun.models.Account();
            this.model.save(
                {
                    account: account,
                    password: password,
                    email: email
                },
                callbacks
            );
        }
    }
});