Ext.define('BM.controller.BooksInfoController', {
    extend: 'Ext.app.Controller',
    stores: [
        'BooksStore'
    ],

    model: [
        'BooksModel'
    ],

    views: [
        'book.BookInfo'
    ],

    init: function() {
        this.control({
            'bookinfo button[action=add-book]': { //vezi http://docs.sencha.com/extjs/4.2.2/#!/api/Ext.ComponentQuery
            	click: this.addBook
            },
            'bookinfo button[action=mod-book]': { //vezi http://docs.sencha.com/extjs/4.2.2/#!/api/Ext.ComponentQuery
            	click: this.modBook
            },
            'bookinfo button[action=del-book]': { //vezi http://docs.sencha.com/extjs/4.2.2/#!/api/Ext.ComponentQuery
            	click: this.delBook
            }
        });
    },

    addBook: function(grid, record) {
        alert('addBook');
        //        var view = Ext.widget('bookedit');
        //        view.down('form').loadRecord(record);
    },
    
    modBook: function(grid, record) {
        alert('modBook');
    },
    
    delBook: function(grid, record) {
        alert('delBook');
    }
});