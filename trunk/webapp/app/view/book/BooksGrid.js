Ext.define('BM.view.book.BooksGrid', {
            extend: 'Ext.grid.Panel',
            alias: 'widget.booksgrid',
            title: 'Lista carti',
            selType: 'rowmodel',
            columnLines: true,
            store: 'BookStore',
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: 'BookStore',
                    dock: 'bottom',
                    displayInfo: true
                },
                {
                    xtype: 'toolbar',
                    items: [
                        {
                            iconCls: 'icon-add',
                            text: 'Adaugare',
                            action: 'add-book',
                            scope: this
                        },
                        {
                            iconCls: 'icon-mod',
                            text: 'Modificare',
                            disabled: true,
                            action: 'mod-book',
                            scope: this
                        },
                        {
                            iconCls: 'icon-delete',
                            text: 'Stergere',
                            disabled: true,
                            action: 'del-book',
                            scope: this
                        }
                    ],
                    dock: 'top'
                }
            ],

            initComponent: function() {
                this.columns = this.buildColumns();
                this.callParent(arguments);

                this.store.load({
                            params: {
                                start: 0,
                                limit: BM.store.BookStore.itemsPerPage
                            }
                        });
            },

            buildColumns: function() {
                return [
                    {
                        header: 'Autor',
                        dataIndex: 'authorName',
                        flex: 2,
                        editor: 'textfield'
                    },
                    {
                        header: 'Titlu',
                        dataIndex: 'title',
                        flex: 2
                    },
                    {
                        header: 'Data aparitie',
                        dataIndex: 'dataAparitie',
                        flex: 1,
                        editor: 'datefield',
                        renderer: Ext.util.Format.dateRenderer('m/d/Y')
                    },
                    {
                        header: 'Titlu original',
                        dataIndex: 'originalTitle',
                        flex: 1
                    },
                    {
                        header: 'ISBN',
                        dataIndex: 'isbn',
                        flex: 1
                    },
                    {
                        header: 'Serie',
                        dataIndex: 'serie',
                        flex: 1
                    },
                    {
                        header: 'Nr pagini',
                        dataIndex: 'nrPagini',
                        flex: 1
                    },
                    {
                        header: 'Editura',
                        dataIndex: 'numeEditura',
                        flex: 1
                    },
                    {
                        header: 'Gen',
                        dataIndex: 'numeCategorie',
                        flex: 1
                    },
                    {
                        header: 'Latime (mm)',
                        dataIndex: 'width',
                        flex: 1
                    },
                    {
                        header: 'Inaltime (mm)',
                        dataIndex: 'height',
                        flex: 1
                    },
                    {
                        header: 'Citita',
                        dataIndex: 'citita',
                        flex: 1
                    }
                ];
            }
        });