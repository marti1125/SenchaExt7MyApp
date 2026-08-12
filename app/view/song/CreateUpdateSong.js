Ext.define('MyApp.view.song.CreateUpdateSong', {
    extend: 'Ext.Container',
    xtype: 'create-update-song',
    controller: 'create-update-song',

    autoSize: true,
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    scrollable: 'y',
    items: [
        {
            xtype: 'form',
            width: 340,
            height: 370,
            reference: 'formCreateUpdateSong',
            bodyPadding: 30,
            style: {
                'margin-top': '25px',
                'border': '1px solid #ccc',
                'background-color': '#f5f5f5',
                'border-radius': '10px'
            },
            items: [                
                {
                    xtype: 'component',
                    margin: '15 0 15 0',
                    width: 280,
                    html: 'Song',
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
                    fieldLabel: 'Minutes',
                    name: 'minutes',
                    placeholder: 'Minutes',
                    value: 0,
                    minValue: 0,
                    maxValue: 59,
                    allowDecimals: false
                },
                {
                    xtype: 'numberfield',
                    allowBlank: false,
                    required: true,
                    fieldLabel: 'Seconds',
                    name: 'seconds',
                    placeholder: 'Seconds',
                    value: 0,
                    minValue: 0,
                    maxValue: 59,
                    allowDecimals: false
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    fieldLabel: 'Composer',
                    name: 'composer',
                    placeholder: 'Composer'
                },
                {
                    xtype: 'button',
                    reference: 'createUpdateSongSubmitButton',
                    text: 'CREATE SONG',
                    autoSize: true,
                    handler: 'onCreateUpdateSong',
                    height: 30,
                    width: 280,
                    margin: '30 0 0 0',
                    style: {
                        'text-align': 'center',
                        'letter-spacing': '1.25px',
                        'font-size': '14px'
                    }
                },
                {
                    xtype: 'hiddenfield',
                    name: 'id'
                }
            ]
        }
    ]
});