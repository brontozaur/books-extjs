Ext.define('BM.view.Viewport', {
            extend : 'Ext.container.Viewport',
            requires : ['Ext.layout.container.Border', 'BM.view.EastRegion', 'BM.view.book.BookZone'],
            layout : 'border',
            items : [{
                        xtype : 'toolbar',
                        region : 'north',
                        height : 40,
                        padding : '7 5 5 10',
                        baseCls : 'app-header',
                        html : 'Books Manager'
                    }, {
                        xtype : 'bookzone',
                        region : 'center'
                    }, {
                        xtype : 'panel',
                        region : 'east',
                        width : '30%',
                        collapseDirection : 'right',
                        collapsible : true,
                        split : true,
                        title : 'Liste',
                        items : [{
                                    xtype : 'eastregion'
                                }]
                    }, {
                        xtype : 'panel',
                        region : 'south',
                        html : 'Status for all books',
                        height : 30
                    }]
        });