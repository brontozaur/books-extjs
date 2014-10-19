Ext.define('BM.controller.BooksTreeController', {
            extend: 'Ext.app.Controller',
            stores: [
                'BookTreeStore'
            ],

            model: [
                'BookModel'
            ]
        });