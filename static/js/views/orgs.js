fun.views.orgs = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #new-org-btn': 'newORG',
    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.orgs = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render orgs view');

        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.orgs));
            this.$el.html(template);
            // DOM cache stuff on form fields
            this.orgName = this.$('#organization_name');
            this.orgEmail = this.$('#billing_email');
        }
        this.$el.removeClass("hide").addClass("show");
    },

    /*
    * New ORG
    */
    newORG: function(event){
        event.preventDefault();
        console.log('new org event');

         // view cache
        var view = this;

        // known also as a username.
        //var account = this.account; 

        var orgName = this.orgName.val();

        var orgEmail = this.orgEmail.val();

        var org = new fun.models.Org({
            account: orgName,
            email: orgEmail
        });

        org.save();
        
        // Clear the stuff from the inputs ;)
        view.$('#organization_name').val('');
        view.$('#billing_email').val('');

        window.location = fun.conf.hash.settings;

        // where is the uuid of the new org?
    }
});