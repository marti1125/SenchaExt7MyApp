Ext.define('MyApp.model.AlbumSong', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.proxy.Rest'
    ],
    fields: [
        { name: 'id', type: 'auto', allowNull: true },
        { name: 'album_id', type: 'int' },
        { name: 'album_title', type: 'string', mapping: 'album.title' },
        { name: 'song_id', type: 'int' },
        { name: 'song_title', type: 'string', mapping: 'song.title' }
    ],

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json'
        },
        url: 'http://127.0.0.1:8000/albums-and-songs/'
    },

    idProperty: 'id'

});