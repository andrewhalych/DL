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
                scope:this,
                allowDepress :false


            },
            {
                text:"Реєстрація",
                cls:'singup-btn',
                allowDepress :false
            }
        ]
    },

    initComponent: function(){
        this.callParent();
//        this.down('#login-btn').setScope(this);
        this.down('#login-btn').setHandler(this.getLoginPanel);

    },

    getLoginPanel:function(){
        var panel = Ext.create('DL.view.LoginForm', {
            width: 320


//            style: {borderColor:'#000000', borderStyle:'solid', borderWidth:'1px'}
        })
//        Ext.getCmp('app-main').add(panel);
        panel.show();
    }
})