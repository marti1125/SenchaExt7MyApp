Ext.define('MyApp.view.song.CreateSongController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.create-song',

    onCreateSong: function() {
        var me = this,
            errorCmp = me.lookup('formCreateSongFailure'),
            submitButton = me.lookup('createSongSubmitButton'),
            fields,
            form = me.lookup('formCreateSong').getForm(),
            values = form.getValues(),
            songId = values.id,
            isEdit = !!songId,
            payload,
            errors = [],
            data = {
                errors: errors
            };

        if (form.isValid()) {
            payload = Ext.apply({}, values);
            delete payload.id;

            console.log(values);
            Ext.Ajax.request({
                url: isEdit ? ('http://127.0.0.1:8000/songs/' + songId + '/') : 'http://127.0.0.1:8000/songs/',
                method: isEdit ? 'PUT' : 'POST',
                jsonData: payload,
                success: function(response) {
                    var songTabs = me.getView().up('tabpanel'),
                        songGrid = songTabs ? songTabs.down('grid-song') : null,
                        responseData = response.responseText ? Ext.decode(response.responseText) : null;

                    console.log(responseData);
                    form.reset();

                    if (submitButton) {
                        submitButton.setText('CREATE SONG');
                    }

                    if (errorCmp) {
                        errorCmp.setData({
                            errors: []
                        });
                    }

                    if (songGrid) {
                        songGrid.getStore().reload();
                        if (songTabs) {
                            songTabs.setActiveTab(songGrid);
                        }
                    }

                    Ext.Msg.alert(isEdit ? 'Update Song Successful' : 'Create Song Successful', isEdit ? 'You have successfully updated the song!' : 'You have successfully created the song!');
                },
                failure: function(response) {
                    var responseData = response.responseText ? Ext.decode(response.responseText) : null;

                    console.log(responseData);
                    Ext.Msg.alert(isEdit ? 'Update Song Failure' : 'Create Song Failure', 'Please check for form errors and retry.');
                }
            });
        }
        else {
            Ext.Msg.alert(isEdit ? 'Update Song Failure' : 'Create Song Failure', 'Please check for form errors and retry.');
            fields = form.getFields();

            fields.each(function(field) {
                var error;

                if (!field.validate() && (error = field.getErrors())) {
                    errors.push({
                        errors: error,
                        name: field.getFieldLabel()
                    });
                }
            });
        }

        if (errorCmp) {
            errorCmp.setData(data);
        }
    }
});