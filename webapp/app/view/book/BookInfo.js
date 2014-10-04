Ext.define('BM.view.book.BookInfo', {
            extend: 'Ext.panel.Panel',
            alias: 'widget.bookinfo',
            bodyPadding: 20,
            title: 'Detalii carte',
            items: this.buildItems(),
            getAutorField: function() {
                return Ext.ComponentQuery.query('bookinfo displayfield[itemId=autor]')[0];
            },
            getTitleField: function() {
                return Ext.ComponentQuery.query('bookinfo displayfield[itemId=title]')[0];
            },
            getOriginalTitleField: function() {
                return Ext.ComponentQuery.query('bookinfo displayfield[itemId=originalTitle]')[0];
            },
            getDataAparitieField: function() {
                return Ext.ComponentQuery.query('bookinfo displayfield[itemId=data]')[0];
            },
            getIsbnField: function() {
                return Ext.ComponentQuery.query('bookinfo displayfield[itemId=isbn]')[0];
            },
            getCititaField: function() {
                return Ext.ComponentQuery.query('bookinfo displayfield[itemId=citita]')[0];
            },
            getSerieField: function() {
                return Ext.ComponentQuery.query('bookinfo displayfield[itemId=serie]')[0];
            },
            getNrPaginiField: function() {
                return Ext.ComponentQuery.query('bookinfo displayfield[itemId=nrPagini]')[0];
            },
            getDimensiuniField: function() {
                return Ext.ComponentQuery.query('bookinfo displayfield[itemId=dimensiuni]')[0];
            },
            getEdituraField: function() {
                return Ext.ComponentQuery.query('bookinfo displayfield[itemId=numeEditura]')[0];
            },
            getGenField: function() {
                return Ext.ComponentQuery.query('bookinfo displayfield[itemId=numeCategorie]')[0];
            }                          
        });

function buildItems() {
    return [
        {
            xtype: 'displayfield',
            fieldLabel: 'Autor',
            itemId: 'autor',
            labelCls: 'book-info-label',
            fieldCls: 'book-info-label-value'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Titlu',
            itemId: 'title',
            labelCls: 'book-info-label',
            fieldCls: 'book-info-label-value'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Data aparitie',
            itemId: 'data',
            labelCls: 'book-info-label',
            fieldCls: 'book-info-label-value'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Titlu original',
            itemId: 'originalTitle',
            labelCls: 'book-info-label',
            fieldCls: 'book-info-label-value'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'ISBN',
            itemId: 'isbn',
            labelCls: 'book-info-label',
            fieldCls: 'book-info-label-value'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Citita',
            itemId: 'citita',
            labelCls: 'book-info-label',
            fieldCls: 'book-info-label-value'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Serie',
            itemId: 'serie',
            labelCls: 'book-info-label',
            fieldCls: 'book-info-label-value'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Nr pagini',
            itemId: 'nrPagini',
            labelCls: 'book-info-label',
            fieldCls: 'book-info-label-value'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Dimensiuni',
            itemId: 'dimensiuni',
            labelCls: 'book-info-label',
            fieldCls: 'book-info-label-value'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Editura',
            itemId: 'numeEditura',
            labelCls: 'book-info-label',
            fieldCls: 'book-info-label-value'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Gen',
            itemId: 'numeCategorie',
            labelCls: 'book-info-label',
            fieldCls: 'book-info-label-value'
        }
    ];
}