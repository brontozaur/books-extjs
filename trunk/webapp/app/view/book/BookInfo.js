Ext.define('BM.view.book.BookInfo', {
            extend : 'Ext.panel.Panel',
            alias : 'widget.bookinfo',
            bodyPadding : 10,
            title : 'Detalii carte',
            requires : ['BM.view.autor.AutorCombo'],
            items : [{
                        xtype : 'hidden',
                        name : 'bookId',
                        value : ''
                    }, {
                        xtype : 'hidden',
                        name : 'autorId',
                        value : ''
                    }, {
                        xtype : 'fieldcontainer',
                        defaultType : 'textfield',

                        layout : 'anchor',
                        defaults : {
                            layout : '100%'
                        },

                        fieldDefaults : {
                            msgTarget : 'side',
                            labelAlign : 'side',
                            labelWidth : 50
                        },

                        items : [{
                                    fieldLabel : 'Autor',
                                    xtype : 'autorCombo',
                                    name : 'autorField'
                                }, {
                                    fieldLabel : 'Titlu',
                                    name : 'titleField'
                                }, {
                                    xtype : 'datefield',
                                    fieldLabel : 'An aparitie',
                                    name : 'dateField'
                                }]
                    }]
        });