Ext.define('BM.store.TreeBooksStore', {
            extend: 'Ext.data.TreeStore',
            model: 'BM.model.TreeBooksModel',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'books?event=get-tree&viewmode=byBooks',
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