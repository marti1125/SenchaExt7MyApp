Ext.define('MyApp.model.Song', {
    extend: 'Ext.data.TreeModel',

    fields: [
        { name: 'id', type: 'auto' },
        { name: 'title', type: 'string' },
        { name: 'minutes', type: 'int' },
        { name: 'seconds', type: 'int' },
        { name: 'duration', type: 'string' },
        { name: 'composer', type: 'string' },
        { name: 'text', type: 'string' },
        { name: 'leaf', type: 'boolean' }
    ],

    idProperty: 'id'
});