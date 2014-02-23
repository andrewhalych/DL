Ext.define('DL.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'DL.view.XTitlebar'
    ],

    xtype: 'app-main',
    id: 'app-main',
    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'xtitlebar'
        }
//        {
//            xtype: 'slideMenu'
//        }

    ],

    initComponent: function(){
        this.callParent();
    }
});