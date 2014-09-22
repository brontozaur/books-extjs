Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'BM',

    appFolder: 'app',

    controllers: [
        'BooksController'
    ],
    
    autoCreateViewport: true,

    launch: function() {
    	//nothing to do for now ;-)
    }
});