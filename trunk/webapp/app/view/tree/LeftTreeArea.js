Ext.define('BM.view.tree.LeftTreeArea', {
            extend: 'Ext.panel.Panel',
            alias: 'widget.lefttree',
            layout: 'card',
            padding: '0 2 2 2',
            activeItem: 'treeAutori',
            title: 'Autori',
            split: true,
            collapsible: true,
            border: false,
            items: this.buildItems(),
            dockedItems: this.buildDockedItems(),
            tools: [
                {
                    type: 'plus',
                    itemId: 'addTool',
                    tooltip: ''
                },
                {
                    type: 'refresh',
                    itemId: 'refreshTool',
                    tooltip: 'Refresh'
                },
                {
                    type: 'toggle',
                    itemId: 'toggleTool',
                    tooltip: 'Schimba mod vizualizare'
                }
            ]
        });

function buildItems() {
    return [
        {
            xtype: 'treeautori',
            itemId: 'treeAutori'
        },
        {
            xtype: 'treebooks',
            itemId: 'treeBooks'
        }
    ];
}

function buildDockedItems() {
    return [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            style: {
                background: 'transparent'
            },
            items: [
                {
                    xtype: 'button',
                    itemId: 'autoriButton',
                    text: 'Autori',
                    iconCls: 'icon-back'
                },
                '->',
                {
                    xtype: 'button',
                    text: 'Carti',
                    itemId: 'booksButton',
                    iconCls: 'icon-forward',
                    iconAlign: 'right'
                }
            ]
        }
    ];
}