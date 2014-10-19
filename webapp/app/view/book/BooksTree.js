Ext.define('BM.view.book.BooksTree', {
            extend: 'Ext.tree.Panel',
            alias: 'widget.bookstree',
            store: 'BookTreeStore',
            model: 'BookModel',
            displayField: 'authorName'
        });