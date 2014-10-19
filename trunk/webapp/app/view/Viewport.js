Ext.define('BM.view.Viewport', {
            extend: 'Ext.container.Viewport',
            requires: [
                'Ext.layout.container.Border',
                'BM.view.book.BookZone',
                'BM.view.book.BooksTree',
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
                    bodyStyle: 'border-top-style : none',
                    padding: '5 5 5 5',
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Carti',
                            layout: 'border',
                            padding: '0 1 1 1',
                            items: [
                                {
                                    xtype: 'bookstree',
                                    region: 'west',
                                    width: '15%'
                                },
                                {
                                    region: 'center',
                                    xtype: 'bookzone'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            padding: '0 1 1 1',
                            title: 'Edituri',
                            layout: 'fit',
                            items: {
                                xtype: 'edituragrid'
                            }
                        },
                        {
                            xtype: 'panel',
                            padding: '0 1 1 1',
                            title: 'Autori',
                            layout: 'fit',
                            items: {
                                xtype: 'autorgrid'
                            }
                        },
                        {
                            xtype: 'panel',
                            padding: '0 1 1 1',
                            title: 'Categorii',
                            layout: 'fit',
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
                    border: false,
                    height: 30
                }
            ]
        });