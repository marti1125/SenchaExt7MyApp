Ext.define('MyApp.model.Song', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.proxy.Rest'
    ],
    fields: [
        { name: 'title' },
        { name: 'minutes', type: 'int' },
        { name: 'seconds', type: 'int' },
        { name: 'composer' },
    ],

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json'
        },
        url: 'http://127.0.0.1:8000/songs/'
    },

});