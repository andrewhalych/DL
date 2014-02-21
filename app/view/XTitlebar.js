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
                width: 400
            },

            {
                xtype:'container',
                html:'<div>Львівський національний університет ім.Івана Франка</div><div> Факультет електроніки</div>',
                cls: 'title'

            },
            {
                xtype: 'tbspacer',
                width:100
            },
            {
                text: 'Залогуватися',
                cls: 'login-btn'

            },
            {
                text:"Реєстрація",
                cls:'singup-btn'
            }
        ]
    }
})