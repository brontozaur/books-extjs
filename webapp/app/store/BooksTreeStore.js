Ext.define('BM.store.BooksTreeStore', {
            extend: 'Ext.data.TreeStore',
            model: 'BM.model.BooksTreeModel',
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
            ],

            listeners: {
                beforeload: function(store, operation, eOpts) {
                    var node = operation.node;
                    operation.params.nodeId = node.get('name');
                }
            }
        });