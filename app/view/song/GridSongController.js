Ext.define('MyApp.view.song.GridSongController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.grid-song',

    init: function() {
        var me = this,
            grid = me.getView();
        
        grid.on('activate', function() {
            me.resetCreateUpdateSongForm();
        });
    },

    resetCreateUpdateSongForm: function() {
        var me = this,
            songTabs = me.getView().up('tabpanel'),
            createUpdateSongView = songTabs ? songTabs.down('create-update-song') : null,
            formPanel = createUpdateSongView ? createUpdateSongView.down('form[reference=formCreateUpdateSong]') : null,
            submitButton = createUpdateSongView ? createUpdateSongView.lookupReference('createUpdateSongSubmitButton') : null;
        
        if (formPanel) {
            formPanel.getForm().reset();
        }
        
        if (submitButton) {
            submitButton.setText('CREATE SONG');
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
                url: 'http://127.0.0.1:8000/songs/' + rec.get('id') + '/',
                success: function(response) {
                    console.log('Song deleted with status:', response.status);
                    Ext.Msg.alert('Delete Successful', 'You have successfully deleted the song!');
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
            songTabs = grid.up('tabpanel'),
            createUpdateSongView,
            formPanel,
            submitButton;

        if (!songTabs) {
            Ext.Msg.alert('Edit', 'Song tabs container was not found.');
            return;
        }

        createUpdateSongView = songTabs.down('create-update-song');
        if (!createUpdateSongView) {
            Ext.Msg.alert('Edit', 'Create Song panel was not found.');
            return;
        }

        formPanel = createUpdateSongView.down('form[reference=formCreateUpdateSong]');
        if (formPanel) {
            formPanel.getForm().setValues({
                id: rec.get('id'),
                title: rec.get('title'),
                minutes: rec.get('minutes'),
                seconds: rec.get('seconds'),
                composer: rec.get('composer')
            });
        }

        submitButton = createUpdateSongView.lookupReference('createUpdateSongSubmitButton');
        if (submitButton) {
            submitButton.setText('UPDATE SONG');
        }

        songTabs.setActiveTab(createUpdateSongView);
    },

});