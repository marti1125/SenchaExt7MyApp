Ext.define('MyApp.view.artist.GridArtistController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.grid-artist',

    init: function() {
        var me = this,
            grid = me.getView();
        
        grid.on('activate', function() {
            me.resetCreateUpdateArtistForm();
        });
    },

    resetCreateUpdateArtistForm: function() {
        var me = this,
            artistTabs = me.getView().up('tabpanel'),
            createUpdateArtistView = artistTabs ? artistTabs.down('create-update-artist') : null,
            formPanel = createUpdateArtistView ? createUpdateArtistView.down('form[reference=formCreateUpdateArtist]') : null,
            submitButton = createUpdateArtistView ? createUpdateArtistView.lookupReference('createUpdateArtistSubmitButton') : null;
        
        if (formPanel) {
            formPanel.getForm().reset();
        }
        
        if (submitButton) {
            submitButton.setText('CREATE ARTIST');
        }
    },

    onDelete: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);

        Ext.Msg.confirm('Confirm Delete', 'Are you sure you want to delete "' + rec.get('name') + '"?', function(btn) {
            if (btn !== 'yes') {
                return;
            }

            Ext.Ajax.request({
                method: 'DELETE',
                url: 'http://127.0.0.1:8000/artists/' + rec.get('id') + '/',
                success: function(response) {
                    console.log('Artist deleted with status:', response.status);
                    Ext.Msg.alert('Delete Successful', 'You have successfully deleted the artist!');
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
            artistTabs = grid.up('tabpanel'),
            createUpdateArtistView,
            formPanel,
            submitButton;

        if (!artistTabs) {
            Ext.Msg.alert('Edit', 'Artist tabs container was not found.');
            return;
        }

        createUpdateArtistView = artistTabs.down('create-update-artist');
        if (!createUpdateArtistView) {
            Ext.Msg.alert('Edit', 'Create Artist panel was not found.');
            return;
        }

        formPanel = createUpdateArtistView.down('form[reference=formCreateUpdateArtist]');
        if (formPanel) {
            formPanel.getForm().setValues({
                id: rec.get('id'),
                name: rec.get('name'),
                curiosity_text: rec.get('curiosity_text'),
                song_id: rec.get('song_id')
            });
        }

        submitButton = createUpdateArtistView.lookupReference('createUpdateArtistSubmitButton');
        if (submitButton) {
            submitButton.setText('UPDATE ARTIST');
        }

        artistTabs.setActiveTab(createUpdateArtistView);
    },

});