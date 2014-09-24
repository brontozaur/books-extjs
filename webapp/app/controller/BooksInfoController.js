Ext.define('BM.controller.BooksInfoController', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.window.MessageBox'],
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
    	var hiddenBookIdField = Ext.ComponentQuery.query('bookinfo hidden[name=bookIdHidden]')[0];
    	var hiddenAutorIdField = Ext.ComponentQuery.query('bookinfo hidden[name=autorIdHidden]')[0];
    	hiddenBookIdField.setValue('');
    	hiddenAutorIdField.setValue('');
    },

    modBook: function(button, clickEvent, options) {
  	  enableInfoAreaFields(true);
	  enablesavebutton(true);  	
    },

    delBook: function(button, clickEvent, options) {
    	Ext.MessageBox.confirm('Confirmare', 'Sunteti sigur?', this.deleteBook);
    },
    
    deleteBook: function(btn){
    	if (btn == 'yes'){
    		var hiddenBookIdField = Ext.ComponentQuery.query('bookinfo hidden[name=bookIdHidden]')[0];
            Ext.Ajax.request({
                url : 'books',
                method:'POST', 
                params : {
                    event: 'del-book',
                    bookId: hiddenBookIdField.getValue()
                },
                scope : this,
              success : function(result, request) {
                  clearInfoAreaFields();
                  enableInfoAreaFields(false);
                  enablebuttons(false);
            	  enablesavebutton(false);
            	  alert('Book was succesfully deleted!');
            },
            failure : function(result, request) {
            	alert('Delete operation has failed miserably!');
            }
        });  
    	}
    },
    
    saveBook: function(button, clickEvent, options) {
    	var hiddenBookIdField = Ext.ComponentQuery.query('bookinfo hidden[name=bookIdHidden]')[0];
    	var hiddenAutorIdField = Ext.ComponentQuery.query('bookinfo hidden[name=autorIdHidden]')[0];
    	var autorField = Ext.ComponentQuery.query('bookinfo textfield[name=autorField]')[0];
    	var titleField = Ext.ComponentQuery.query('bookinfo textfield[name=titleField]')[0];
    	var dateField = Ext.ComponentQuery.query('bookinfo textfield[name=dateField]')[0];

        Ext.Ajax.request({
            url : 'books',
            method:'POST', 
            params : {
                event: 'save-book',
                autorId: hiddenAutorIdField.getValue(),
                bookId: hiddenBookIdField.getValue(),
                title: titleField.getValue(),
                numeAutor: autorField.getValue(),
                dataAparitie: dateField.getValue()
            },
            scope : this,
          success : function(result, request) {
//        	  alert('Book was succesfully stored!');
              clearInfoAreaFields();
              enableInfoAreaFields(false);
              enablebuttons(false);
        	  enablesavebutton(false);
        	  Ext.widget('booklistview').getStore().load();
        },
        failure : function(result, request) {
        	alert('Save failed!');
        }
    });  
    },
});