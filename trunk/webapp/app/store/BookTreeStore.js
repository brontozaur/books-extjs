Ext.define('BM.store.BookTreeStore', {
            extend: 'Ext.data.TreeStore',
            model: 'BM.model.BookModel',
            autoLoad: true,
            autoSync: true, // this can cause performance issues!
            proxy: {
                type: 'ajax',
                url: 'books',
                api: {
                    read: 'books?event=get-books'
                }
            }
        });