Ext.define('BM.store.TreeBooksStore', {
            extend: 'Ext.data.TreeStore',
            model: 'BM.model.TreeBooksModel',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'books?event=get-tree-books',
                reader: {
                    type: 'json',
                    method: 'POST'
                }
            },
            root: {
                expanded: true,
                name: 'CARTI'
            },
            sorters: [
                {
                    property: 'treeItemName',
                    direction: 'ASC'
                }
            ]
        });