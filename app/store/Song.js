Ext.define('MyApp.store.Song', {
    extend: 'Ext.data.Store',
    alias: 'store.song',
    model: 'MyApp.model.Song',

    autoLoad: true,
    pageSize: 10,

    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/songs/',

        reader: {
            type: 'json'
        }
    }
});