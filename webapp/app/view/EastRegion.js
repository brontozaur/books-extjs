Ext.define('BM.view.EastRegion', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.eastregion',
    requires: ['BM.view.editura.EdituraGrid',
               'BM.view.autor.AutorGrid'],
    layout: {
        type: 'accordion',
        titleCollapse: true,
        animate: true,
        activeOnTop: false,
        hideCollapseTool: true, 
        multi: true,
    },
    items: [{
        xtype: 'edituragrid',
        html: 'Edituri',
    }, {
        xtype: 'autorgrid',
        html: 'Autori'
    }]
});