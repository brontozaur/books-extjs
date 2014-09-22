Ext.define('BM.controller.BooksGridController', {
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
            'booklistview': { //vezi http://docs.sencha.com/extjs/4.2.2/#!/api/Ext.ComponentQuery
            	selectionchange: this.changeselection
            }
        });
    },

    changeselection: function(selModel, selected, eOpts ) {
    	enablebuttons(true);
    	enablesavebutton(false);
    	enableInfoAreaFields(false);
    	fillInfoArea(selected[0]);
    }
});