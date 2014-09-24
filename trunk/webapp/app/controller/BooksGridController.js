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
    	if (selected.length >0) {
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
    }
});