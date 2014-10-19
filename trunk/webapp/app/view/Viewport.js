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
                    bodyStyle: 'border-top-style : none',
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Carti',
                            layout: 'border',
                            items: [
                                {
                                    xtype: 'container',
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
                            title: 'Edituri',
                            layout: 'fit',
                            items: {
                                xtype: 'edituragrid'
                            }
                        },
                        {
                            xtype: 'panel',
                            title: 'Autori',
                            layout: 'fit',
                            items: {
                                xtype: 'autorgrid'
                            }
                        },
                        {
                            xtype: 'panel',
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