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
            action: 'add-book'
        }, {
            text: 'Modifica',
            action: 'mod-book',
            disabled: true
        },{
            text: 'Sterge',
            action: 'del-book',
            disabled: true
        },{
            text: 'Salveaza',
            action: 'save-book',
            disabled: true
        }]
    }]
});