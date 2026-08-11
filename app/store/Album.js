Ext.define('MyApp.store.Album', {
    extend: 'Ext.data.Store',
    alias: 'store.album',
    model: 'MyApp.model.Album',

    autoLoad: true,
    pageSize: 10,

    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/albums/',

        reader: {
            type: 'json'
        }
    }
});