Ext.define('MyApp.view.album_song.GridEditAlbumSongController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.grid-editalbumsong',

    onAdd: function () {
        var grid = this.getView(),
            store = grid.getStore(),
            rowEditing = grid.getPlugin('rowediting');
        
        rowEditing.cancelEdit();
        var newRecord = Ext.create(store.getModel());
        store.insert(0, newRecord);
        rowEditing.startEdit(0, 0);
    },

    onBeforeEditRow : function (editor, context) {
        var record = context.record;
        if (record.phantom) {
            return true; // Allow editing of new records
        }
        return false; // Prevent editing of existing records
    },

    onEditComplete: function (editor, context) {
        var record = context.record;
        var albumId = record.get('album_title');
        var songId = record.get('song_title');
        var store = context.grid.getStore();
        if (!albumId || !songId) {
            Ext.Msg.alert('Warning', 'Please select both an album and a song.');
            return;
        }
        Ext.Ajax.request({
            url: 'http://127.0.0.1:8000/albums/' + albumId + '/songs/' + songId + '/',
            method: 'POST',
            success: function(response) {
                store.reload();
            },
            failure: function(response) {
                Ext.Msg.alert('Error', 'Failed to save the album-song relationship. Please try again.');
            }
        });
    },

    onRemove: function () {
        var grid = this.getView(),
            store = grid.getStore(),
            rowEditing = grid.getPlugin('rowediting'),
            selection = grid.getSelectionModel().getSelection()[0];
        
        if (selection) {
            var selectedRecord = selection.getData();
            var albumId = selectedRecord['album_id'];
            var songId = selectedRecord['song_id'];

            Ext.Ajax.request({
                url: 'http://127.0.0.1:8000/albums/' + albumId + '/songs/' + songId + '/',
                method: 'DELETE',
                success: function(response) {
                    store.reload();
                },
                failure: function(response) {
                    Ext.Msg.alert('Error', 'Failed to save the album-song relationship. Please try again.');
                }
            });

            
        }
    }

});