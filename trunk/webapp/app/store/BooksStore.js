var itemsPerPage = 10;
Ext.define('BM.store.BooksStore', {
    extend: 'Ext.data.Store',
    model: 'BM.model.BooksModel',
    autoLoad: {
        params: {
            start: 0,
            limit: itemsPerPage
        }
    },
    autoSync: true, //this can cause performance issues!
    pageSize: 10,

    //    groupField: 'author',

    proxy: {
        type: 'ajax',
        api: {
        	read: 'books?event=get-books'
        },
        reader: {
            type: 'json',
            root: 'books',
            successProperty: 'success',
            totalProperty: 'total'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            root: 'data'
        },
    }
});