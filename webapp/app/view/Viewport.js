Ext.define('BM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['Ext.layout.container.Border'],
    layout: 'border',
    items: [{
        xtype: 'toolbar',
        region: 'north',
        height: 30,
        html: 'Books Manager'
    }, {
        xtype: 'panel',
        itemId: 'centerregion',
        region: 'center',
        items: [{
            xtype: 'booklistview'
        }]
    }, {
        xtype: 'panel',
        region: 'east',
        html: 'Book info',
        width: 300,
        title: 'Books info',
        collapseDirection: 'right',
        collapsible: true,
        split: true
    }, {
        xtype: 'panel',
        region: 'south',
        html: 'Status for all books',
        height: 30
    }]
});