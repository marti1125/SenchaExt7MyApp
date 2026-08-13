Ext.define('MyApp.view.artist.SearchArtistController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.search-artist',

    doSearch: function() {
        var me = this.getView(),
            name = me.getValues().name;
        
        var grid = Ext.ComponentQuery.query('grid-artist')[0];
        var store = grid.getStore();
        store.clearFilter();
        if (name) {
            store.filter('name', name);
        }
        store.load();
    },
    
    onSearchArtist: function() {
        this.doSearch();
    },

    onSearchArtistEnter: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doSearch();
        }
    },

    onClearSearchArtist: function() {
        var me = this.getView(),
            name = me.getValues().name;
        me.reset();
        var grid = Ext.ComponentQuery.query('grid-artist')[0];
        var store = grid.getStore();
        store.clearFilter();
        store.load();
    }
    
});