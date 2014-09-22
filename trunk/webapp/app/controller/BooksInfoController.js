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
            'bookinfo button[action=mod-book]': {
                click: this.modBook
            },
            'bookinfo button[action=del-book]': {
                click: this.delBook
            },
            'bookinfo button[action=save-book]': {
                click: this.saveBook
            }
        });
    },

    addBook: function(button, clickEvent, options) {
        clearInfoAreaFields();
        enableInfoAreaFields(true);
        enablebuttons(false);
        enablesavebutton(true);
    },

    modBook: function(button, clickEvent, options) {
        enableInfoAreaFields(true);
        enablesavebutton(true);
    },

    delBook: function(button, clickEvent, options) {
        Ext.Msg.show({
            title: 'Confirmare stergere',
            msg: 'Sunteti siguri ca doriti stergerea cartii selectate?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION
        });
    },

    saveBook: function(button, clickEvent, options) {
        //1. Get the grid's store
        //2. Create a new model instance
        //3. Add model instance to the store.

        var grid = Ext.widget('booklistview');
        var store = grid.getStore();

        var autorField = Ext.ComponentQuery.query('bookinfo textfield[name=autorField]')[0];
        var titleField = Ext.ComponentQuery.query('bookinfo textfield[name=titleField]')[0];
        var dateField = Ext.ComponentQuery.query('bookinfo textfield[name=dateField]')[0];

        store.add({
            id: '5',
            author: autorField.getValue(),
            title: titleField.getValue(),
            data: dateField.getValue()
        });

    },
});