Ext.define('BM.controller.BooksController', {
    extend: 'Ext.app.Controller',
    stores: [
        'BooksStore'
    ],

    model: [
        'BooksModel'
    ],

    views: [
        'book.BooksListView'
    ],

    init: function() {
        this.control({
            'viewport > booklistview': { //vezi http://docs.sencha.com/extjs/4.2.2/#!/api/Ext.ComponentQuery
                itemdblclick: this.editBook
            }
        });
    },

    editBook: function(grid, record) {
        //        var view = Ext.widget('bookedit');
        //        view.down('form').loadRecord(record);
    }
});