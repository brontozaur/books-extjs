Ext.define('BM.view.book.BooksTree', {
            extend: 'Ext.tree.Panel',
            alias: 'widget.bookstree',
            store: 'BooksTreeStore',
            displayField: 'treeItemName',
            rootVisible: true,
            tools: [
             {
                    type: 'plus',
                    itemId: 'addTool'
                },
                {
                    type: 'refresh',
                    itemId: 'refreshTool'
                }
            ]
        });