Ext.define('DL.controller.Main', {
    extend: 'Ext.app.Controller',
    views:['DL.view.XTitlebar'],
    refs:{
        ref: 'loginBtn',
        selector: 'xtitlebar #login-btn'
    },
    init: function(){
        this.control({
                'loginBtn': {
                    click: this.getLoginPanel
                }

        })
    },

    getLoginPanel: function(){
        console.log(arguments)
    }
});
