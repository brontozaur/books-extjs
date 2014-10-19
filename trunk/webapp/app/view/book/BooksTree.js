Ext.define('BM.view.book.BooksTree', {
            extend: 'Ext.tree.Panel',
            alias: 'widget.bookstree',
            store: 'BookTreeStore',
            style: 'background-color: white;',
            padding: '0 1 0 0'
        });