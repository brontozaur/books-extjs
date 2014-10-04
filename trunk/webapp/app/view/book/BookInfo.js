Ext.define('BM.view.book.BookInfo', {
            extend: 'Ext.panel.Panel',
            alias: 'widget.bookinfo',
            bodyPadding: 20,
            title: 'Detalii carte',
            defaults: {
                xtype: 'displayfield',
                labelCls: 'book-info-label',
                fieldCls: 'book-info-label-value',
                hidden:true
            },
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
            fieldLabel: 'Autor',
            itemId: 'autor'
        },
        {
            fieldLabel: 'Titlu',
            itemId: 'title'
        },
        {
            fieldLabel: 'Data aparitie',
            itemId: 'data'
        },
        {
            fieldLabel: 'Titlu original',
            itemId: 'originalTitle'
        },
        {
            fieldLabel: 'ISBN',
            itemId: 'isbn'
        },
        {
            fieldLabel: 'Citita',
            itemId: 'citita'
        },
        {
            fieldLabel: 'Serie',
            itemId: 'serie'
        },
        {
            fieldLabel: 'Nr pagini',
            itemId: 'nrPagini'
        },
        {
            fieldLabel: 'Dimensiuni',
            itemId: 'dimensiuni'
        },
        {
            fieldLabel: 'Editura',
            itemId: 'numeEditura'
        },
        {
            fieldLabel: 'Gen',
            itemId: 'numeCategorie'
        }
    ];
}