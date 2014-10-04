var itemsPerPage = 50;
Ext.define('BM.store.BookStore', {
            extend: 'Ext.data.Store',
            model: 'BM.model.BookModel',
            autoLoad: {
                params: {
                    start: 0,
                    limit: itemsPerPage
                }
            },
            autoSync: true, // this can cause performance issues!
            pageSize: itemsPerPage,

            proxy: {
                type: 'ajax',
                url: 'books',
                api: {
                    read: 'books?event=get-books'
                }
            }
        });