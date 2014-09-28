Ext.define('BM.view.book.BookWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.bookwindow',
    title: 'Editare detalii carte',
    requires: ['BM.view.autor.AutorCombo'],
    minHeight: 300,
    minWidth: 500,
    items: [{
        xtype: 'form',
        itemId: 'bookform',
        minHeight: 300,
        minWidth: 500,
        bodyPadding: 10,
        items: [{
            xtype: 'hidden',
            name: 'bookId',
            value: ''
        }, {
            fieldLabel: 'Autor',
            xtype: 'autorCombo',
            name: 'authorId',
        }, {
            xtype: 'textfield',
            fieldLabel: 'Titlu',
            name: 'title'
        }, {
            xtype: 'datefield',
            fieldLabel: 'An aparitie',
            name: 'dataAparitie'
        }]
    }],
    buttons: [{
        text: 'Salvare',
        itemId: 'saveBtn',
        iconCls: 'icon-save'
    }, {
        text: 'Renuntare',
        itemId: 'cancelBtn'
    }]
});