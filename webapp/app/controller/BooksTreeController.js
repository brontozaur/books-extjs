Ext.define('BM.controller.BooksTreeController', {
            extend: 'Ext.app.Controller',
            stores: [
                'BooksTreeStore'
            ],

            model: [
                'BooksTreeModel'
            ]
        });