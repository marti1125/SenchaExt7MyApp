Ext.define('MyApp.store.Artist', {
    extend: 'Ext.data.Store',
    alias: 'store.artist',
    model: 'MyApp.model.Artist',

    autoLoad: true,
    pageSize: 10,

    groupField: 'song_title',

    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/artists/',

        reader: {
            type: 'json'
        }
    }
});