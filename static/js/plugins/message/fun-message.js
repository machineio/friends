(function($) {
    $.funMessage = function(config) {

        var defaults, options, container, funMessage, content, title, text, close;

        defaults = {
            type: ''
            , title: ''
            , text: ''
            , lifetime: 6500
            , sticky: false
            , position: 'bottom-right'
            , closeTrigger: true
            , onOpen: function () {}
            , onClose: function () {}
        };

        options = $.extend(defaults, config);
        
        container = $('.funMessage-container.' + options.position);

        if (!container.length) {
            container = $('<div>', {
                'class': 'funMessage-container ' + options.position
            }).appendTo ('body');
        }

        funMessage = $('<div>', {
            'class': 'funMessage ' + options.type
        });

        content = $('<div>', {
            'class': 'funMessage-content'
        }).appendTo (funMessage);

        text = $('<span>', {
            text: options.text
        }).appendTo (content);

        if (options.closeTrigger) {
            close = $('<div>', {
                'class': 'funMessage-close'
                , 'click': function (e) {
                    e.preventDefault ();
                    $(this).parent ().fadeOut ('medium', function () {
                        $(this).remove ();
                        if (typeof options.onClose === 'function') {
                            options.onClose ();
                        }
                    });
                }
            }).appendTo (funMessage);
        }

        if (options.title != '') {
            title = $('<h4>', {
                text: options.title
            }).prependTo (content);
        }

        if (options.lifetime > 0 && !options.sticky) {
            setTimeout (function () {
                if (typeof options.onClose === 'function') {
                    options.onClose ();
                }
                funMessage.fadeOut ('medium', function () { $(this).remove (); });
            }, options.lifetime);
        }

        container.addClass (options.position);

        if (options.position.split ('-')[0] == 'top') {
            funMessage.prependTo (container).hide ().fadeIn ('slow');
        } else {
            funMessage.appendTo (container).hide ().fadeIn ('slow');
        }

        if (typeof options.onOpen === 'function') {
            options.onOpen ();
        }
    }
})(jQuery);
