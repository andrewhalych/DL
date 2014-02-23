/**
 * Created by Iruna on 23.02.14.
 */
Ext.define('DL.store.Users', {
    extend: 'Ext.data.Store',
    model: 'DL.model.User',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});