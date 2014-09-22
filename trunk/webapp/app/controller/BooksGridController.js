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
    	this.enablebuttons(true);
    	this.fillInfoArea(selected[0]);
    },
    
    enablebuttons: function(enable){
        var modButton = Ext.ComponentQuery.query('bookinfo button[action=mod-book]');
        var delButton = Ext.ComponentQuery.query('bookinfo button[action=del-book]');
        if (enable){
        	modButton[0].enable();
        	delButton[0].enable();
        } else {
        	modButton[0].disable();
        	delButton[0].disable();
        }
    },
    
    fillInfoArea: function(record){
    	var autorField = Ext.ComponentQuery.query('bookinfo textfield[name=autorField]')[0];
    	autorField.setValue(record.get('author'));
    	var autorField = Ext.ComponentQuery.query('bookinfo textfield[name=titleField]')[0];
    	autorField.setValue(record.get('title'));
    	var autorField = Ext.ComponentQuery.query('bookinfo textfield[name=dateField]')[0];
    	autorField.setValue(record.get('data'));    	
    }
});