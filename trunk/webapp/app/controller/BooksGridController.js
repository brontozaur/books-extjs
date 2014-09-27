Ext.define('BM.controller.BooksGridController', {
    extend: 'Ext.app.Controller',
    stores: [
        'BooksStore'
    ],

    model: [
        'BooksModel'
    ],

    views: [
        'book.BooksGrid'
    ],

    init: function() {
        this.control({
            'booksgrid': { //vezi http://docs.sencha.com/extjs/4.2.2/#!/api/Ext.ComponentQuery
            	selectionchange: this.changeselection
            }, 'booksgrid button[action=add-book]': {
                click: this.addBook
            },
            'booksgrid button[action=mod-book]': {
                click: this.modBook
            },
            'booksgrid button[action=del-book]': {
                click: this.delBook
            }
        });
    },

    changeselection: function(selModel, selected, eOpts ) {
    	enablesavebutton(false);
    	enableInfoAreaFields(false);
    	if (selected.length >0) {
        	enablebuttons(true);
    		this.fillInfoArea(selected[0]);
    	}
    },
    
    fillInfoArea: function(record){
    	var hiddenBookIdField = Ext.ComponentQuery.query('bookinfo hidden[name=bookIdHidden]')[0];
    	hiddenBookIdField.setValue(record.get('bookId'));
    	var autorField = Ext.ComponentQuery.query('bookinfo autorCombo[name=autorField]')[0];
    	autorField.setValue(record.get('author').autorId);
    	var titleField = Ext.ComponentQuery.query('bookinfo textfield[name=titleField]')[0];
    	titleField.setValue(record.get('title'));
    	var dateField = Ext.ComponentQuery.query('bookinfo textfield[name=dateField]')[0];
    	dateField.setValue(record.get('dataAparitie'));    	
    },
    
    addBook: function(button, clickEvent, options) {
        clearInfoAreaFields();
        enableInfoAreaFields(true);
        enablebuttons(false);
        enablesavebutton(true);
    	var hiddenBookIdField = Ext.ComponentQuery.query('bookinfo hidden[name=bookIdHidden]')[0];
    	hiddenBookIdField.setValue('');
    },

    modBook: function(button, clickEvent, options) {
  	  enableInfoAreaFields(true);
	  enablesavebutton(true);
	  var delButton = Ext.ComponentQuery.query('booksgrid button[action=del-book]')[0];
	  delButton.disable();
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
//            	  alert('Book was succesfully deleted!');
            	  Ext.widget('booksgrid').getStore().load();
            },
            failure : function(result, request) {
            	alert('Delete operation has failed miserably!');
            }
        });  
    	}
    }
});