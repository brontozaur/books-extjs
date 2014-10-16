Ext.define('BM.view.Viewport', {
            extend: 'Ext.container.Viewport',
            requires: [
                'Ext.layout.container.Border',
                'BM.view.book.BookZone',
                'BM.view.editura.EdituraGrid',
                'BM.view.autor.AutorGrid',
                'BM.view.categorie.CategorieGrid'
            ],
            layout: 'border',
            items: [
                {
                    xtype: 'toolbar',
                    region: 'north',
                    height: 40,
                    padding: '7 5 5 10',
                    baseCls: 'app-header',
                    html: 'Books Manager'
                },
                {
                    xtype: 'tabpanel',
                    region: 'center',
                    plain: true,
                    activeTab: 0,
                    items: [
                        {
                            title: 'Carti',
                            layout:'fit',
                            items: {
                                xtype: 'bookzone'
                            }
                        },
                        {
                            title: 'Edituri',
                            layout:'fit',
                            items: {
                                xtype: 'edituragrid'
                            }
                        },
                         {
                            title: 'Autori',
                            layout:'fit',
                            items: {
                                xtype: 'autorgrid'
                            }
                        },
                        {
                            title: 'Categorii',
                            layout:'fit',
                            items: {
                                xtype: 'categoriegrid'
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'south',
                    html: 'Status for all books',
                    height: 30
                }
            ]
        });