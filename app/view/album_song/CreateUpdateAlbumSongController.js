Ext.define('MyApp.view.album_song.CreateUpdateAlbumSongController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.create-update-album-song',

    onCreateUpdateAlbumSongSubmit: function () {
        var form = this.lookupReference('formCreateUpdateAlbumSong').getForm();
        if (form.isValid()) {
            Ext.Msg.alert('Success', 'Album song saved successfully.');
        } else {
            Ext.Msg.alert('Failed', 'Please complete all required fields.');
        }
    }

});