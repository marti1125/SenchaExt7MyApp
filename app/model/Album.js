Ext.define('MyApp.model.Album', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.proxy.Rest'
    ],
    fields: [
        { name: 'id', type: 'int' },
        { name: 'title' },
        { name: 'year', type: 'int' },
        { name: 'description' },
        { name: 'medium_name' },
    ],

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json'
        },
        url: 'http://127.0.0.1:8000/albums/'
    },

});