Ext.define('BM.view.AutorGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.autorgrid',
    requires: [
        'BM.core.format.DateFormatter'
    ],

    title: 'Autori',
    
    selType: 'rowmodel',
    
    columnLines: true,

    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        })
    ],

    store: 'AutorStore',

    features: [{
        ftype: 'grouping'
    }],
    
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
            header: 'Nume',
            dataIndex: 'nume',
            flex: 1,
            editor: 'textfield'
        }, {
            header: 'Data nasterii',
            dataIndex: 'dataNasterii',
            flex: 1
        }];
    }
});