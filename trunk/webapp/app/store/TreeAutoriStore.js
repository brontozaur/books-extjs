Ext.define('BM.store.TreeAutoriStore', {
            extend: 'Ext.data.TreeStore',
            model: 'BM.model.TreeAutoriModel',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'books?event=get-tree&viewmode=byAutor',
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