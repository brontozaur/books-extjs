Ext.define('BM.view.EastRegion', {
            extend : 'Ext.panel.Panel',
            alias : 'widget.eastregion',
            requires : [
                'BM.view.editura.EdituraGrid',
                'BM.view.autor.AutorGrid',
                'BM.view.categorie.CategorieGrid'
            ],
            layout : {
                type : 'accordion',
                titleCollapse : true,
                animate : true,
                activeOnTop : false,
                hideCollapseTool : true,
                multi : true
            },
            items : [
                {
                    xtype : 'edituragrid',
                    html : 'Edituri'
                },
                {
                    xtype : 'autorgrid',
                    html : 'Autori'
                },
                {
                    xtype : 'categoriegrid',
                    html : 'Categorii'
                }
            ]
        });