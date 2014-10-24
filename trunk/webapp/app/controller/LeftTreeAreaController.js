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
                                click: add
                            },
                            'lefttree tool[itemId=toggleTool]': {
                                click: this.changeView
                            },
                            '#autoriButton': {
                                click: setActiveView
                            },
                            '#booksButton': {
                                click: setActiveView
                            }
                        });
            },

            refreshTree: function(toolItem, event, eOpts) {
                if (getActiveItemId() === 'treeAutori') {
                    refreshLeftTree('treeautori');
                } else {
                    refreshLeftTree('treebooks');
                }
            }
        });