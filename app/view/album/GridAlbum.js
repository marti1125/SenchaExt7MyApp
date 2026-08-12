Ext.define('MyApp.view.album.GridAlbum', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-album',
    controller: 'grid-album',

    requires: [
        'Ext.grid.filters.Filters',
        'Ext.grid.column.Action',
        'MyApp.store.Album'
    ],

    plugins: {
        gridfilters: true
    },

    emptyText: 'No Matching Records',

    title: 'Albums',
    width: 750,
    height: 350,

    store: {
        type: 'album'
    },
    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',
    headerBorders: false,

    columns: [{
        text: 'Title',
        flex: 1,
        dataIndex: 'title',
        filter : {
            type: 'string'
        }
    }, {
        text: 'Year',
        width: 95,
        dataIndex: 'year',
        filter: {
            type: 'number'
        }
    }, {
        text: 'Description',
        width: 200,
        dataIndex: 'description',
        filter: {
            type: 'string'
        }
    }, {
        text: 'Medium',
        flex: 1,
        dataIndex: 'medium_name',
        filter: {
            type: 'string'
        }
    }, {
        xtype: 'actioncolumn',
        width: 150,
        menuDisabled: true,
        sortable: false,
        items: [{
            iconCls: 'x-fa fa-edit song-action-edit',
            tooltip: 'Edit',
            handler: 'onEdit'
        }, {
            iconCls: 'x-fa fa-trash song-action-delete',
            tooltip: 'Delete',
            handler: 'onDelete'
        }]
    }],
});