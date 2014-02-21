/**
 * Created by Iruna on 20.02.14.
 */
Ext.define('DL.view.XTitlebar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'xtitlebar',
    alias: 'widget.xtitlebar',


    config: {
        id: 'xtitlebar',
        layout: 'hbox',
//        resizable: true,
        rtl:true,
        items:[
            {
                xtype: 'container',
                itemId: 'logo-container',
                cls: 'logo-container',
                width: 200
            },

            {
                xtype:'container',
                html:'<div>Львівський національний університет ім.Івана Франка</div><div> Факультет електроніки</div>',
                cls: 'title'

            },

            {
                text: 'Логін',
                cls: 'login-btn',
                itemId: 'login-btn',
                allowDepress :false

            },
            {
                text:"Реєстрація",
                cls:'singup-btn',
                allowDepress :false
            }
        ]
    }
})