Ext.define('BM.controller.TreeEdituraController', {
            extend: 'BM.controller.AbstractLeftTreeAreaController',
            stores: [
                'TreeEdituraStore'
            ],

            refs: [
                {
                    ref: 'tree',
                    selector: 'treeeditura'
                },
                {
                    ref: 'leftTreeArea',
                    selector: 'lefttree'
                },
                {
                    ref: 'changeViewButton',
                    selector: 'lefttree tool[itemId=toggleTool]'
                }
            ],

            init: function() {
                var me = this;
                this.control({
                            'treeeditura': {
                                beforeload: this.loadParamsToRequest,
                                itemclick: this.itemClick,
                                itemcontextmenu: this.itemContextMenu,
                                containercontextmenu: this.showMenu
                            }
                        });
                me.callParent(arguments);
            },

            loadParamsToRequest: function(store, operation, eOpts) {
                var node = operation.node;
                operation.params.nodeId = node.get('name');
                operation.params.displayMode = this.getTree().displayMode;
            },

            itemClick: function(tree, recordItem, item, index, e, eOpts) {
                var treeItemValue = recordItem.get('name');
                var grid = Ext.ComponentQuery.query('booksgrid')[0];
                var store = grid.getStore();
                store.clearFilter(true);
                store.filter([
                    {
                        filterFn: function(record) {
                            if (Ext.isEmpty(treeItemValue)) {
                                return true;
                            }
                            var numeEditura = record.get('numeEditura').toLowerCase();
                            return numeEditura.indexOf(treeItemValue.toLowerCase()) === 0; // starts with this letter
                        }
                    }
                ]);
                clearInfoAreaFields();
                enablebuttons(false);
            },

            add: function() {
                var me = this;
                if (me.getTree() === me.getActiveItem()) {
                    var window = Ext.widget('editurawindow');
                    window.show();
                }
            },

            refreshTree: function() {
                var me = this;
                if (me.getTree() === me.getActiveItem()) {
                    me.refreshTreeInternal();
                }
            },

            changeView: function(toolItem, event, eOpts) {
                var me = this;
                if (me.getTree() === me.getActiveItem()) {
                    me.changeViewInternal();
                }
            },

            setActiveView: function(tree) {
                var me = this;
                if (me.getTree() === me.getActiveItem()) {
                    me.setActiveViewInternal(tree);
                }
            }
        });