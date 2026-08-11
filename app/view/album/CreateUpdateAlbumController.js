Ext.define('MyApp.view.album.CreateUpdateAlbumController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.create-update-album',

    onCreateUpdateAlbum: function() {
        var me = this,
            errorCmp = me.lookup('formCreateUpdateAlbumErrors'),
            submitButton = me.lookup('createUpdateAlbumSubmitButton'),
            fields,
            form = me.lookup('formCreateUpdateAlbum').getForm(),
            values = form.getValues(),
            albumId = values.id,
            isEdit = !!albumId,
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
                url: isEdit ? ('http://127.0.0.1:8000/albums/' + albumId + '/') : 'http://127.0.0.1:8000/albums/',
                method: isEdit ? 'PUT' : 'POST',
                jsonData: payload,
                success: function(response) {
                    var albumTabs = me.getView().up('tabpanel'),
                        albumGrid = albumTabs ? albumTabs.down('grid-album') : null,
                        responseData = response.responseText ? Ext.decode(response.responseText) : null;

                    console.log(responseData);
                    form.reset();

                    if (submitButton) {
                        submitButton.setText('CREATE ALBUM');
                    }

                    if (errorCmp) {
                        errorCmp.setData({
                            errors: []
                        });
                    }

                    if (albumGrid) {
                        albumGrid.getStore().reload();
                        if (albumTabs) {
                            albumTabs.setActiveTab(albumGrid);
                        }
                    }

                    Ext.Msg.alert(isEdit ? 'Update Album Successful' : 'Create Album Successful', isEdit ? 'You have successfully updated the album!' : 'You have successfully created the album!');
                },
                failure: function(response) {
                    var responseData = response.responseText ? Ext.decode(response.responseText) : null;

                    console.log(responseData);
                    Ext.Msg.alert(isEdit ? 'Update Album Failure' : 'Create Album Failure', 'Please check for form errors and retry.');
                }
            });
        }
        else {
            Ext.Msg.alert(isEdit ? 'Update Album Failure' : 'Create Album Failure', 'Please check for form errors and retry.');
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