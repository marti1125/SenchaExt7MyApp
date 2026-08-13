Ext.define('MyApp.view.artist.SearchArtist', {
    extend: 'Ext.form.Panel',
    xtype: 'search-artist',
    controller: 'search-artist',

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
            fieldLabel: 'Name',
            anchor: '-5',
            name: 'name',
            listeners: {
                specialkey: 'onSearchArtistEnter'
            }
        }]
    }],

    buttons: [ {
        text: 'Clear',
        handler: 'onClearSearchArtist',
        iconCls: 'x-fa fa-eraser',
    },{
        text: 'Search',
        handler: 'onSearchArtist',
        iconCls: 'x-fa fa-search',
    }]
});