fun.views.subheader = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events : {
        'click #call-btn': 'call',
    },
    
    /**
     * Class constructor
     */
    initialize : function(options) {
        fun.containers.subheader = this.$el;

        // get account and context
        this.account = localStorage.getItem("username");
        this.context = sessionStorage.getItem("context");

        fun.omnibus.on("change:context", function(){
            this.renderHeadNav();
        }, this);
    },
    
    /**
     * Render the subheader view
     */
    render : function(header){
        'use strict';
        var data, template;
        
        if(header){
            this.header = header;
        } else {
            this.header = 'nonsense';
        }

        data = {
            header:this.header
        };

        template = _.template(fun.utils.getTemplate(fun.conf.templates.subheader))(data);

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
    },

    renderHeadNav : function(){
        'use strict';
        var template,
            headNav,
            account, 
            context;

        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.headNav)
        );

        headNav = this.$('#fun-head-nav');

        headNav.html(template);

        account = localStorage.getItem("username");
        context = sessionStorage.getItem("context");

        console.log(
            fun.utils.format('username: %s, context: %s', account, context)
        );
        
        if (account !== context && typeof(context) !== 'undefined' && context !== null){
            console.log('ORG context');
            this.$('#head-nav-phone').removeClass('show').addClass('hide');
            this.$('#head-nav-members').removeClass('hide').addClass('show');
            this.$('#head-nav-teams').removeClass('hide').addClass('show');
            this.$('#head-nav-contacts').removeClass('show').addClass('hide');
            this.$('#head-nav-companies').removeClass('show').addClass('hide');
            this.$('#head-nav-gateways').removeClass('show').addClass('hide');
            this.$('#head-nav-cubes').removeClass('show').addClass('hide');
            this.$('#head-nav-activity').removeClass('hide').addClass('show');
            //this.$('#head-nav-servers').removeClass('show').addClass('hide');
            this.$('#head-nav-accounts').removeClass('show').addClass('hide');
        } else {
            console.log('User account');
            this.$('#head-nav-phone').removeClass('hide').addClass('show');
            this.$('#head-nav-members').removeClass('show').addClass('hide');
            this.$('#head-nav-resources').removeClass('show').addClass('hide');
            this.$('#head-nav-accounts').removeClass('show').addClass('hide');
            this.$('#head-nav-gateways').removeClass('show').addClass('hide');
            this.$('#head-nav-contacts').removeClass('hide').addClass('show');
            this.$('#head-nav-teams').removeClass('show').addClass('hide');   
            this.$('#head-nav-activity').removeClass('show').addClass('hide');
        }

        if (context !== 'undefined' && context !== null && context.trim() === 'System Admin'){
            console.log('System Admin and stuff');
            this.$('#head-nav-phone').removeClass('show').addClass('hide');
            this.$('#head-nav-teams').removeClass('show').addClass('hide');
            this.$('#head-nav-members').removeClass('show').addClass('hide');
            this.$('#head-nav-resources').removeClass('hide').addClass('show');
            this.$('#head-nav-accounts').removeClass('hide').addClass('show');
            this.$('#head-nav-cubes').removeClass('hide').addClass('show');
        }
    },

    renderHeadNavAdmin: function(){
        'use strict';
    },

    renderHeadNavCampaigns : function(){
        'use strict';
        var template, headNav;
        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.headNavCampaigns)
        );

        headNav = this.$('#fun-head-nav');

        headNav.html(template);
    },

    renderHeadNavReports : function(){
        'use strict';
        var template, headNav;
        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.headNavReports)
        );

        headNav = this.$('#fun-head-nav');

        headNav.html(template);
    },

    call: function(event) {
        'use strict';
        event.preventDefault();
        console.log('call some fucking one');
    }

});
