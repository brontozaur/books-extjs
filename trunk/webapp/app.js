Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'BM',

    appFolder: 'app',

    controllers: [
        'BooksGridController',
        'EastRegionController',
        'BookWindowController'
    ],
    
    autoCreateViewport: true,

    launch: function() {
    	//nothing to do for now ;-)
    }
});