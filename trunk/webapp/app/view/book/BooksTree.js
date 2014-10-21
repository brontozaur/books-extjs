Ext.define('BM.view.book.BooksTree', {
            extend: 'Ext.tree.Panel',
            alias: 'widget.bookstree',
            store: 'BooksTreeStore',
            displayField: 'treeItemName',
            rootVisible: true,
            displayMode: 'flat', //possible modes: default and flat
            tools: [
                {
                    type: 'plus',
                    itemId: 'addTool',
                    tooltip: 'Adauga autor'
                },
                {
                    type: 'refresh',
                    itemId: 'refreshTool',
                    tooltip: 'Refresh'
                },
                {
                    type: 'toggle',
                    itemId: 'toggleTool',
                    tooltip: 'Schimba mod vizualizare'
                }
            ]
        });