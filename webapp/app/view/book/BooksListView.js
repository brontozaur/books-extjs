Ext.define('BM.view.book.BooksListView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.booklistview',
    requires: [
        'BM.core.format.DateFormatter'
    ],

    title: 'Books',

    selType: 'rowmodel',

    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        })
    ],

    store: 'BooksStore',

//    features: [{
//        ftype: 'grouping'
//    }],
    
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'BooksStore',
        dock: 'bottom',
        displayInfo: true
    }],
    
    listeners: {
    	itemclick: function(currentView, record, item, index, e, eOpts) {
    		
    	}},

    initComponent: function() {
        this.columns = this.buildColumns();
        this.callParent(arguments);
        
        this.store.load({
            params:{
                start:0,
                limit: BM.store.BooksStore.itemsPerPage
            }
        });
    },
    
    buildColumns : function(){
    	return [{
            header: 'Autor',
            dataIndex: 'author',
            flex: 1,
            editor: 'textfield'
        }, {
            header: 'Titlu',
            dataIndex: 'title',
            flex: 1
        }, {
            header: 'Data aparitie',
            dataIndex: 'data',
            flex: 1,
            editor: 'datefield',
            renderer: function(value) {
                return DATEFORMATTER.getDate(value);
            }
        }];
    }
});