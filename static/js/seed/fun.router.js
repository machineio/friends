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
        "contact": "contact",
        "rooms": "rooms",
        "gallery": "gallery",
        "landing": "landing",
        "settings": "settings"
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

        // extra
        fun.instances.extra = new fun.views.extra({
            el:"#fun-extra"
        });

        // contact
        fun.instances.contact = new fun.views.contact({
            el:"#fun-contact"
        })

        // rooms
        fun.instances.rooms = new fun.views.rooms({
            el:"#fun-rooms"
        })

        // contact
        fun.instances.gallery = new fun.views.gallery({
            el:"#fun-gallery"
        })

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
        fun.utils.showLanding();
        fun.instances.navbar.render();
        fun.instances.landing.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    contact: function(){
        'use strict';
        var contact = translate('contact');

        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        //fun.instances.subheader.render(contact);
        fun.instances.contact.render();
        fun.instances.footer.render();
    },

    rooms: function(){
        'use strict';
        var rooms = translate('rooms');
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        //fun.instances.subheader.render(rooms)
        fun.instances.rooms.render();
        fun.instances.footer.render();
    },

    gallery: function(){
        'use strict';
        var gallery = translate('gallery');
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        //fun.instances.subheader.render(gallery);
        fun.instances.gallery.render();
        fun.instances.footer.render();
    }
});

// init the shit out of this
$(function(){
    fun.instances.router = new fun.Router();
    Backbone.history.start();
});
