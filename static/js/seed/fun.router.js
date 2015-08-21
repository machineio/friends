/*
* In a client-server architecture routes are resource address capability service nouns.
*/
fun.Router = Backbone.Router.extend({

    /*
     Seed server routes
    */
    routes: {
        "": "home",
        "home": "home",
        "landing": "landing",
        "dashboard": "dashboard",        
        "dashboard/a:account": "dashboard",
        "dashboard/a:account/o:org": "dashboard",
        "signup": "signup",
        "login": "login",

        "howto": "howto",
        "features": "features",
        "enterprise": "enterprise",
        "terms": "terms",
        "security": "security",
        "privacy": "privacy",
        "blog": "blog",
        "status": "status",
        "developers": "developers",
        "help": "help",

        "contacts": "contacts",
        "contacts/p:page": "contacts",

        "tasks": "tasks",
        "tasks/p:page": "tasks",

        "routes": "routes",
        "routes/p:page": "routes",

        "companies": "companies",
        "companies/p:page": "companies",

        "campaigns": "campaigns",
        "cubes": "cubes",
        "orgs": "orgs",
        "activity": "activity",
        "profile": "profile",
        "members": "members",
        "teams": "teams",

        "reports": "reports",
        "reports/p:page": "reports",
        
        "phone": "phone",
        "numbers": "phone_numbers",
        "carriers": "carriers",
        
        "sounds":"sounds",
        "recordings": "recordings",
        "gateways": "gateways",
        "support": "support",

        "settings": "settings",
        "logout": "logout"
    },

    initialize: function(){
        'use strict';
        // navigation bar
        fun.instances.navbar = new fun.views.navbar({
            el:"#fun-navbar"
        });

        // sub header
        fun.instances.subheader = new fun.views.subheader({
            el:"#fun-subheader"
        });

        // landing
        fun.instances.landing = new fun.views.landing({
            el:"#fun-landing"
        });

        // howto
        fun.instances.howto = new fun.views.howto({
            el:"#fun-howto"
        });

        // features
        fun.instances.features = new fun.views.features({
            el:"#fun-features"
        });

        // enterprise
        fun.instances.enterprise = new fun.views.enterprise({
            el:"#fun-enterprise"
        });

        // terms
        fun.instances.terms = new fun.views.terms({
            el:"#fun-terms"
        });

        // privacy
        fun.instances.privacy = new fun.views.privacy({
            el:"#fun-privacy"
        });

        // security
        fun.instances.security = new fun.views.security({
            el:"#fun-security"
        });

        // blog
        fun.instances.blog = new fun.views.blog({
            el:"#fun-blog"
        });

        // status
        fun.instances.status = new fun.views.status({
            el:"#fun-status"
        });

        // developers
        fun.instances.developers = new fun.views.developers({
            el:"#fun-developers"
        });

        // help
        fun.instances.help = new fun.views.help({
            el:"#fun-help"
        });

        // login
        fun.instances.login = new fun.views.login({
            el:"#fun-login"
        });

        // dashboard
        fun.instances.dashboard = new fun.views.dashboard({
            el:"#fun-dashboard"
        });

        // orgs
        fun.instances.orgs = new fun.views.orgs({
            el:"#fun-orgs"
        });

        // profile
        fun.instances.profile = new fun.views.profile({
            el:"#fun-profile"
        });

        // activity
        fun.instances.activity = new fun.views.activity({
            el:"#fun-activity"
        });

        // members
        fun.instances.members = new fun.views.members({
            el:"#fun-members"
        });

        // teams
        fun.instances.teams = new fun.views.teams({
            el:"#fun-teams"
        });

        // phone
        fun.instances.phone = new fun.views.phone({
            el:"#fun-phone"
        });

        // phone numbers
        fun.instances.phoneNumbers = new fun.views.phoneNumbers({
            el:"#fun-phone-numbers"
        });

        // gateways
        fun.instances.gateways = new fun.views.gateways({
            el:"#fun-gateways"
        });

        // carriers
        fun.instances.carriers = new fun.views.carriers({
            el:"#fun-carriers"
        });

        // tasks
        fun.instances.tasks = new fun.views.tasks({
            el:"#fun-tasks"
        });

        // companies
        fun.instances.companies = new fun.views.companies({
            el:"#fun-companies"
        });

        // campaigns
        fun.instances.campaigns = new fun.views.campaigns({
            el:"#fun-campaigns"
        });

        // contacts
        fun.instances.contacts = new fun.views.contacts({
            el:"#fun-contacts"
        });
        
        // cubes
        fun.instances.cubes = new fun.views.cubes({
            el:"#fun-cubes"
        });

        // recordings
        fun.instances.recordings = new fun.views.recordings({
            el:"#fun-recordings"
        });
        
        // sounds
        fun.instances.sounds = new fun.views.sounds({
            el:"#fun-sounds"
        });

        // reports
        fun.instances.reports = new fun.views.reports({
            el:"#fun-reports"
        });
        
        // support
        fun.instances.support = new fun.views.support({
            el:"#fun-support"
        });

        // signup
        fun.instances.signup = new fun.views.signup({
            el:"#fun-signup"
        });
        
        // settings
        fun.instances.settings = new fun.views.settings({
            el:"#fun-settings"
        });

        // extra
        fun.instances.extra = new fun.views.extra({
            el:"#fun-extra"
        });

        // footer
        fun.instances.footer = new fun.views.footer({
            el:"#fun-footer"
        });
    },
    
    home: function(){
        'use strict';
        console.log('spawn some fun get account and context');

        // get account and context
        this.account = localStorage.getItem("username");
        this.context = sessionStorage.getItem("context");

        console.log(this.account, this.context);

        if (this.account === this.context){
            console.log('account same as context');
        } else {
            console.log('missing or different context');
        }

        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.redirect(fun.conf.hash.landing);
        }
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    landing: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.landing.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    howto: function(){
        'use strict';
        var howto = translate('howto');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(howto);
        fun.instances.howto.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    features: function(){
        'use strict';
        var features = translate('features');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        //fun.instances.subheader.render(features);
        fun.instances.features.render();
        fun.instances.footer.render();
    },

    enterprise: function(){
        'use strict';
        var enterprise = translate('enterprise');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        //fun.instances.subheader.render(enterprise);
        fun.instances.enterprise.render();
        fun.instances.footer.render();
    },

    terms: function(){
        'use strict';
        var terms = translate('terms');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(terms);
        fun.instances.terms.render();
        fun.instances.footer.render();
    },

    tasks: function(){
        'use strict';
        var tasks = translate('tasks'),
            account,
            context,
            resourceCount = 0,
            resources,
            resource,
            onSuccess;

        // get account and context
        account = localStorage.getItem("username");
        context = sessionStorage.getItem("context");

        console.log(
            fun.utils.format('username: %s, context: %s', account, context)
        );

        // first of all here on resources the stuff seems to be fine.
        // new note: wut?
        resources = {
            //account: new fun.models.Account({'account':account}),
            user: new fun.models.User({'account':account}),
            tasks: new fun.models.Tasks()            
        };

        // but, onSuccess we're rendering multiple times the same campaigns.render()
        // and that stuff is bananas. ok

        onSuccess = function(){
            if(++resourceCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.tasks.renderTasksList(
                    resources.tasks
                );

                fun.instances.settings.setProfileInformation(
                    resources.user
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(tasks);
            fun.instances.subheader.renderHeadNav();
            
            fun.instances.tasks.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        //fun.instances.footer.render();
    },

    companies: function(){
        'use strict';
        var companies = translate('companies'),
            account,
            context,
            resourceCount = 0,
            resources,
            resource,
            onSuccess;

        // get account and context
        account = localStorage.getItem("username");
        context = sessionStorage.getItem("context");

        console.log(
            fun.utils.format('username: %s, context: %s', account, context)
        );

        // first of all here on resources the stuff seems to be fine.
        // new note: wut?
        resources = {
            //account: new fun.models.Account({'account':account}),
            user: new fun.models.User({'account':account}),
            companies: new fun.models.Companies()            
        };

        // but, onSuccess we're rendering multiple times the same campaigns.render()
        // and that stuff is bananas. ok

        onSuccess = function(){
            if(++resourceCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.companies.renderCompaniesList(
                    resources.companies
                );

                fun.instances.settings.setProfileInformation(
                    resources.user
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(companies);
            fun.instances.subheader.renderHeadNav();
            
            fun.instances.companies.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        //fun.instances.footer.render();
    },

    privacy: function(){
        'use strict';
        var privacy = translate('privacy');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(privacy);
        fun.instances.privacy.render();
        fun.instances.footer.render();
    },

    security: function(){
        'use strict';
        var security = translate('security');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(security);
        fun.instances.security.render();
        fun.instances.footer.render();
    },

    blog: function(){
        'use strict';
        var blog = translate('blog');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(blog);
        fun.instances.blog.render();
        
        fun.instances.footer.render();
    },

    status: function(){
        'use strict';
        var status = translate('status');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(status);
        fun.instances.status.render();
        fun.instances.footer.render();
    },

    developers: function(){
        'use strict';
        var developers = translate('developers');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(developers);
        fun.instances.developers.render();
        fun.instances.footer.render();
    },

    help: function(){
        'use strict';
        var help = translate('help');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(help);
        fun.instances.help.render();
        //fun.instances.footer.render();
    },

    support: function(){
        'use strict';
        var support = translate('support');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(support);
        fun.instances.support.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    teams: function(){
        'use strict';
        var resourceCount = 0,
            resources,
            resource,
            account,
            context,
            teams,
            onSuccess;

        teams = translate('teams');

        context = sessionStorage.getItem("context");

        console.log(context);
        // Yeah resources bitch! fucking missing since years ago...
        resources = {
            org: new fun.models.Org({'account':context})
        };

        onSuccess = function(){
            if(++resourceCount === _.keys(resources).length){
                console.log('get resources success!');
                fun.instances.teams.render(
                    resources.org
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(teams);
            fun.instances.subheader.renderHeadNav();
            //fun.instances.teams.render();
            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        fun.instances.footer.render();
    },

    members: function(){
        'use strict';
        var resourceCount = 0,
            resources,
            resource,
            account,
            context,
            members,
            onSuccess;

        members = translate('members');

        context = sessionStorage.getItem("context");

        console.log(context);
        resources = {
            org: new fun.models.Org({'account':context})
        };

        onSuccess = function(){
            if(++resourceCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.members.render(
                    resources.org
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(members);
            fun.instances.subheader.renderHeadNav();
            // render memberss view
            //fun.instances.members.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        fun.instances.footer.render();
    },

    contacts: function(page){
        'use strict';
        var contacts,
            resourceCount,
            resources,
            resource,
            onSuccess;

        contacts = translate('contacts');
        // and now for something completely different
        resourceCount = 0;
        
        resources = {
            contacts: new fun.models.Contacts(),
            directories: new fun.models.Directories()
        };

        onSuccess = function(){
            if(++resourceCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.contacts.renderContactLists(
                    resources.contacts
                );

                fun.instances.contacts.renderDirectoryLists(
                    resources.directories
                );
            }
        };

        if (isNaN(page)) {
            page = 1;
        }

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(contacts);
            fun.instances.subheader.renderHeadNav();
            // render contacts view
            fun.instances.contacts.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        fun.instances.footer.render();
    },
    
    cubes: function(){
        'use strict';
        var cubes = translate('cubes');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(cubes);
        fun.instances.cubes.render();
        fun.instances.subheader.renderHeadNav();
        fun.instances.footer.render();
    },

    signup: function(){
        'use strict';
        var signup = translate('signup');
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render('Signup');
            fun.instances.signup.render();
        }
        //fun.instances.footer.render();
    },
    
    login: function(){
        'use strict';
        var login = translate('signIn');
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(login);
            fun.instances.login.render();
        }

        //fun.instances.footer.render();
    },
    
    dashboard: function(account, org){
        'use strict';
        var account,
            modelCount = 0,
            models,
            onSuccess,
            dashboard,
            message;

        console.log(
            fun.utils.format('account: %s, organization: %s', account, org)
        );

        if (!account){
            account = localStorage.getItem("username");
        } else {
            if (account.substring(0, 1) === ':') { 
                account = account.substring(1);
            }
        }
        
        models = {
            user: new fun.models.User({'account':account}),
            records: new fun.models.Records(),
            billings: new fun.models.Billings(),
            summary: new fun.models.Summary(),
            lapseSummary: new fun.models.LapseSummary({
                lapse: 'hours'
            })
        };

        if (org) {
            models.org = new fun.models.Org({'account': org});
            
            // Set custom url tree, it's not a tree but you got it...
            // window.history.pushState('orgDashboard', 'Dashboard', '/orgs/iofun/dashboard');
        }

        onSuccess = function(){
            if(++modelCount === _.keys(models).length){
                console.log('spawn daemon success!');

                fun.instances.dashboard.renderLatestRecords(
                    models.records
                );

                fun.instances.dashboard.renderTodaySummary(
                    models.summary, models.billing
                );

                fun.instances.dashboard.renderTodayActivityChart(
                    models.lapseSummary
                );

                fun.instances.dashboard.renderAccountDropdown(
                    models.user
                );

                // need to pass stuff to renderRecordType()                   
                fun.instances.dashboard.renderRecordType();

                // set profile info
                fun.instances.settings.setProfileInformation(
                    models.user
                );
            }
        };

        if(fun.utils.loggedIn()){

            dashboard = translate('dashboard');

            fun.utils.hideAll();
            fun.instances.navbar.render();

            fun.instances.subheader.render(dashboard);
            fun.instances.subheader.renderHeadNav();

            fun.instances.dashboard.render();
            for (message in models){
                models[message].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        fun.instances.footer.render();
    },

    campaigns: function(){
        'use strict';
        var campaigns,
            account,
            context,
            resourceCount = 0,
            resources,
            resource,
            onSuccess;

        campaigns = translate('campaigns');

        // get account and context
        account = localStorage.getItem("username");
        context = sessionStorage.getItem("context");

        console.log(
            fun.utils.format('username: %s, context: %s', account, context)
        );

        // first of all here on resources the stuff seems to be fine.

        resources = {
            //account: new fun.models.Account({'account':account}),
            user: new fun.models.User({'account':account}),
            campaigns: new fun.models.Campaigns()            
        };

        // but, onSuccess we're rendering multiple times the same campaigns.render()
        // and that stuff is bananas. ok

        onSuccess = function(){
            if(++resourceCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.campaigns.renderCampaignsList(
                    resources.campaigns
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(campaigns);
            fun.instances.subheader.renderHeadNav();
            
            fun.instances.campaigns.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        //fun.instances.footer.render();
    },

    carriers: function(){
        'use strict';

        var carriers = translate('carriers');

        fun.utils.hideAll();

        fun.instances.navbar.render();

        fun.instances.subheader.render(carriers);

        fun.instances.subheader.renderHeadNav();

        fun.instances.carriers.render();
        
        //fun.instances.footer.render();
    },

    gateways: function(){
        'use strict';

        var gateways = translate('gateways');

        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(gateways);
        fun.instances.subheader.renderHeadNav();

        fun.instances.gateways.render();
        
        //fun.instances.footer.render();
    },

    orgs: function(){
        'use strict';
        var organizations = translate('organizations');
        
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(organizations);
        fun.instances.subheader.renderHeadNav();
        fun.instances.orgs.render();
        
        //fun.instances.footer.render();
    },

    profile: function(){
        'use strict';
        var profile = translate('profile');

        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(profile);
        fun.instances.profile.render();
        
        fun.instances.footer.render();
    },

    activity: function(){
        'use strict';
        var activity = translate('activity');

        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(activity);
        fun.instances.subheader.renderHeadNav();
        fun.instances.activity.render();
        
        fun.instances.footer.render();
    },

    phone: function(){
        'use strict';
        var phone = translate('phone');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(phone);
        fun.instances.phone.render();
        //fun.instances.footer.render();
    },

    phoneNumbers: function(){
        'use strict';
        var numbers = translate('numbers');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(numbers);
        fun.instances.phoneNumbers.render();
        fun.instances.footer.render();
    },

    sounds: function(){
        'use strict';
        var sounds = translate('sounds');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(sounds);
        fun.instances.subheader.renderHeadNavCampaigns();
        fun.instances.sounds.render();
        //fun.instances.footer.render();
    },

    reports: function(page){
        'use strict';
        if(fun.utils.loggedIn()){
            var reports = translate('reports');
            fun.utils.hideAll();
            fun.instances.navbar.render();

            fun.instances.subheader.render(reports);
            fun.instances.subheader.renderHeadNavReports();

            fun.instances.reports.render();
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        
        fun.instances.footer.render();
    },

    recordings: function(){
        recordings = translate('recordings');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(recordings);
        fun.instances.subheader.renderHeadNavCampaigns();
        fun.instances.recordings.render();
        fun.instances.footer.render();
    },

    settings: function(){
        'use strict';
        this.account = localStorage.getItem("username");
        var settings = translate('settings');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(settings);
        fun.instances.settings.render(this.account);
        //fun.instances.footer.render();
    },

    logout: function(){
        'use strict';
        var goodBye = translate('goodBye'),
            onSuccess;

        onSuccess = function(){
            fun.instances.navbar.render()
        };

        fun.utils.hideAll();

        fun.utils.logout({
            success: function() {
                console.log('fuck error with kika and success!');
            },
            error: onSuccess
        });

        fun.instances.subheader.render(goodBye);      
        fun.instances.login.render();
        //fun.instances.footer.render();
    }
});

// init the shit out of this
$(function(){
    fun.instances.router = new fun.Router();
    Backbone.history.start();
});
