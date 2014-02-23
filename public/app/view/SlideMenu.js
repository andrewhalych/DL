/**
 * Created by Iruna on 21.02.14.
 */
Ext.define('DL.view.SlideMenu', {
    extend: 'Ext.Container',
    xtype: 'slideMenu',
    alias: 'widget.slideMenu',
//    statics: {
//        slideOffset: 2
//    },


    requires: [
        "Ext.Anim"
    ],

    config: {
        cls: 'tl-slidemenu',

        isOpen: false,
        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                flex: 1,
                height: '100%',
                items: [
                    {
                        xtype: 'container',
                        docked: 'left',
                        layout: {
                            type: 'vbox',
                            pack: 'center'
                        },
                        width: 0,
                        items: [
                            {
                                itemId: 'slidemenu-toggle',
                                cls: 'tl-slidemenu-toggle tl-event-noforwarding',
                                xtype: 'tl-toggleContainer',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        itemId: 'slidemenu-toggle-arrow',
                                        cls: 'tl-icon',
                                        xtype: 'container'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        itemId: 'slidemenu-content',
                        cls: 'tl-slidemenu-content tl-event-noforwarding',
                        xtype: 'panel',
                        layout: 'vbox',
                        flex: 1
                    },

                    {
                        cls: 'tl-general',
                        xtype: 'tl-accordion',
                        isOpen: true
                    }
                ]


            }

        ]
    },

    initComponent: function () {
        this.callParent();

        this.toggle = this.down('#slidemenu-toggle');
        this.content = this.down('#slidemenu-content');

        this.toggle.on({
            tap: {
                scope: this,
                fn: function () {
                    this.toggleMenu();
                }
            }
        });

        // just move outside the screen, so the painted event raised.
        this.setRight(-9999);
        this.on({
            scope: this,
            painted: function () {
                var offset = this._getOffset();
                this.setRight(-offset);

                Ext.defer(function () {
                    this.show();
                }, 300, this);
            }
        });
    },

    toggleMenu: function () {

        console.log("toggleMenu");

        if (this.getIsOpen()) {
            this._close();
        } else {
            this._open();
        }
    },

    _open: function () {

        var offset = this._getOffset();

        Ext.Animator.run({
            element: this.element,
            duration: 300,
            easing: 'linear',
            preserveEndState: true,
            from: {
                right: -offset
            },
            to: {
                right: 0
            }
        });

        this.setIsOpen(true);
    },

    _close: function () {

        var offset = this._getOffset();

        Ext.Animator.run({
            element: this.element,
            duration: 300,
            easing: 'linear',
            preserveEndState: true,
            from: {
                right: 0
            },
            to: {
                right: -offset
            }
        });

        this.setIsOpen(false);
    },

    _getOffset: function () {
        return this.element.getWidth() - this.self.slideOffset;
    }
});

