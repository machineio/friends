fun.views.teams = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #new-team-btn': 'addTeam',
    },

    /*
    * Class constructor
    */
    initialize: function(options){
        fun.containers.teams = this.$el;
        // get username account from localStorage
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

        console.log('render teams view');

        context = sessionStorage.getItem("context");

        if (org){
            this.teams = org.get("teams");
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
            fun.utils.getTemplate(fun.conf.templates.teams)
        )(data);

        this.$el.html(template);
        this.teamsList = this.$('#teams-list');
        this.$el.removeClass("hide").addClass("show");
        this.renderTeamRows();
    },

    /*
    * Render team rows
    */
    renderTeamRows: function(){
        'use strict';
        console.log('render team rows');
        var i = 0,
            length,
            teamData,
            itemData,
            innerDiv,
            itemTemplate;

        //length = this.teams.length;
        length = 10;

        if(length > 0){

            // please see if _.each make sense here.
            for (i; i < length; ++i){
                teamData = this.teams[i];
                itemData = _.extend(teamData, {i:i+1});

                if ((i+1) % 2 !== 0){
                    this.innerDiv = document.createElement('div');
                    this.innerDiv.className = 'row';
                }

                itemTemplate = _.template(
                    fun.utils.getTemplate(fun.conf.templates.teamRow)
                )(itemData);

                $(itemTemplate).appendTo(this.innerDiv);

                if ((i+1) % 2 === 0){
                    this.teamsList.append(this.innerDiv);
                }

                // need to check for errors on single or N % !== 0 values.
            }
        }
    },

    /*
    * Add team
    */
    addTeam: function(){
        console.log("new team event");
    }
});