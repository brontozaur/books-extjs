Ext.define('BM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['Ext.layout.container.Border',
               'BM.view.EastRegion'],
    layout: 'border',
    items: [{
        xtype: 'toolbar',
        region: 'north',
        height: 40,
        padding: '7 5 5 10',
        baseCls:'app-header',
        html: 'Books Manager'
    }, {
        xtype: 'panel',
        region: 'center',
        items: [{
            xtype: 'booklistview'
        }]
    }, {
        xtype: 'panel',
        region: 'east',
        width: '30%',
        collapseDirection: 'right',
        collapsible: true,
        split: true,
        title:'Book info',
        items: [{
            xtype: 'eastregion'
        }]
    }, {
        xtype: 'panel',
        region: 'south',
        html: 'Status for all books',
        height: 30
    }]
});