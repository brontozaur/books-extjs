Ext.define('BM.view.EdituraGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.edituragrid',

    title: 'Edituri',
    
    selType: 'rowmodel',
    
    columnLines: true,

    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        })
    ],

    store: 'EdituraStore',

//    dockedItems: [{
//        xtype: 'pagingtoolbar',
//        store: 'BooksStore',
//        dock: 'bottom',
//        displayInfo: true
//    }],
    
    initComponent: function() {
        this.columns = this.buildColumns();
        this.callParent(arguments);
    },
    
    buildColumns : function(){
    	return [{
            header: 'Nume editura',
            dataIndex: 'numeEditura',
            flex: 1,
            editor: 'textfield'
        }];
    }
});