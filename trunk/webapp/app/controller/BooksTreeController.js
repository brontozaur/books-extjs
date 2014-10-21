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
                            }
                        });
            },

            loadParamsToRequest: function(store, operation, eOpts) {
                if (!store.isRefreshTool) {
                    var node = operation.node;
                    operation.params.nodeId = node.get('name');
                } else {
                    var tree = Ext.widget('bookstree');
//                    tree.getLoader().load(operation.node); //TODO
                }
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
                var store = Ext.widget('bookstree').getStore();
                store.isRefreshTool = true;
                store.reload(); // TODO reload of the main letter tree + reload of the current node
                store.isRefreshTool = false;
            }
        });