Ext.define('MyApp.view.artist.GridArtist', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-artist',
    controller: 'grid-artist',

    requires: [
        'Ext.grid.column.Action',
        'MyApp.store.Artist'
    ],

    title: 'Artists',
    width: 750,
    height: 350,

    store: {
        type: 'artist'
    },
    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',
    headerBorders: false,

    columns: [{
        text: 'Name',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: 'Curiosity Text',
        width: 200,
        dataIndex: 'curiosity_text'
    }, {
        text: 'Song Title',
        flex: 1,
        dataIndex: 'song_title'
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