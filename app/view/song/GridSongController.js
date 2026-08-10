Ext.define('MyApp.view.song.GridSongController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.grid-song',

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
            createSongView,
            formPanel,
            submitButton;

        if (!songTabs) {
            Ext.Msg.alert('Edit', 'Song tabs container was not found.');
            return;
        }

        createSongView = songTabs.down('create-song');
        if (!createSongView) {
            Ext.Msg.alert('Edit', 'Create Song panel was not found.');
            return;
        }

        formPanel = createSongView.down('form[reference=formCreateSong]');
        if (formPanel) {
            formPanel.getForm().setValues({
                id: rec.get('id'),
                title: rec.get('title'),
                minutes: rec.get('minutes'),
                seconds: rec.get('seconds'),
                composer: rec.get('composer')
            });
        }

        submitButton = createSongView.lookupReference('createSongSubmitButton');
        if (submitButton) {
            submitButton.setText('UPDATE SONG');
        }

        songTabs.setActiveTab(createSongView);
    },

});