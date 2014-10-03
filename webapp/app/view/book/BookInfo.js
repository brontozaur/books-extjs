Ext.define('BM.view.book.BookInfo', {
            extend : 'Ext.panel.Panel',
            alias : 'widget.bookinfo',
            bodyPadding : 10,
            title : 'Detalii carte',
            items : [
                {
                    xtype : 'displayfield',
                    fieldLabel : 'Autor',
                    itemId : 'autor',
                    labelPad : 10,
                    labelCls : 'book-info-label',
                    fieldCls : 'book-info-label-value'
                },
                {
                    xtype : 'displayfield',
                    fieldLabel : 'Titlu',
                    itemId : 'title',
                    labelPad : 10,
                    labelCls : 'book-info-label',
                    fieldCls : 'book-info-label-value'
                },
                {
                    xtype : 'displayfield',
                    fieldLabel : 'Data aparitie',
                    itemId : 'data',
                    labelPad : 10,
                    labelCls : 'book-info-label',
                    fieldCls : 'book-info-label-value'
                }
            ]
        });