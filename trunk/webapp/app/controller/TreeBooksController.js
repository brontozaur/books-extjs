Ext.define('BM.controller.TreeBooksController', {
            extend: 'BM.controller.AbstractLeftTreeAreaController',
            stores: [
                'TreeBooksStore'
            ],

            refs: [
                {
                    ref: 'tree',
                    selector: 'treebooks'
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
                            'treebooks': {
                                beforeload: this.loadParamsToRequest,
                                itemclick: this.itemClick,
                                itemcontextmenu: this.itemContextMenu,
                                containercontextmenu: this.showMenu
                            }
                        });
                me.callParent(arguments);
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
                            var numeAutor = record.get('title');
                            return numeAutor.indexOf(treeItemValue) === 0; // starts with this letter
                        }
                    }
                ]);
                clearInfoAreaFields();
                enablebuttons(false);
            },
            
            add: function() {
                var me = this;
                if (me.getTree() === me.getActiveItem()) {
                    var window = Ext.widget('bookwindow');
                    window.show();
                }
            },

            refreshTree: function() {
                var me = this;
                if (me.getTree() === me.getActiveItem()) {
                    me.refreshTreeInternal();
                }
            },

            setActiveView: function(toolItem, event, eOpts) {
                var me = this;
                if (me.getTree() === me.getActiveItem()) {
                    var treeArea = me.getLeftTreeArea();
                    var cardLayout = treeArea.getLayout();
                    cardLayout.setActiveItem('treeAutori');
                    treeArea.setTitle('Grupare dupa autor');
                    this.getChangeViewButton().setVisible(true);
                }
            }
        });