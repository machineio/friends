fun.views.campaigns = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #create-campaign-btn': 'createCampaign',
    },

    /*
    * Class constructor
    */
    initialize: function(options){
        fun.containers.campaigns = this.$el;
    },

    /*
    * Render view
    */
    render: function(){
        'use strict';
        var account,
            template;

        console.log('render campaigns view');
        account = localStorage.getItem("username");

        if (!this.$el.html()){
            template = _.template(fun.utils.getTemplate(fun.conf.templates.campaigns)
            )({'account':account});
            this.$el.html(template);
            // DOM cache stuff on form fields
            this.campaignName = this.$('#campaign_name');
            this.campaignDescription = this.$('#campaign_description');
            
            this.account = account;
        }
        this.$el.removeClass("hide").addClass("show");
    },

    /*
    * Render campaigns list
    */
    renderCampaignsList: function(campaigns){
        'use strict';
        var template,
            allCampaigns;
        console.log('render campaigns list');
        if (campaigns) {
            this.campaigns = campaigns;
        }

        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.allCampaigns)
        );

        allCampaigns = this.$('#all-campaigns-tab');

        allCampaigns.html(template);

        this.tbody = this.$('#campaigns-list > tbody');

        this.$el.removeClass("hide").addClass("show");
        
        this.renderCampaignRows();
    },

    /*
    * Render campaign rows
    */
    renderCampaignRows: function(){
        'use strict';
        var length,
            i = 0,
            rows,
            data,
            template;
        // campaigns length
        length = this.campaigns.length;

        console.log('campaigns length: ',length);

        if (length > 0){
            rows = this.tbody.html('');
            for (i; i < length; ++i) {
                data = _.extend(this.campaigns.at(i).toJSON(), {i:i});

                template = _.template(
                    fun.utils.getTemplate(fun.conf.templates.campaignRow)
                )(data);

                rows.append(template);
            }
        } else {
            this.noCampaigns();
        }
    },

    /*
    * No campaigns
    */
    noCampaigns: function(){
        'use strict';
        var template,
            noCampaigns;
        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.warning)
        )({message:'noDataAvailable'});

        noCampaigns = this.$('#no-campaigns');

        noCampaigns.html(template);
    },

    /*
    * Create campaign
    */
    createCampaign: function(event){
        'use strict';
        event.preventDefault();
        // view cache
        var view = this,
            account,
            campaign,
            campaignName,
            campaignDescription,
            campaignPayload;

        console.log('create campaign event');

        this.campaignName = this.$('#campaign_name');
        this.campaignDescription = this.$('#campaign_description');

        account = this.account;

        campaignName = this.campaignName.val();

        campaignDescription = this.campaignDescription.val();

        console.log(account, campaignName, campaignDescription);

        campaignPayload = {
            account: account,
            name: campaignName,
            description: campaignDescription
        };

        if (account != undefined & campaignName != undefined){
            campaign = new fun.models.Campaign(campaignPayload);
            campaign.save();
        }

        // Clear the stuff from the inputs ;)
        view.$('#campaign_name').val('');
        view.$('#campaign_description').val('');
    }
});