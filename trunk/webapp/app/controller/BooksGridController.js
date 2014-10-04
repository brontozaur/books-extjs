Ext.define('BM.controller.BooksGridController', {
            extend: 'Ext.app.Controller',
            stores: [
                'BookStore'
            ],

            model: [
                'BookModel'
            ],

            views: [
                'book.BooksGrid',
                'book.BookWindow'
            ],

            init: function() {
                this.control({
                            'booksgrid': {
                                selectionchange: this.changeselection,
                                celldblclick: this.celldblclick
                            },
                            'booksgrid button[action=add-book]': {
                                click: this.addBook
                            },
                            'booksgrid button[action=mod-book]': {
                                click: this.modBook
                            },
                            'booksgrid button[action=del-book]': {
                                click: this.delBook
                            }
                        });
            },

            changeselection: function(selModel, selected, eOpts) {
                if (selected.length > 0) {
                    enablebuttons(true);
                    this.fillInfoArea(selected[0]);
                }
            },

            celldblclick: function(grid, td, cellIndex, record, tr, rowIndex, e) {
                var modButton = Ext.ComponentQuery.query('booksgrid button[action=mod-book]')[0];
                this.modBook(modButton);
            },

            fillInfoArea: function(record) {
                var bookInfo = Ext.ComponentQuery.query('bookinfo')[0];
                var autorField = bookInfo.getAutorField();
                autorField.setValue(record.get('author').nume);
                var titleField = bookInfo.getTitleField();
                titleField.setValue(record.get('title'));
                var dateField = bookInfo.getDataAparitieField();
                dateField.setValue(Ext.util.Format.date(record.get('dataAparitie')));
                var originalTitleField = bookInfo.getOriginalTitleField();
                originalTitleField.setValue(record.get('originalTitle'));
                var isbnField = bookInfo.getIsbnField();
                isbnField.setValue(record.get('isbn'));
                var cititaField = bookInfo.getCititaField();
                cititaField.setValue(record.get('citita'));
                var serieField = bookInfo.getSerieField();
                serieField.setValue(record.get('serie'));
                var nrPaginiField = bookInfo.getNrPaginiField();
                nrPaginiField.setValue(record.get('nrPagini'));
                var dimensiuniField = bookInfo.getDimensiuniField();
                dimensiuniField.setValue(record.get('width') + ' x ' + record.get('height'));
                var edituraField = bookInfo.getEdituraField();
                edituraField.setValue(record.get('numeEditura'));
                var genField = bookInfo.getGenField();
                genField.setValue(record.get('numeCategorie'));
            },

            addBook: function(button, clickEvent, options) {
                var window = Ext.widget('bookwindow');
                window.show();
            },

            modBook: function(button, clickEvent, options) {
                var delButton = Ext.ComponentQuery.query('booksgrid button[action=del-book]')[0];
                delButton.disable();
                var window = Ext.widget('bookwindow');
                var selectionModel = button.up('viewport').down('booksgrid').getSelectionModel();
                if (!selectionModel.hasSelection) {
                    Ext.Msg.show({
                                title: 'Carte neselectata',
                                msg: 'Selectati o carte',
                                width: 300,
                                buttons: Ext.Msg.OK,
                                icon: Ext.window.MessageBox.WARNING
                            });
                    return;
                }
                var selectedBook = selectionModel.getSelection()[0];
                var bookForm = window.down('form[itemId=bookform]');
                bookForm.loadRecord(selectedBook);
                window.show();
            },

            delBook: function(button, clickEvent, options) {
                Ext.MessageBox.confirm('Confirmare', 'Sunteti sigur?', this.deleteBook);
            },

            deleteBook: function(btn) {
                if (btn == 'yes') {
                    var booksGrid = Ext.ComponentQuery.query('booksgrid')[0];
                    var selectionModel = booksGrid.getSelectionModel();
                    if (!selectionModel.hasSelection) {
                        Ext.Msg.show({
                                    title: 'Carte neselectata',
                                    msg: 'Selectati o carte',
                                    width: 300,
                                    buttons: Ext.Msg.OK,
                                    icon: Ext.window.MessageBox.WARNING
                                });
                        return;
                    }
                    var selectedBook = selectionModel.getSelection()[0];
                    Ext.Ajax.request({
                                url: 'books',
                                method: 'POST',
                                params: {
                                    event: 'del-book',
                                    bookId: selectedBook.get('bookId')
                                },
                                scope: this,
                                success: function(result, request) {
                                    clearInfoAreaFields();
                                    enablebuttons(false);
                                    Ext.widget('booksgrid').getStore().load();
                                },
                                failure: function(result, request) {
                                    alert('Delete operation has failed miserably!');
                                }
                            });
                }
            }
        });