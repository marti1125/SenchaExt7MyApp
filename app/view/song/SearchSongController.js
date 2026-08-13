Ext.define('MyApp.view.song.SearchSongController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.search-song',

    doSearch: function() {
        var me = this.getView(),
            title = me.getValues().title,
            composer = me.getValues().composer;
        
        var grid = Ext.ComponentQuery.query('grid-song')[0];
        var store = grid.getStore();
        store.clearFilter();
        if (title) {
            store.filter('title', title);
        }
        if (composer) {
            store.filter('composer', composer);
        }
        store.load();
    },
    
    onSearchSong: function() {
        this.doSearch();
    },

    onSearchSongEnter: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doSearch();
        }
    },

    onClearSearchSong: function() {
        var me = this.getView(),
            title = me.getValues().title,
            composer = me.getValues().composer;
        me.reset();
        var grid = Ext.ComponentQuery.query('grid-song')[0];
        var store = grid.getStore();
        store.clearFilter();
        store.load();
    }
    
});