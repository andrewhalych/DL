/*
 This file is generated and updated by Sencha Cmd. You can edit this file as
 needed for your application, but these edits will have to be merged by
 Sencha Cmd when upgrading.
 */

Ext.Loader.setConfig({
    disableCaching: false

});

Ext.Loader.setPath({
    'Ext': '../ext/src',
//    'CoPilot': '../common',
//    'oAuth': '../common/oAuth',
    'DL': 'app'
});


Ext.application({
    name: 'DL',

//    extend: 'DL.Application',

    autoCreateViewport: true,

    requires:{

        views: [
            'XTitlebar',
            'LoginForm'
//            'SlideMenu',

//            'ToggleContainer'
            // TODO: add views here
        ],

        controllers: [
            // TODO: add controllers here
            'Main'
        ],

        stores: [
            // TODO: add stores here
            'DL.store.Users'
        ],

        models: [
            DL.model.User
        ]

    },


    extendElement: function () {
        function clearIds(el) {
            if (el.nodeType == 1) {
                el.id = '';
                for (var i = 0; i < el.childNodes.length; i++) {
                    clearIds(el.childNodes[i]);
                }
            }
        }


        function getTransformProperty(element) {
            // Note that in some versions of IE9 it is critical that
            // msTransform appear in this list before MozTransform
            var properties = [
                'transform',
                'WebkitTransform',
                'msTransform',
                'MozTransform',
                'OTransform'
            ];
            var p;
            while (p = properties.shift()) {
                if (typeof element.style[p] != 'undefined') {
                    return p;
                }
            }
            return false;
        }

        function clearTransforms(el) {
            var transformProp = getTransformProperty(el);
            el.style[transformProp] = '';
        }

        Ext.Element.addMembers({
            clone: function () {
                var clone = this.dom.cloneNode(true);
                clearIds(clone);
                return Ext.get(clone);
            },
            clearTransforms: function () {
                clearTransforms(this.dom);
            }
        })
    },

    extendBaseComponent: function () {
        Ext.Component.addMembers({
            push: function (view) {
                this.setActiveItem(Ext.create(view));
//                return Ext.create(view);
//                console.log('static method extended');
            }
        })
    },

    onUpdated: function () {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function (buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }



});
