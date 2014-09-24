Ext.define('BM.view.book.BookInfo',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.bookinfo',
    bodyPadding: 10,
    requires: ['BM.view.ButtonGroup',
               'BM.view.AutorCombo'],
    
    items: [{
    	xtype:'hidden',
    	name:'bookIdHidden',
    	value:''
    	},{
        	xtype:'hidden',
        	name:'autorIdHidden',
        	value:''
    	},{
        xtype: 'fieldcontainer',
        defaultType: 'textfield',

        layout: 'anchor',
        defaults: {
            layout: '100%'
        },

        fieldDefaults: {
            msgTarget: 'side',
            labelAlign: 'side',
            labelWidth: 50
        },

        items: [{
        	fieldLabel: 'Autor',
        	xtype: 'autorCombo',
        	name: 'autorField',
            disabled: true
        }, {
            fieldLabel: 'Titlu',
            name: 'titleField',
            disabled: true
        },{
        	xtype: 'datefield',
            fieldLabel: 'An aparitie',
            name: 'dateField',
            disabled: true
        }]
    }],
    dockedItems: [{
        xtype: 'buttongroup',
        dock: 'bottom'
    }]
});