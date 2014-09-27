Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'BM',

    appFolder: 'app',

    controllers: [
        'BooksGridController',
        'BooksInfoController',
        'EastRegionController'
    ],
    
    autoCreateViewport: true,

    launch: function() {
    	//nothing to do for now ;-)
    }
});