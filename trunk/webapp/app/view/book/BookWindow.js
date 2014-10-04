Ext.define('BM.view.book.BookWindow', {
            extend: 'Ext.window.Window',
            alias: 'widget.bookwindow',
            title: 'Editare detalii carte',
            requires: [
                'BM.view.autor.AutorCombo',
                'BM.view.editura.EdituraCombo'
            ],
            minHeight: 300,
            minWidth: 500,
            items: [
                {
                    xtype: 'form',
                    itemId: 'bookform',
                    minHeight: 300,
                    minWidth: 500,
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'hidden',
                            name: 'bookId',
                            value: ''
                        },
                        {
                            fieldLabel: 'Autor',
                            xtype: 'autorCombo',
                            name: 'authorId'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Titlu',
                            name: 'title'
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'An aparitie',
                            name: 'dataAparitie'
                        },
                        {
                            fieldLabel: 'Editura',
                            xtype: 'edituraCombo',
                            name: 'idEditura'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Titlu original',
                            name: 'originalTitle'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'ISBN',
                            name: 'isbn'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Serie',
                            name: 'serie'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Nr pagini',
                            name: 'nrPagini'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Latime',
                            name: 'width'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Inaltime',
                            name: 'height'
                        },
                        {
                            xtype: 'checkbox',
                            fieldLabel: 'Citita',
                            name: 'citita'
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'Salvare',
                    itemId: 'saveBtn',
                    iconCls: 'icon-save'
                },
                {
                    text: 'Renuntare',
                    itemId: 'cancelBtn'
                }
            ]
        });