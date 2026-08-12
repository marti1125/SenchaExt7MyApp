Ext.define('MyApp.view.album_song.CreateUpdateAlbumSong', {
    extend: 'Ext.Container',
    xtype: 'create-update-album-song',
    controller: 'create-update-album-song',

    autoSize: true,
    width: 340,
    height: 674,
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    scrollable: 'y',
    items: [
        {
            xtype: 'form',
            width: 340,
            height: 644,
            reference: 'formCreateUpdateAlbumSong',
            bodyPadding: 30,
            items: [
                {
                    xtype: 'component',
                    margin: '15 0 15 0',
                    width: 280,
                    html: 'Album Song',
                    style: {
                        'font-size': '22px',
                        'text-align': 'center'
                    }
                },
                {
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
                    minChars: 0,
                    queryMode: 'remote',
                    name: 'album_id ',
                },
                {
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
                    minChars: 0,
                    queryMode: 'remote',
                    name: 'song_id',
                },
                {
                    xtype: 'button',
                    reference: 'createUpdateAlbumSongSubmitButton',
                    text: 'CREATE ALBUM SONG',
                    autoSize: true,
                    handler: 'onCreateUpdateAlbumSongSubmit',
                    height: 30,
                    width: 280,
                    margin: '30 0 0 0',
                    style: {
                        'text-align': 'center',
                        'letter-spacing': '1.25px',
                        'font-size': '14px'
                    }
                }
            ]
        }
    ]
});