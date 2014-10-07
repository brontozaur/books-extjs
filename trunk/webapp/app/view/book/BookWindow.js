Ext.define('BM.view.book.BookWindow', {
            extend: 'Ext.window.Window',
            alias: 'widget.bookwindow',
            title: 'Editare detalii carte',
            requires: [
                'BM.view.autor.AutorCombo',
                'BM.view.editura.EdituraCombo',
                'BM.view.categorie.CategorieCombo'
            ],
            minWidth: 600,
            layout: 'fit',
            items: [
                {
                    xtype: 'form',
                    itemId: 'bookform',
                    bodyPadding: 10,
                    defaults: {
                        labelStyle: 'font-weight:bold;'
                    },
                    items: [
                        {
                            xtype: 'hidden',
                            name: 'bookId',
                            value: ''
                        },
                        {
                            xtype: 'panel',
                            hideLabel: true,
                            layout: 'hbox',
                            border: false,
                            items: [
                                {
                                    xtype: 'panel',
                                    hideLabel: true,
                                    border: false,
                                    defaults: {
                                        labelStyle: 'font-weight:bold;'
//                                        labelAlign: 'top'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Titlu',
                                            name: 'title'
                                        },
                                        {
                                            fieldLabel: 'Autor',
                                            xtype: 'autorCombo',
                                            name: 'authorId'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Titlu original',
                                            name: 'originalTitle'
                                        },
                                        {
                                            fieldLabel: 'Editura',
                                            xtype: 'edituraCombo',
                                            name: 'idEditura'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'ISBN',
                                            name: 'isbn'
                                        },
                                        {
                                            xtype: 'checkbox',
                                            fieldLabel: 'Citita',
                                            name: 'citita'
                                        },
                                        {
                                            fieldLabel: 'Categorie',
                                            xtype: 'categorieCombo',
                                            name: 'idCategorie'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Serie',
                                            name: 'serie'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Inaltime',
                                            name: 'height',
                                            width: 150
                                        },
                                        {
                                            xtype: 'datefield',
                                            fieldLabel: 'An aparitie',
                                            name: 'dataAparitie',
                                            width: 150
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Nr pagini',
                                            name: 'nrPagini',
                                            width: 160
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Latime',
                                            name: 'width',
                                            width: 150
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    hideLabel: true,
                                    layout: 'vbox',
                                    border: false,
                                    padding: '0 0 0 50',
                                    items: [
                                        {
                                            xtype: 'component',
                                            height: 164,
                                            width: 128,
                                            autoEl: {
                                                tag: 'img',
                                                src: 'https://d.gr-assets.com/books/1353277730m/11588.jpg',
                                                itemId: 'frontCoverPreview'
                                            }
                                        },
                                        {
                                            xtype: 'filefield',
                                            buttonOnly: false,
                                            labelAlign: 'top',
                                            labelStyle: 'font-weight:bold;',
                                            fieldLabel: 'Front cover',
                                            width: 164,
                                            buttonText: "Upload",
                                            name: 'frontCoverUpload',
                                            iconCls: 'icon-upload'
                                        }
                                    ]
                                }
                            ]
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