Ext.define('BM.controller.TreeAutoriController', {
            extend: 'Ext.app.Controller',
            stores: [
                'TreeAutoriStore'
            ],

            model: [
                'TreeAutoriModel'
            ],

            init: function() {
                this.control({
                            'treeautori': {
                                beforeload: this.loadParamsToRequest,
                                itemclick: this.itemClick,
                                itemcontextmenu: this.itemContextMenu,
                                containercontextmenu: this.showMenu
                            }
                        });
            },

            loadParamsToRequest: function(store, operation, eOpts) {
                var node = operation.node;
                operation.params.nodeId = node.get('name');
                operation.params.displayMode = Ext.ComponentQuery.query('treeautori')[0].displayMode;
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
                enablebuttons(false);
            },

            showMenu: function(panel, event, options) {
                event.stopEvent();
                contextMenu.showAt(event.getXY());
            },

            itemContextMenu: function(xx, record, item, index, e, eOpts) {
                e.stopEvent();
                contextMenu.showAt(e.getXY());
            }
        });

var addAction = Ext.create('Ext.Action', {
            iconCls: 'icon-add',
            text: 'Adauga autor',
            handler: function(widget, event) {
                var window = Ext.widget('autorwindow');
                window.show();
            }
        });

var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                addAction,
                {
                    text: 'Vizualizare...',
                    menu: {
                        items: [
                            {
                                text: 'Autori',
                                checked: true,
                                group: 'vizualizare',
                                handler: function(widget, event) {
                                    setActiveView();
                                }
                            },
                            {
                                text: 'Carti',
                                checked: false,
                                group: 'vizualizare',
                                handler: function(widget, event) {
                                    setActiveView();
                                }
                            }
                        ]
                    }
                }
            ]
        });