Ext.define('MyApp.store.Song', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.song',
    model: 'MyApp.model.Song',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/songs/',
        reader: {
            type: 'json',
        },
        listeners: {
            exception: function(proxy, response, operation) {
                console.error('%c[DEBUG PROXY] ¡Excepción en la petición HTTP!', 'color: red; font-weight: bold;', operation.getError());
            }
        }
    },
    root: {
        id: 0,
        text: 'Root',
        expanded: true
    },
    listeners: {
        beforeload: function(store, operation) {
            console.log('%c[DEBUG STORE] 1. Disparando petición a la API...', 'color: #2196F3; font-weight: bold;');
        },
        
        load: function(store, records, successful, operation) {
            console.log('%c[DEBUG STORE] 2. Respuesta recibida. ¿Éxito?: ' + successful, successful ? 'color: green; font-weight: bold;' : 'color: red; font-weight: bold;');
            
            // Inspección del texto JSON crudo que llegó del servidor
            var rawText = operation.getResponse() ? operation.getResponse().responseText : 'Sin respuesta física';
            console.log('[DEBUG STORE] 3. JSON Crudo del servidor:', rawText);
            
            if (successful) {
                console.log('[DEBUG STORE] 4. Cantidad de registros en la raíz del Store:', records ? records.length : 0);
                
                // Inspección del Nodo Raíz Interno de ExtJS
                var rootNode = store.getRootNode();
                console.log('[DEBUG STORE] 5. ¿El nodo Raíz está expandido?:', rootNode.isExpanded());
                console.log('[DEBUG STORE] 6. Hijos vinculados en la raíz física:', rootNode.childNodes.length);
                
                if (rootNode.childNodes.length > 0) {
                    console.log('[DEBUG STORE] 7. Datos del primer nodo mapeado:', rootNode.childNodes[0].data);
                }
            }
        },

        // Listener de actualización: Nos avisa si los nodos sufren algún cambio
        datachanged: function(store) {
            console.log('%c[DEBUG STORE] --> ¡Los datos internos del Store han cambiado!', 'color: orange;');
        }
    }
});