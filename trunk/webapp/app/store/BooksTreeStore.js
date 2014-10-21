Ext.define('BM.store.BooksTreeStore', {
            extend: 'Ext.data.TreeStore',
            model: 'BM.model.BooksTreeModel',
            autoLoad: true,
            autoSync: true,
            proxy: {
                type: 'ajax',
                url: 'books?event=get-tree&viewmode=byAutor&displayMode=default',
                reader: {
                    type: 'json',
                    method: 'POST'
                }
            },
            root: {
                expanded: true
            },
            sorters: [
                {
                    property: 'name',
                    direction: 'ASC'
                }
            ]
        });