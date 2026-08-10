Ext.define('MyApp.view.song.CreateSong', {
    extend: 'Ext.Container',
    xtype: 'create-song',
    controller: 'create-song',

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
            reference: 'formCreateSong',
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
                    reference: 'createSongSubmitButton',
                    text: 'CREATE SONG',
                    autoSize: true,
                    handler: 'onCreateSong',
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