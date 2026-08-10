/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suit the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List',

        'MyApp.view.main.CreateAccount',
        'MyApp.view.main.CreateAccountController',

        'MyApp.view.song.CreateUpdateSong',
        'MyApp.view.song.CreateUpdateController',
        'MyApp.view.song.GridSong',
        'MyApp.view.song.GridSongController',
        'MyApp.store.Song',
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
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
        title: 'Create Account',
        iconCls: 'fa-user-plus',
        items: [{
            xtype: 'create-account'
        }]
    }, {
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
    }]
});
