Ext.define('MyApp.view.album_song.GridEditAlbumSong', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-editalbumsong',
    controller: 'grid-editalbumsong',

    title: 'Row Editing Album Songs',
    width: 700,
    height: 400,

    store: {
        type: 'albumsong'
    },

    plugins: {
        rowediting: {
            clicksToMoveEditor: 1,
            autoCancel: false,
            saveBtnText: 'Save',
            cancelBtnText: 'Discard',
            listeners: {
                beforeedit: 'onBeforeEditRow',
                edit: 'onEditComplete'
            }
        }
    },

    columns: [{
        header: 'Album',
        dataIndex: 'album_title',
        width: 100,
        flex: 1,
        dirtyText: 'Album Title has been changed',
        editor: {
            xtype: 'combobox',
            reference: 'title',
            publishes: 'title',
            fieldLabel: 'Select Album',
            displayField: 'title',
            forceSelection: true,
            valueField: 'id',
            displayField: 'title',
            store: {
                type: 'album'
            },
            queryMode: 'remote',
            name: 'album_id',
        }
    }, {
        header: 'Song Title',
        dataIndex: 'song_title',
        dirtyText: 'Song title has been changed',
        flex: 1,
        editor: {
            xtype: 'combobox',
            reference: 'title',
            publishes: 'title',
            fieldLabel: 'Select Song',
            displayField: 'title',
            forceSelection: true,
            valueField: 'id',
            displayField: 'title',
            store: {
                type: 'song'
            },
            queryMode: 'remote',
            name: 'song_id',                
        }
    }],

    tbar: [{
        text: 'Add',
        reference: 'addRelation',
        handler: 'onAdd'
    }, {
        text: 'Remove',
        reference: 'removeRelation',
        handler: 'onRemove'
    }],

});