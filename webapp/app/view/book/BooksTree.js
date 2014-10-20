Ext.define('BM.view.book.BooksTree', {
            extend: 'Ext.tree.Panel',
            alias: 'widget.bookstree',
            store: 'BooksTreeStore',
            displayField: 'treeItemName',
            rootVisible: false,
            tools: [
                {
                    type: 'refresh'
                },
                {
                    type: 'search'
                }
            ]
        });