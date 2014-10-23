Ext.define('BM.controller.LeftTreeAreaController', {
            extend: 'Ext.app.Controller',
            stores: [
                'TreeAutoriStore'
            ],

            model: [
                'TreeAutoriModel'
            ],

            init: function() {
                this.control({
                            'lefttree tool[itemId=refreshTool]': {
                                click: this.refreshTree
                            },
                            'lefttree tool[itemId=addTool]': {
                                click: this.add
                            },
                            'lefttree tool[itemId=toggleTool]': {
                                click: this.changeView
                            },
                            '#autoriButton': {
                                click: this.setActiveView
                            },
                            '#booksButton': {
                                click: this.setActiveView
                            }
                        });
            },

            getActiveItemId: function() {
                var treeArea = Ext.ComponentQuery.query('lefttree')[0];
                return treeArea.getLayout().getActiveItem().itemId;
            },

            refreshTree: function(toolItem, event, eOpts) {
                if (this.getActiveItemId() === 'treeAutori') {
                    refreshLeftTree('treeautori');
                } else {
                    refreshLeftTree('treebooks');
                }
            },

            add: function(toolItem, event, eOpts) {
                var window;
                if (this.getActiveItemId() === 'treeAutori') {
                    window = Ext.widget('autorwindow');
                } else {
                    window = Ext.widget('bookwindow');
                }
                window.show();
            },

            changeView: function(toolItem, event, eOpts) {
            	var treeArea = Ext.ComponentQuery.query('lefttree')[0];
                if (this.getActiveItemId() === 'treeAutori') {
                    var tree = Ext.ComponentQuery.query('treeautori')[0];
                    if ('default' === tree.displayMode) {
                        tree.displayMode = 'flat';
                    } else if ('flat' === tree.displayMode) {
                        tree.displayMode = 'default';
                    }
                    treeArea.setTitle('Autori');
                    refreshLeftTree('treeautori');
                } else {
                    var tree = Ext.ComponentQuery.query('treebooks')[0];
                    if ('default' === tree.displayMode) {
                        tree.displayMode = 'flat';
                    } else if ('flat' === tree.displayMode) {
                        tree.displayMode = 'default';
                    }
                    treeArea.setTitle('Carti');
                    refreshLeftTree('treebooks');
                }
            },

            setActiveView: function(toolItem, event, eOpts) {
                var treeArea = Ext.ComponentQuery.query('lefttree')[0];
                var cardLayout = treeArea.getLayout();
                if (this.getActiveItemId() === 'treeAutori') {
                    cardLayout.setActiveItem('treeBooks');
                    treeArea.setTitle('Carti');
                } else {
                    cardLayout.setActiveItem('treeAutori');
                    treeArea.setTitle('Autori');
                }
            }
        });