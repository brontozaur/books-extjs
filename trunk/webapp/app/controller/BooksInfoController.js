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
    	var autorField = Ext.ComponentQuery.query('bookinfo textfield[name=autorField]')[0];
    	var titleField = Ext.ComponentQuery.query('bookinfo textfield[name=titleField]')[0];
    	var dateField = Ext.ComponentQuery.query('bookinfo textfield[name=dateField]')[0];

        Ext.Ajax.request({
            url : 'books',
            method:'GET', 
            params : {
                event: 'save-book',
                title: titleField.getValue(),
                autor: autorField.getValue(),
                dataAparitie: dateField.getValue()
            },
            scope : this,
          success : function(result, request) {
        	  alert('Book was succesfully stored!');
              clearInfoAreaFields();
              enableInfoAreaFields(false);
              enablebuttons(false);
        	  enablesavebutton(false);
        },
        failure : function(result, request) {
        	alert('Save failed!');
        }
    });  
    },
});