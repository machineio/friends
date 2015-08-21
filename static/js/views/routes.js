fun.views.routes = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {
        "click #create-route-btn": "createRoute",
        "click .route-popup": "routeDetails",
        "click #update-route-btn": "updateRoute",
        "click #close-route-btn": "closeRoute",
        "click input[name='route_status']": 'updateStatus'
    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.routes = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render tasts view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.routes));

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");

        if (typeof(account) === 'undefined'){
            this.account = localStorage.getItem("username");
        }
    },

     /*
    * Render routes list
    */
    renderRoutesList: function(routes){
        'use strict';
        var template,
            allRoutes;
        console.log('render routes list');
        if (routes) {
            this.routes = routes;
        }

        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.allRoutes)
        );

        allRoutes = this.$('#all-routes-tab');

        allRoutes.html(template);

        this.tbody = this.$('#routes-list > tbody');

        this.$el.removeClass("hide").addClass("show");
        
        this.renderRouteRows();
    },

    /*
    * Render route rows
    */
    renderRouteRows: function(){
        'use strict';
        var length,
            i = 0,
            rows,
            data,
            template;
        // routes length
        length = this.routes.length;

        console.log('routes length: ',length);

        if (length > 0){
            rows = this.tbody.html('');
            for (i; i < length; ++i) {
                data = _.extend(this.routes.at(i).toJSON(), {i:i});

                template = _.template(
                    fun.utils.getTemplate(fun.conf.templates.routeRow)
                )(data);

                rows.append(template);
            }
        } else {
            this.noRoutes();
        }
    },

    /*
    * No routes
    */
    noRoutes: function(){
        'use strict';
        var template,
            noRoutes;
        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.warning)
        )({message:'noDataAvailable'});

        noRoutes = this.$('#no-routes');

        noRoutes.html(template);
    },

    /*
    * Create route
    */
    createRoute: function(event){
        'use strict';
        event.preventDefault();
        // view cache
        var view = this,
            account,
            route,
            routeName,
            routeDescription,
            routeLabel,
            routePayload,
            profile,
            first_name,
            last_name,
            user;

        console.log('create route event');

        this.routeName = this.$('#route_name');
        this.routeDescription = this.$('#route_description');
        this.routeLabel = 'Service Requests';

        account = this.account;

        routeName = this.routeName.val();

        routeDescription = this.routeDescription.val();

        routeLabel = this.routeLabel;

        console.log(account, routeName, routeDescription, routeLabel);

        routePayload = {
            title: routeName,
            description: routeDescription,
            label: routeLabel
        };

        profile = JSON.parse(localStorage.getItem("profile"));

        user = new fun.models.User(profile);

        user.fetch()

        console.log(user.get('uuid'));
        console.log(user.get('first_name'));

        if (typeof(user.get('first_name')) === 'undefined'){
            first_name = 'Mauricio'
        } else {
            first_name = user.get('first_name');
        }

        if (typeof(user.get('last_name')) === 'undefined'){
            last_name = 'Montero'
        } else {
            last_name = user.get('last_name');
        }

        routePayload['first_name'] = first_name;
        routePayload['last_name'] = last_name;
        routePayload['email'] = user.get('email');

        //console.log(JSON.stringify(profile));

        if (typeof(account) === undefined){
            account = false;
            routePayload['public'] = account;
        }

        if (account != undefined & routeName != undefined){
            routePayload['account'] = account;
            
        }

        route = new fun.models.Route(routePayload);
        route.save();

        // Clear the stuff from the inputs ;)
        view.$('#route_name').val('');
        view.$('#route_description').val('');
    },
    
    /*
    * Route details
    */
    routeDetails: function(event){
        'use strict';
        event.preventDefault();
        //view cache
        var view = this,
            route,
            name,
            routeUuid,
            routeTitle,
            routeAssigned,
            routeLabel,
            routeSource,
            routeStatus,
            routePriority,
            routeSeverity,
            routeDescription;

        routeUuid = this.$('#route-uuid');
        routeTitle = this.$('#route-title');
        routeAssigned = this.$('#route-assigned');
        routeLabel = this.$('#route-label');
        routeSource = this.$('#route-source');
        routeStatus = this.$('#route-status');
        routePriority = this.$('#route-priority');
        routeSeverity = this.$('#route-severity');
        routeDescription = this.$('#route-description');

        // get the name of the element targeted by this event
        name = $(event.target).data('name');

        route = new fun.models.Route({'uuid':name});

        route.fetch({
            success: function(response){

                //console.log(response)

                routeUuid.html(response.get('uuid'));
                routeTitle.html(response.get('title') || "Where's the title boy?");
                routeAssigned.html(response.get('assigned'));
                routeLabel.html(response.get('label'));
                routeSource.html(response.get('source'));
                routeStatus.html(response.get('status'));
                routePriority.html(response.get('priority'));
                routeSeverity.html(response.get('severity'));
                routeDescription.html(response.get('description'));

                $('#routeModal').modal({
                    'show': true
                });
            },
            error: function(error){
                console.log(error);
            }
        });
        //console.log(route.toJSON());
    },

    /*
    * Update Route Status
    */
    updateStatus: function(event){
        'use strict';
        event.preventDefault();
        var view = this,
                   idVal,
                   label,
                   callbacks;

        console.log('update status');

        // new user account callbacks
        callbacks = {
            success: function(){
                console.log('new account success');
            },

            error: function(model, error){
                console.log('wrong stuff on account create');
                console.log(model, error);
            }
        };

        $('input[name="route_status"]:checked').each(function() {
            idVal = $(this).attr("id");

            label = $("label[for='" + idVal + "']").text();

            console.log(label);

            this.status = label;

            if (label === 'active'){
                /*
                this.model = new fun.models.Account();
                this.model.save(
                    {
                        account: stuff['account'],
                        password: stuff['password'],
                        email: stuff['email']
                    },
                    callbacks
                );
                */
            }

            // missing switch and case stuff...
            // using now, later and done?

        });
    },

    /*
    * Update Route
    */
    updateRoute: function(event){
        'use strict';
        event.preventDefault();
        var view = this,
                   update,
                   status,
                   comment,
                   routeUuid,
                   callbacks;

        this.status= $('input[name="route_status"]:checked');
        this.comment = this.$('#route-comment');
        this.uuid = this.$('#route-uuid');

        console.log('update route');

        routeUuid = this.uuid.text();
        status = this.status.val();
        comment = this.comment.val();

        update = new fun.models.Route({'uuid':routeUuid});

        var newRandomStuff = {
            'status': status,
            'comments': {
                comments: [{
                    account: this.account,
                    comment: comment
                }]
            }
        };

        update.save(newRandomStuff, {patch: true});

    },

    /*
    * Close Route
    */
    closeRoute: function(event){
        'use strict';
        event.preventDefault();
        var view = this,
                   callbacks;

        console.log('close route');

        $('#routeModal').modal('hide');
    }

});