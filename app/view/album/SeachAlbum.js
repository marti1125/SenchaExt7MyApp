Ext.define('MyApp.view.album.SearchAlbum', {
    extend: 'Ext.form.Panel',
    xtype: 'search-album',
    controller: 'search-album',

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
                specialkey: 'onSearchAlbumEnter'
            }
        }]
    }, {
        items: [{
            xtype: 'numberfield',
            fieldLabel: 'Year',
            defaultValue: 0,
            minValue: 0,
            maxValue: 9999,
            anchor: '100%',
            name: 'year',
            listeners: {
                specialkey: 'onSearchAlbumEnter'
            }
        }]
    }],

    buttons: [ {
        text: 'Clear',
        handler: 'onClearSearchAlbum',
        iconCls: 'x-fa fa-eraser',
    },{
        text: 'Search',
        handler: 'onSearchAlbum',
        iconCls: 'x-fa fa-search',
    },]
});