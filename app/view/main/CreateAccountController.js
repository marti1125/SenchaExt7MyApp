Ext.define('MyApp.view.main.CreateAccountController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.create-account',

    onRegister: function() {
        var me = this,
            errorCmp = me.lookup('formRegisterFailure'),
            fields,
            form = me.lookup('formCreateAccount').getForm(),
            errors = [],
            data = {
                errors: errors
            };

        if (form.isValid()) {
            console.log(form.getValues());
            Ext.Ajax.request({
                url: 'https://reqres.in/api/register',
                headers: {
                    'x-api-key': '<API_KEY>'
                },
                method: 'POST',
                jsonData: form.getValues(),
                success: function(response) {
                    var data = Ext.decode(response.responseText);
                    console.log(data);
                    Ext.Msg.alert('Registration Successful', 'You have successfully registered!');
                },
                failure: function(response) {
                    var data = Ext.decode(response.responseText);
                    console.log(data);
                    Ext.Msg.alert('Registration Failure', 'Please check for form errors and retry.');
                }
            });            
        }
        else {
            Ext.Msg.alert('Registration Failure', 'Please check for form errors and retry.');
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