Ext.define('BM.view.book.BookInfo', {
            extend : 'Ext.panel.Panel',
            alias : 'widget.bookinfo',
            bodyPadding : 10,
            title : 'Detalii carte',
            items : [{
                        xtype : 'hidden',
                        name : 'bookId',
                        value : ''
                    }, {
                        xtype : 'hidden',
                        name : 'autorId',
                        value : ''
                    }, {
                        xtype : 'label',
                        text : '',
                        itemId : 'autor',
                        baseCls: 'book-info-label'
                    }, {
                        xtype : 'label',
                        text : '',
                        itemId : 'autorValue',
                        baseCls: 'book-info-label-value'
                    }, {
                        xtype : 'label',
                        text : '',
                        itemId : 'title',
                        baseCls: 'book-info-label'
                    }, {
                        xtype : 'label',
                        text : '',
                        itemId : 'titleValue',
                        baseCls: 'book-info-label-value'
                    }, {
                        xtype : 'label',
                        text : '',
                        itemId : 'data',
                        baseCls: 'book-info-label'
                    }, {
                        xtype : 'label',
                        text : '',
                        itemId : 'dataValue',
                        baseCls: 'book-info-label-value'
                    }]
        });