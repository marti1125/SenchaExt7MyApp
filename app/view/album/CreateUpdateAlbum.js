Ext.define('MyApp.view.album.CreateUpdateAlbum', {
    extend: 'Ext.Container',
    xtype: 'create-update-album',
    controller: 'create-update-album',

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
            reference: 'formCreateUpdateAlbum',
            bodyPadding: 30,
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'id'
                },
                {
                    xtype: 'component',
                    margin: '15 0 15 0',
                    width: 280,
                    html: 'Album',
                    style: {
                        'font-size': '22px',
                        'text-align': 'center'
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    fieldLabel: 'Title',
                    name: 'title',
                    placeholder: 'Title'
                },
                {
                    xtype: 'numberfield',
                    allowBlank: false,
                    required: true,
                    fieldLabel: 'Year',
                    name: 'year',
                    placeholder: 'Year',
                    value: 0,
                    minValue: 0,
                    maxValue: new Date().getFullYear(),
                    allowDecimals: false
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    fieldLabel: 'Description',
                    name: 'description',
                    placeholder: 'Description'
                },
                {
                    xtype: 'combobox',
                    reference: 'value',
                    publishes: 'value',
                    fieldLabel: 'Select Medium',
                    displayField: 'value',
                    forceSelection: true,
                    valueField: 'id',
                    displayField: 'value',
                    store: {
                        type: 'medium'
                    },
                    minChars: 0,
                    queryMode: 'local',
                    name: 'medium',
                },
                {
                    xtype: 'button',
                    reference: 'createUpdateAlbumSubmitButton',
                    text: 'CREATE ALBUM',
                    autoSize: true,
                    handler: 'onCreateUpdateAlbum',
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