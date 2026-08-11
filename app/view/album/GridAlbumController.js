Ext.define('MyApp.view.album.GridAlbumController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.grid-album',

    init: function() {
        var me = this,
            grid = me.getView();
        
        grid.on('activate', function() {
            me.resetCreateUpdateAlbumForm();
        });
    },

    resetCreateUpdateAlbumForm: function() {
        var me = this,
            albumTabs = me.getView().up('tabpanel'),
            createUpdateAlbumView = albumTabs ? albumTabs.down('create-update-album') : null,
            formPanel = createUpdateAlbumView ? createUpdateAlbumView.down('form[reference=formCreateUpdateAlbum]') : null,
            submitButton = createUpdateAlbumView ? createUpdateAlbumView.lookupReference('createUpdateAlbumSubmitButton') : null;
        
        if (formPanel) {
            formPanel.getForm().reset();
        }
        
        if (submitButton) {
            submitButton.setText('CREATE ALBUM');
        }
    },

    onDelete: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);

        Ext.Msg.confirm('Confirm Delete', 'Are you sure you want to delete "' + rec.get('title') + '"?', function(btn) {
            if (btn !== 'yes') {
                return;
            }

            Ext.Ajax.request({
                method: 'DELETE',
                url: 'http://127.0.0.1:8000/albums/' + rec.get('id') + '/',
                success: function(response) {
                    console.log('Album deleted with status:', response.status);
                    Ext.Msg.alert('Delete Successful', 'You have successfully deleted the album!');
                    grid.getStore().reload();
                },
                failure: function(response) {
                    console.log('Delete failed with status:', response.status);
                    Ext.Msg.alert('Delete Failure', 'Please check for form errors and retry.');
                }
            });
        });

    },

    onEdit: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex),
            albumTabs = grid.up('tabpanel'),
            createUpdateAlbumView,
            formPanel,
            submitButton;

        if (!albumTabs) {
            Ext.Msg.alert('Edit', 'Album tabs container was not found.');
            return;
        }

        createUpdateAlbumView = albumTabs.down('create-update-album');
        if (!createUpdateAlbumView) {
            Ext.Msg.alert('Edit', 'Create Album panel was not found.');
            return;
        }

        formPanel = createUpdateAlbumView.down('form[reference=formCreateUpdateAlbum]');
        if (formPanel) {
            formPanel.getForm().setValues({
                id: rec.get('id'),
                title: rec.get('title'),
                year: rec.get('year'),
                description: rec.get('description'),
                medium: rec.get('medium')
            });
        }

        submitButton = createUpdateAlbumView.lookupReference('createUpdateAlbumSubmitButton');
        if (submitButton) {
            submitButton.setText('UPDATE ALBUM');
        }

        albumTabs.setActiveTab(createUpdateAlbumView);
    },

});