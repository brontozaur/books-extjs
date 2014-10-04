Ext.define('BM.view.book.BookWindow', {
            extend: 'Ext.window.Window',
            alias: 'widget.bookwindow',
            title: 'Editare detalii carte',
            requires: [
                'BM.view.autor.AutorCombo',
                'BM.view.editura.EdituraCombo',
                'BM.view.categorie.CategorieCombo'
            ],
            minHeight: 300,
            minWidth: 300,
            layout: {
            	type: 'vbox',
            	align:'stretch'
            },            
            items: [
                {
                    xtype: 'form',
                    itemId: 'bookform',
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
                            xtype: 'textfield',
                            fieldLabel: 'Titlu original',
                            name: 'originalTitle'
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
                            fieldLabel: 'Categorie',
                            xtype: 'categorieCombo',
                            name: 'idCategorie'
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
                            xtype: 'numberfield',
                            fieldLabel: 'Nr pagini',
                            name: 'nrPagini'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Latime',
                            name: 'width'
                        },
                        {
                            xtype: 'numberfield',
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