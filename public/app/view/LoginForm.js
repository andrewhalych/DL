/**
 * Created by Iruna on 21.02.14.
 */
Ext.define('DL.view.LoginForm', {
    extend:'Ext.Panel',
    xtype: 'login-form',
    alias: 'widget.login-form',

    config: {
        layout: {
            type: 'vbox',
            align: 'left'
        },
//        width: 400,
//        modal: true,
        cls: 'login-panel',
        floating: true,
        autoRender: true,
        //        autoShow: true,
        shadow:false,

        items: [
            {
                xtype: 'form',
                cls: 'input-form',
                bodyPadding: 5,
                width: 300,
                title: 'Log In',
                titleAlign: 'center',
                // The form will submit an AJAX request to this URL when submitted
//                url: 'save-form.php',

                // Fields will be arranged vertically, stretched to full width
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'field',
                    inputType:'text',
                    fieldLabel: 'Login',
                    name: 'first',
                    allowBlank: false
                },{
                    xtype: 'field',
                    inputType:'password',
                    fieldLabel: 'Password',
                    name: 'last',
                    allowBlank: false
                }],

                // Reset and Submit buttons
                buttons: [{
                    text: 'Login',
                    formBind: true, //only enabled once the form is valid
                    disabled: true,
                    handler: function() {
                        var form = this.up('form').getForm();
                        if (form.isValid()) {
                            form.submit({
                                success: function(form, action) {
                                    Ext.Msg.alert('Success', action.result.msg);
                                },
                                failure: function(form, action) {
                                    Ext.Msg.alert('Failed', action.result.msg);
                                }
                            });
                        }
                    }
                }],
                renderTo: Ext.getBody()

            }
        ]
    },

    initComponent:function(){
        this.callParent()
    }
})