Ext.define('BM.controller.TreeAutoriController', {
            extend: 'BM.controller.AbstractLeftTreeAreaController',
            stores: [
                'TreeAutoriStore'
            ],

            views: [
                'tree.TreeAutori'
            ],

            refs: [
                {
                    ref: 'tree',
                    selector: 'treeautori'
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
                me.control({
                            'treeautori': {
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
                            var numeAutor = record.get('authorName');
                            return numeAutor.indexOf(treeItemValue) === 0; // starts with this letter
                        }
                    }
                ]);
                clearInfoAreaFields();
                enablebuttonsAutor(false);
            },

            add: function() {
                var me = this;
                if (me.getTree() === me.getActiveItem()) {
                    var window = Ext.widget('autorwindow');
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