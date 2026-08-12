Ext.define('MyApp.view.song.GridSong', {
    extend: 'Ext.tree.Panel',
    xtype: 'grid-song',
    controller: 'grid-song',

    requires: [
        'Ext.grid.column.Action',
        'MyApp.store.Song'
    ],

    title: 'Songs',
    width: 750,
    height: 350,

    viewConfig: {
        deferEmptyText: false,
        emptyText: 'No hay canciones disponibles',
        markDirty: false,
        listeners: {
            // Se ejecuta cuando la vista refresca el HTML
            refresh: function(view) {
                console.log('%c[DEBUG VISTA] --> El HTML de la tabla se ha REFRESCO.', 'color: purple; font-weight: bold;');
                console.log('[DEBUG VISTA] Cantidad de filas HTML renderizadas:', view.getNodes().length);
            },
            // Nos avisa si la vista detecta que el Store se vació o cargó
            itemadd: function(records) {
                console.log('[DEBUG VISTA] Se añadieron elementos visuales a la tabla:', records.length);
            }
        }
    },

    store: Ext.create('MyApp.store.Song'),

    rootVisible: false,
    useArrows: true,

    columns: [{
        xtype: 'treecolumn',
        text: 'Title',
        flex: 1,
        dataIndex: 'text',
    }, {
        text: 'Duration',
        width: 95,
        dataIndex: 'duration'
    }, {
        text: 'Composer',
        flex: 1,
        dataIndex: 'composer'
    }, {
        xtype: 'actioncolumn',
        width: 150,
        menuDisabled: true,
        sortable: false,
        items: [{
            tooltip: 'Edit',
            handler: 'onEdit',
            getClass: function(v, meta, record) {
                if (record.isLeaf()) {
                    return 'x-hidden-display';
                }
                return 'x-fa fa-edit song-action-edit'; 
            }
        }, {
            tooltip: 'Delete',
            handler: 'onDelete',
            getClass: function(v, meta, record) {
                if (record.isLeaf()) {
                    return 'x-hidden-display';
                }
                return 'x-fa fa-trash song-action-delete';
            }
        }]
    }],

    listeners: {
        // Se ejecuta cuando el árbol ya se montó en pantalla
        afterrender: function(tree) {
            console.log('%c[DEBUG VISTA] Panel del árbol renderizado en el DOM.', 'color: #9C27B0;');
            console.log('[DEBUG VISTA] ¿El árbol está visible físicamente?:', tree.isVisible());
            console.log('[DEBUG VISTA] Altura calculada por ExtJS:', tree.getHeight());
        },
        // Se ejecuta si cambia el tamaño o el layout por culpa del contenedor padre
        resize: function(tree, width, height) {
            console.log('[DEBUG VISTA] El árbol cambió de tamaño. Ancho:', width, 'Alto:', height);
        }
    }
});