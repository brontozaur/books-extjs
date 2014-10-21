Ext.define('BM.view.book.BooksTree', {
            extend: 'Ext.tree.Panel',
            alias: 'widget.bookstree',
            store: 'BooksTreeStore',
            displayField: 'treeItemName',
            rootVisible: false,
//            loader: {
//                autoLoad: true,
//                url: 'books?event=get-tree&viewmode=byAutor'
//            },
            tools: [
             {
                    type: 'plus',
                    itemId: 'expandTool'
                },
                 {
                    type: 'minus',
                    itemId: 'collapseTool'
                },
                {
                    type: 'refresh',
                    itemId: 'refreshTool'
                }
            ]
        });