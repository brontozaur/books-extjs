Ext.define('BM.controller.BooksTreeController', {
            extend: 'Ext.app.Controller',
            stores: [
                'BooksTreeStore'
            ],

            model: [
                'BooksTreeModel'
            ],

            init: function() {
                this.control({
                            'bookstree': {
                                beforeload: this.loadParamsToRequest,
                                itemclick: this.itemClick
                            },
                            'bookstree tool[itemId=refreshTool]': {
                                click: this.refreshTree
                            },
                            'bookstree tool[itemId=addTool]': {
                                click: this.addAuthor
                            }
                        });
            },

            loadParamsToRequest: function(store, operation, eOpts) {
                var node = operation.node;
                operation.params.nodeId = node.get('name');
            },

            itemClick: function(tree, recordItem, item, index, e, eOpts) {
                var treeItemValue = recordItem.get('name');
                var grid = Ext.widget('booksgrid');
                var store = grid.getStore();
                store.clearFilter(true);
                store.filter([
                    {
                        filterFn: function(record) {
                            if (Ext.isEmpty(treeItemValue)) {
                                return true;
                            }
                            var numeAutor = record.get('authorName');
                            return numeAutor.indexOf(treeItemValue) === 0; // starts with this letter
                        }
                    }
                ]);
                clearInfoAreaFields();
                enablebuttons(false);
            },

            refreshTree: function(toolItem, event, eOpts) {
				refreshAutorTree();
            },

            addAuthor: function(toolItem, event, eOpts) {
                var window = Ext.widget('autorwindow');
                window.show();
            }
        });