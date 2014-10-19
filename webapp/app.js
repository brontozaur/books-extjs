Ext.application({
            requires: [
                'Ext.container.Viewport'
            ],
            name: 'BM',

            appFolder: 'app',

            controllers: [
                'BooksGridController',
                'BooksTreeController',
                'CategorieGridController',
                'EdituraGridController',
                'AutorGridController',
                'BookWindowController',
                'ErrorWindowController'
            ],

            autoCreateViewport: true,

            launch: function() {
                // nothing to do for now ;-)
            }
        });