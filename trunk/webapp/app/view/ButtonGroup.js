Ext.define('BM.view.ButtonGroup',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.buttongroup',
    bodyPadding: 10,

    items: [{
        xtype: 'fieldcontainer',
        defaultType: 'button',

        layout: 'anchor',
        defaults: {
            layout: '100%'
        },

        items: [{
            text: 'Adauga',
            name: 'addField',
            action: 'add-book'
        }, {
            text: 'Modifica',
            name: 'modField',
            action: 'mod-book',
            disabled: true
        },{
            text: 'Sterge',
            name: 'deField',
            action: 'del-book',
            disabled: true
        }]
    }]
});