Ext.define('MyApp.store.Medium', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.medium',

    model: 'MyApp.model.Medium',
    storeId: 'medium',

    data: [
        [1, 'DISCO'],
        [2, 'CASETE'],
        [3, 'CD']
    ]
});