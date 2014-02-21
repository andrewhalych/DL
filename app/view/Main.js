Ext.define('DL.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'DL.view.XTitlebar'
    ],

    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'xtitlebar'
        }

    ]
});