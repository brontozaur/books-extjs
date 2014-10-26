Ext.define('BM.store.AutorStore', {
            extend: 'Ext.data.Store',
            model: 'BM.model.AutorModel',
            autoLoad: true,
            autoSync: true,
            proxy: {
                type: 'ajax',
                api: {
                    read: 'books?event=get-autors'
                }
            },
            sorters: [
                {
                    property: 'nume',
                    direction: 'ASC'
                }
            ]
        });