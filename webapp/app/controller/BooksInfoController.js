Ext.define('BM.controller.BooksInfoController', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.window.MessageBox'],
    stores: [
        'BooksStore',
        'AutorStore',
        'EdituraStore'
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
    	hiddenBookIdField.setValue('');
    },

    modBook: function(button, clickEvent, options) {
  	  enableInfoAreaFields(true);
	  enablesavebutton(true);
	  var delButton = Ext.ComponentQuery.query('bookinfo button[action=del-book]')[0];
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
            	  Ext.widget('booklistview').getStore().load();
            },
            failure : function(result, request) {
            	alert('Delete operation has failed miserably!');
            }
        });  
    	}
    },
    
    saveBook: function(button, clickEvent, options) {
    	var hiddenBookIdField = Ext.ComponentQuery.query('bookinfo hidden[name=bookIdHidden]')[0];
    	var autorField = Ext.ComponentQuery.query('bookinfo autorCombo[name=autorField]')[0];
    	var titleField = Ext.ComponentQuery.query('bookinfo textfield[name=titleField]')[0];
    	var dateField = Ext.ComponentQuery.query('bookinfo datefield[name=dateField]')[0];
    	
    	if (!this.validate()){
    		return;
    	}
    	
        Ext.Ajax.request({
            url : 'books',
            method:'POST', 
            params : {
                event: 'save-book',
                bookId: hiddenBookIdField.getValue(),
                title: titleField.getValue(),
                autorId: autorField.getValue(),
                dataAparitie: dateField.parseDate(dateField.getValue())
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
    validate : function(){
    	var autorField = Ext.ComponentQuery.query('bookinfo autorCombo[name=autorField]')[0]
    	if (Ext.isEmpty(autorField.getValue())){
			Ext.Msg.show({
			    title: 'Autor neselectat',
			    msg: 'Selectati autorul',
			    width: 300,
			    buttons: Ext.Msg.OK,
			    animateTarget: autorField,
			    icon: Ext.window.MessageBox.WARNING
			});
			autorField.focus();
			return false;
    	}
    	
    	var titleField = Ext.ComponentQuery.query('bookinfo textfield[name=titleField]')[0]
    	if (Ext.isEmpty(titleField.getValue())){
			Ext.Msg.show({
			    title: 'Nume necompletat',
			    msg: 'Introduceti numele cartii',
			    width: 300,
			    buttons: Ext.Msg.OK,
			    animateTarget: titleField,
			    icon: Ext.window.MessageBox.WARNING
			});
			return false;
    	}
    	
    	var dateField = Ext.ComponentQuery.query('bookinfo datefield[name=dateField]')[0]
    	if (!Ext.isEmpty(dateField.getValue())){
    		if (!dateField.isValid()){
    			Ext.Msg.show({
    			    title: 'Data invalida',
    			    msg: 'Introduceti o data corecta.',
    			    width: 300,
    			    buttons: Ext.Msg.OK,
    			    animateTarget: dateField,
    			    icon: Ext.window.MessageBox.WARNING
    			});
    			return false;
    		}
    	}
    	
    	return true;
    }
});