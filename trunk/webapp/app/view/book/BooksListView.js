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
            clicksToEdit: 1
        })
    ],

    store: 'BooksStore',

    features: [{
        ftype: 'grouping'
    }],

    initComponent: function() {
        this.columns = this.buildColumns();
        this.callParent(arguments);
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