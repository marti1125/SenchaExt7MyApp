Ext.define('MyApp.view.song.SearchSong', {
    extend: 'Ext.form.Panel',
    xtype: 'search-song',
    controller: 'search-song',

    title: '',
    bodyPadding: "5 5 0",
    autoSize: true,

    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },

    defaults: {
        border: false,
        xtype: 'panel',
        flex: 1,
        layout: 'anchor'
    },

    layout: 'hbox',

    items: [{
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Title',
            anchor: '-5',
            name: 'title',
            listeners: {
                specialkey: 'onSearchSongEnter'
            }
        }]
    }, {
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Composer',
            anchor: '-5',
            name: 'composer',
            listeners: {
                specialkey: 'onSearchSongEnter'
            }
        }]
    }],

    buttons: [ {
        text: 'Clear',
        handler: 'onClearSearchSong',
        iconCls: 'x-fa fa-eraser',
    },{
        text: 'Search',
        handler: 'onSearchSong',
        iconCls: 'x-fa fa-search',
    },]
});