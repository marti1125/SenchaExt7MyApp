Ext.define('MyApp.view.album.SearchAlbumController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.search-album',

    doSearch: function() {
        var me = this.getView(),
            title = me.getValues().title,
            year = me.getValues().year;
        
        var grid = Ext.ComponentQuery.query('grid-album')[0];
        var store = grid.getStore();
        store.clearFilter();
        if (title) {
            store.filter('title', title);
        }
        if (year) {
            store.filter('year', year);
        }
        store.load();
    },
    
    onSearchAlbum: function() {
        this.doSearch();
    },

    onSearchAlbumEnter: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doSearch();
        }
    },

    onClearSearchAlbum: function() {
        var me = this.getView(),
            title = me.getValues().title,
            year = me.getValues().year;
        me.reset();
        var grid = Ext.ComponentQuery.query('grid-album')[0];
        var store = grid.getStore();
        store.clearFilter();
        store.load();
    }
    
});