Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.store.Song',
        'MyApp.view.song.CreateUpdateSong',
        'MyApp.view.song.CreateUpdateController',
        'MyApp.view.song.GridSong',
        'MyApp.view.song.GridSongController',        

        'MyApp.store.Medium',
        'MyApp.store.Album',
        'MyApp.view.album.CreateUpdateAlbum',
        'MyApp.view.album.CreateUpdateAlbumController',
        'MyApp.view.album.GridAlbum',
        'MyApp.view.album.GridAlbumController',

        'MyApp.store.Artist',
        'MyApp.view.artist.GridArtist',
        'MyApp.view.artist.GridArtistController',
        'MyApp.view.artist.CreateUpdateArtist',
        'MyApp.view.artist.CreateUpdateArtistController',

        'MyApp.view.album_song.CreateUpdateAlbumSong',
        'MyApp.view.album_song.CreateUpdateAlbumSongController'
    ],

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            text: 'Dummy App',
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Song',
        iconCls: 'fa-music',
        items: [{
            xtype: 'tabpanel',
            items: [{
                title: 'All Songs',
                xtype: 'grid-song'
            },{
                title: 'Song',
                xtype: 'create-update-song'
            }]
        }]
    }, {
        title: 'Album',
        iconCls: 'fa-book',
        items: [{
            xtype: 'tabpanel',
            items: [{
                title: 'All Albums',
                xtype: 'grid-album'
            },{
                title: 'Album',
                xtype: 'create-update-album'
            }]
        }]
    }, {
        title: 'Artist',
        iconCls: 'fa-user',
        items: [{
            xtype: 'tabpanel',
            items: [{
                title: 'All Artists',
                xtype: 'grid-artist'
            }, {
                title: 'Artist',
                xtype: 'create-update-artist'
            }]
        }]
    }, {
        title: 'Album Song',
        iconCls: 'fa-music',
        items: [{
            xtype: 'tabpanel',
            items: [{
                title: 'Album Song',
                xtype: 'create-update-album-song'
            }]
        }]
    }]
});
