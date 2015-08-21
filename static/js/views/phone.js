fun.views.phone = Backbone.View.extend({

	events: {
        "click #btn-call": 'sipInvite',
        "click #btn-hangup": 'sipBye',
        "click #btn-message": 'sipMessage',
        "click #digit-0": 'digitZero',
        "click #digit-1": 'digitOne',
        "click #digit-2": 'digitTwo',
        "click #digit-3": 'digitThree',
        "click #digit-4": 'digitFour',
        "click #digit-5": 'digitFive',
        "click #digit-6": 'digitSix',
        "click #digit-7": 'digitSeven',
        "click #digit-8": 'digitEight',
        "click #digit-9": 'digitNine',
	},

	initialize: function(options){
		fun.containers.phone = this.$el;
	},

	render: function(){
		var template = _.template(
			fun.utils.getTemplate(fun.conf.templates.phone)
		);

        var session;

        var configuration = {
            uri: 'sip:godstybba@sip.iofun.io',
            password: 'zafary',
            wsServers: 'ws://sip.iofun.io:10080',
            displayName: 'godstybba',
            authorizationUser: 'godstybba',
            register: true,
            registerExpires: 900,
            stunServers: ["coturn.iofun.io:3478"],
            turnServers: {
                    server: "turn:coturn.iofun.io:3478",
                    username: "godstybba",
                    password: "zafary"
                },
        };

        var userAgent = new SIP.UA(configuration);
        this.userAgent= userAgent;

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");

        //here you determine whether the call has video and audio
        var options = {
            media: {
                constraints: {
                    audio: true,
                    video: false
                },
                render: {
                    remote: document.getElementById('remoteVideo'),
                    local: document.getElementById('localVideo')
                }
            }
        };
        this.options = options;

        this.renderDialBox();

	},

	renderDialBox: function(){
        console.log('render dialpad box');
        
        var template = _.template(
        	fun.utils.getTemplate(fun.conf.templates.dialpad)
        );

        var dialpad = this.$('#fun-dialpad');
        dialpad.html(template);  
    },

    sipInvite: function(event){
        'use strict';
        var userAgent,
            options;

        userAgent = this.userAgent;
        options = this.options;

        event.preventDefault();

        console.log('sip invite');
        this.session = userAgent.invite('sip:500@sip.iofun.io', options);
    },

    sipBye: function(event){
        'use strict';
        var session = this.session,
            options;

        event.preventDefault();
        session.bye();
        console.log("Sending SIP BYE Method");
    },

    sipMessage: function(event){
        'use strict';
        event.preventDefault();
        console.log('Sending SIP MESSAGE Method');
    },

    digitZero: function(event){
        'use strict';
        event.preventDefault();
        console.log('digit zero');
    },

    digitOne: function(event){
        'use strict';
        event.preventDefault();
        console.log('digit one');
    },

    digitTwo: function(event){
        'use strict';
        event.preventDefault();
        console.log('digit two')
    },

    digitFive: function(event){
        'use strict';
        event.preventDefault();
        console.log('digit five')
    }

});