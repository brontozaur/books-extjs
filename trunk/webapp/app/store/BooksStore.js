var itemsPerPage = 1; 
Ext.define('BM.store.BooksStore', {
    extend: 'Ext.data.Store',
    model: 'BM.model.BooksModel',
    autoLoad: {
        params: {
            start: 0,
            limit: itemsPerPage
        }
    },
    pageSize: 1,

//    groupField: 'author',

    proxy: {
        type: 'ajax',
        api: {
            read: 'data/books.json',
            update: 'data/updateBooks.json'
        },
        reader: {
            type: 'json',
            root: 'books',
            successProperty: 'success',
            totalProperty: 'total'
        }
    }
});