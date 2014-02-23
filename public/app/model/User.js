/**
 * Created by Iruna on 23.02.14.
 */
Ext.define('DL.model.User', {
    extend: 'Ext.data.Model',

    proxy: {
        type: 'rest',
        url : '/users',
        reader: {
            type: 'json',
            root: 'User'
        }
    },

    fields: [
        {
            name: 'login'
        },{
            name: 'password'
        },
        {
            name: 'firstName'
        },
        {
            name: 'lastName'
        },
        {
            name: 'email'
        },
        {
            name: 'permissions'
        },
        {
            name: '_id',
            defaultValue: null
        }
    ]
});