Ext.define('MyApp.view.artist.CreateUpdateArtist', {
    extend: 'Ext.Container',
    xtype: 'create-update-artist',
    controller: 'create-update-artist',

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
            reference: 'formCreateUpdateArtist',
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
                    html: 'Artist',
                    style: {
                        'font-size': '22px',
                        'text-align': 'center'
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    fieldLabel: 'Name',
                    name: 'name',
                    placeholder: 'Name'
                },
                {
                    xtype: 'textfield',
                    allowBlank: true,
                    required: false,
                    fieldLabel: 'Curiosity Text',
                    name: 'curiosity_text',
                    placeholder: 'Curiosity Text'
                },                
                {
                    xtype: 'combobox',
                    reference: 'id',
                    publishes: 'id',
                    fieldLabel: 'Select Song',
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
                    reference: 'createUpdateArtistSubmitButton',
                    text: 'CREATE ARTIST',
                    autoSize: true,
                    handler: 'onCreateUpdateArtist',
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