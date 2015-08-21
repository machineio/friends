fun.views.members = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #new-member-btn': 'addMember',
    },

    /*
    * Class constructor
    */
    initialize: function(options){
        fun.containers.members = this.$el;

        this.account = localStorage.getItem("username");
    },

    /*
    * Render view
    */
    render: function(org){
        'use strict';
        var data,
            context,
            template;

        console.log('render members view');

        context = sessionStorage.getItem("context");

        if (org) {
            this.members = org.get("members");
        }

        data = {
            'org': context,
            'name': false,
            'description': false,
            'email': 'example@example.com',
            'location': 'Mars',
            'uri': 'http://iofun.io'
        };

        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.members)
        )(data);

        this.$el.html(template);
        this.membersList = this.$('#members-list');
        this.$el.removeClass("hide").addClass("show");
        this.renderMemberRows();
    },

    /*
    * Render member rows
    */
    renderMemberRows: function(){
        'use strict';
        
        var i = 0,
            length,
            memberData,
            itemData,
            itemTemplate;

        length = this.members.length;

        if (length > 0){

            // da fuq dude?
            for ( i; i < length; ++i ) {

                memberData = {
                    'member': this.members[i]
                };

                itemData = _.extend(memberData, {i:i+1});

                itemTemplate = _.template(
                    fun.utils.getTemplate(fun.conf.templates.memberRow)
                )(itemData);

                this.membersList.append(itemTemplate);
            }
        }
    },

    /*
    * Add member
    */
    addMember: function(){
        console.log("new member event");
    }
});