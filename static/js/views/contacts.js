fun.views.contacts = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {
        'change input[type=file]': 'encodeFile',
        'click #upload-csv-btn': 'uploadCSV',
        'click #get-dir-btn': 'getDirectory',
        'click #add-contact-btn': 'addContact'
    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.contacts = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        'use strict';
        var template;
        console.log('render contacts view');
        if (!this.$el.html()){
            template = _.template(fun.utils.getTemplate(fun.conf.templates.contacts));
            this.$el.html(template);
            // DOM cache stuff on form fields
            this.contactFirstName = this.$('#contact_first_name');
            this.contactLastName = this.$('#contact_last_name');
            this.newPhoneNumber = this.$('#new-phone-number');
            // directory fields
            this.directoryName = this.$('#directory_name');
            this.directoryDescription = this.$('#directory_description');
            // CSV input file
            this.exampleInputFile = this.$('#exampleInputFile');
        }
        this.newPhoneNumber.intlTelInput({
            utilsScript: "static/js/plugins/libphonenumber/utils.js"
        });
        this.$el.removeClass("hide").addClass("show");
    },

    /*
    * Render contact lists
    */
    renderContactLists: function(contacts){
        'use strict';
        var template,
            allContacts;
        console.log('render contact lists');
        if (contacts) {
            this.contacts = contacts;
        }

        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.allContacts)
        );

        allContacts = this.$('#all-contacts-tab');

        allContacts.html(template);

        this.tbody = this.$('#contacts-list > tbody');
        this.$el.removeClass("hide").addClass("show");
        this.renderContactRows();
    },

    /*
    * Render contact rows
    */
    renderContactRows: function(){
        'use strict';
        var length,
            i = 0,
            rows,
            data,
            template;
        // contacts length
        length = this.contacts.length;
        console.log(length)
        if (length > 0){
            rows = this.tbody.html('');
            for (i; i < length; ++i) {
                data = _.extend(this.contacts.at(i).toJSON(), {i:i});

                template = _.template(
                    fun.utils.getTemplate(fun.conf.templates.contactRow)
                )(data);

                rows.append(template);
            }
        } else {
            this.noContacts();
        }
    },

    /*
    * No contacts
    */
    noContacts: function(){
        'use strict';
        var template,
            noContacts;
        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.warning)
        )({message:'noDataAvailable'});

        noContacts = this.$('#no-contacts');

        noContacts.html(template);
    },

    /*
    * Render directory lists
    */
    renderDirectoryLists: function(directories){
        'use strict';
        var template,
            directoryList;
        console.log('render directory lists');
        if (directories) {
            this.directories = directories;
        }

        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.directoryList)
        );

        directoryList = this.$('#directories-tab');

        directoryList.html(template);

        this.dtbody = this.$('#directory-list > tbody');
        this.$el.removeClass("hide").addClass("show");
        this.renderDirectoryRows();
    },

    /*
    * Render directory rows
    */
    renderDirectoryRows: function(){
        'use strict';
        var length,
            i = 0,
            rows,
            data,
            template;
        // directory length
        length = this.directories.length;
        console.log(length)
        if (length > 0){
            rows = this.dtbody.html('');
            for (i; i < length; ++i) {

                data = _.extend(this.directories.at(i).toJSON(), {i:i});

                template = _.template(
                    fun.utils.getTemplate(fun.conf.templates.directoryRow)
                )(data);

                rows.append(template);
            }
        } else {
            this.noDirectories();
        }
    },

    /*
    * No directories
    */
    noDirectories: function(){
        'use strict';
        var template,
            noDirectories;
        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.warning)
        )({message:'noDataAvailable'});

        noDirectories = this.$('#no-directories');

        noDirectories.html(template);
    },

    /*
    * Encode File
    */
    encodeFile: function (event) {
        'use strict';
        var file,
            reader;
        this.model = new fun.models.Upload
        file = event.currentTarget.files[0];
        reader = new FileReader();
        reader.onload = function (fileEvent) {
            this.model.set({
                'filearg': fileEvent.target.result
            });
        }.bind(this)
        reader.onerror = function () {
            console.log("error", arguments)
        }
        reader.readAsDataURL(file);
    },

    /*
    * Upload CSV
    */
    uploadCSV: function(event){
        'use strict';
        event.preventDefault();
        var view = this,
            directoryName,
            directoryDescription,
            upload;
        
        upload = this.model;

        directoryName = this.directoryName.val();
        directoryDescription = this.directoryDescription.val();

        upload.set({
            'directory_name': directoryName,
            'directory_description': directoryDescription
        });

        upload.save();

        // Clear the stuff from the inputs ;)
        view.$('#directory_name').val('');
        view.$('#directory_description').val('');
        view.$('#filearg').val('');
    },

    /*
    * Get directory
    */
    getDirectory: function(event){
        event.preventDefault();
        console.log('getDirectory event');
    },

    /*
    * Add contact
    */
    addContact: function(event){
        'use strict';
        event.preventDefault();
        var view = this,
            firstName,
            lastName,
            newNumber,
            countryData,
            numberType,
            contact;

        console.log('new contact event');

        firstName = this.contactFirstName.val();

        lastName = this.contactLastName.val();

        newNumber = this.newPhoneNumber.intlTelInput("getNumber");

        countryData = this.newPhoneNumber.intlTelInput("getSelectedCountryData");

        numberType = this.newPhoneNumber.intlTelInput("getNumberType");

        contact = new fun.models.Contact({
            first_name: firstName,
            last_name: lastName,
            phone_number: newNumber,
            number_type: numberType
        });

        contact.save();
        
        // Clear the stuff from the inputs ;)
        view.$('#contact_first_name').val('');
        view.$('#contact_last_name').val('');
        view.$('#new-phone-number').val('');
    }
});