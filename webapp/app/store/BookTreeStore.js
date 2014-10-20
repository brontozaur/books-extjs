Ext.define('BM.store.BookTreeStore', {
            extend: 'Ext.data.TreeStore',
            model: 'BM.model.TreeModel',
            autoLoad: true,
            autoSync: true, // this can cause performance issues!
            proxy: {
                type: 'ajax',
                url: 'books',
                api: {
                    read: 'books?event=get-tree&mode=letters'
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