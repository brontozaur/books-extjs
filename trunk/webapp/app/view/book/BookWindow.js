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
            minWidth: 400,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'form',
                    itemId: 'bookform',
                    bodyPadding: 10,
                    fieldDefaults: {
                        labelAlign: 'left',
                        labelWidth: 90
                    },
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
                        },
                        {
                            xtype: 'panel',
                            hideLabel: true,
                            layout: 'hbox',
                            height: 100,
                            border: false,
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Front cover:',
                                    width: 90
                                },
                                {
                                    xtype: 'component',
                                    height: 100,
                                    width: 100,
                                    autoEl: {
                                        tag: 'img',
                                        src: 'https://d.gr-assets.com/books/1353277730m/11588.jpg',
                                        itemId: 'frontCoverPreview'
                                    }
                                },
                                {
                                    xtype: 'filefield',
                                    buttonOnly: false,
                                    buttonText: "Upload",
                                    name: 'frontCoverUpload',
                                    buttonOnly: true,
                                    buttonCfg: {
                                        text: '',
                                        iconCls: 'icon-upload'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            hideLabel: true,
                            layout: 'hbox',
                            height: 100,
                            border: false,
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Back cover:',
                                    width: 90
                                },
                                {
                                    xtype: 'component',
                                    height: 100,
                                    width: 100,
                                    autoEl: {
                                        tag: 'img',
                                        src: 'http://img.timeinc.net/time/photoessays/2009/top10_airport_books/davinci_code.jpg',
                                        itemId: 'backCoverPreview'
                                    }
                                },
                                {
                                    xtype: 'filefield',
                                    buttonOnly: false,
                                    buttonText: "Upload",
                                    name: 'backCoverUpload',
                                    buttonOnly: true,
                                    buttonCfg: {
                                        text: '',
                                        iconCls: 'icon-upload'
                                    }
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