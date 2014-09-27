Ext.define('BM.view.EastRegion', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.eastregion',
    requires: ['BM.view.book.BookInfo',
               'BM.view.EdituraGrid',
               'BM.view.AutorGrid'],
    layout: {
        type: 'accordion',
        titleCollapse: true,
        animate: true,
        activeOnTop: false,
        hideCollapseTool: true, 
        multi: true
    },
    items: [{
        xtype: 'bookinfo'
    }, {
        xtype: 'edituragrid',
        html: 'Edituri',
    }, {
        xtype: 'autorgrid',
        html: 'Autori'
    }]
});