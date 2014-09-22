Ext.define('BM.store.BooksStore', {
    extend: 'Ext.data.Store',
    model: 'BM.model.BooksModel',
    autoLoad: true,
    
    groupField: 'author', 
    
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/books.json',
            update: 'data/updateBooks.json'
        },
        reader: {
            type: 'json',
            root: 'books',
            successProperty: 'success'
        }
    }
});