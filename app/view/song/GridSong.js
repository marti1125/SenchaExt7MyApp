Ext.define('MyApp.view.song.GridSong', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-song',
    controller: 'grid-song',

    requires: [
        'Ext.grid.column.Action',
        'MyApp.store.Song'
    ],

    title: 'Songs',
    width: 750,
    height: 350,

    store: {
        type: 'song'
    },
    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',
    headerBorders: false,

    columns: [{
        text: 'Title',
        flex: 1,
        dataIndex: 'title'
    }, {
        text: 'Minutes',
        width: 95,
        dataIndex: 'minutes'
    }, {
        text: 'Seconds',
        width: 80,
        dataIndex: 'seconds'
    }, {
        text: 'Composer',
        flex: 1,
        dataIndex: 'composer'
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