Ext.define('MyApp.store.AlbumSong', {
    extend: 'Ext.data.Store',
    alias: 'store.albumsong',
    model: 'MyApp.model.AlbumSong',

    autoLoad: true,
    pageSize: 10,

    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/albums-and-songs/',

        reader: {
            type: 'json'
        }
    }
});