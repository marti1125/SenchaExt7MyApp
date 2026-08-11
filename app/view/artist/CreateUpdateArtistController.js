Ext.define('MyApp.view.artist.CreateUpdateArtistController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.create-update-artist',

    onCreateUpdateArtist: function() {
        var me = this,
            errorCmp = me.lookup('formCreateUpdateArtistErrors'),
            submitButton = me.lookup('createUpdateArtistSubmitButton'),
            fields,
            form = me.lookup('formCreateUpdateArtist').getForm(),
            values = form.getValues(),
            artistId = values.id,
            isEdit = !!artistId,
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
                url: isEdit ? ('http://127.0.0.1:8000/artists/' + artistId + '/') : 'http://127.0.0.1:8000/artists/',
                method: isEdit ? 'PUT' : 'POST',
                jsonData: payload,
                success: function(response) {
                    var artistTabs = me.getView().up('tabpanel'),
                        artistGrid = artistTabs ? artistTabs.down('grid-artist') : null,
                        responseData = response.responseText ? Ext.decode(response.responseText) : null;

                    console.log(responseData);
                    form.reset();

                    if (submitButton) {
                        submitButton.setText('CREATE ARTIST');
                    }

                    if (errorCmp) {
                        errorCmp.setData({
                            errors: []
                        });
                    }

                    if (artistGrid) {
                        artistGrid.getStore().reload();
                        if (artistTabs) {
                            artistTabs.setActiveTab(artistGrid);
                        }
                    }

                    Ext.Msg.alert(isEdit ? 'Update Artist Successful' : 'Create Artist Successful', isEdit ? 'You have successfully updated the artist!' : 'You have successfully created the artist!');
                },
                failure: function(response) {
                    var responseData = response.responseText ? Ext.decode(response.responseText) : null;

                    console.log(responseData);
                    Ext.Msg.alert(isEdit ? 'Update Artist Failure' : 'Create Artist Failure', 'Please check for form errors and retry.');
                }
            });
        }
        else {
            Ext.Msg.alert(isEdit ? 'Update Artist Failure' : 'Create Artist Failure', 'Please check for form errors and retry.');
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