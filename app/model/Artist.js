Ext.define('MyApp.model.Artist', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.proxy.Rest'
    ],
    fields: [
        { name: 'name' },
        { name: 'curiosity_text' },
        { name: 'song_id', type: 'int' },
        { name: 'song_title' },
    ],

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json'
        },
        url: 'http://127.0.0.1:8000/artists/'
    },

});