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
                                celldblclick: this.celldblclick,
                                itemkeydown: this.handleKeyPress
                            },
                            'booksgrid button[action=add-book]': {
                                click: this.addBook
                            },
                            'booksgrid button[action=mod-book]': {
                                click: this.modBook
                            },
                            'booksgrid button[action=del-book]': {
                                click: this.delBook
                            },
                            'booksgrid textfield[name=searchField]': {
                                change: this.searchBooks
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

            handleKeyPress: function(grid, record, item, index, event, eOpts) {
                if (event.keyCode == Ext.EventObject.DELETE && grid.getSelectionModel().hasSelection()) {
                    this.delBook();
                }
            },

            fillInfoArea: function(record) {
                var bookInfo = Ext.ComponentQuery.query('bookinfo')[0];
                var autorField = bookInfo.getAutorField();
                autorField.setValue(record.get('author').nume);
                autorField.setVisible(true);
                var titleField = bookInfo.getTitleField();
                titleField.setValue(record.get('title'));
                titleField.setVisible(true);
                var dateField = bookInfo.getDataAparitieField();
                dateField.setValue(Ext.util.Format.date(record.get('dataAparitie')));
                dateField.setVisible(true);
                var originalTitleField = bookInfo.getOriginalTitleField();
                originalTitleField.setValue(record.get('originalTitle'));
                originalTitleField.setVisible(true);
                var isbnField = bookInfo.getIsbnField();
                isbnField.setValue(record.get('isbn'));
                isbnField.setVisible(true);
                var cititaField = bookInfo.getCititaField();
                cititaField.setValue(record.get('citita'));
                cititaField.setVisible(true);
                var serieField = bookInfo.getSerieField();
                serieField.setValue(record.get('serie'));
                serieField.setVisible(true);
                var nrPaginiField = bookInfo.getNrPaginiField();
                nrPaginiField.setValue(record.get('nrPagini'));
                nrPaginiField.setVisible(true);
                var dimensiuniField = bookInfo.getDimensiuniField();
                if (record.get('width') > 0 || record.get('height') > 0) {
                    dimensiuniField.setValue(record.get('width') + ' x ' + record.get('height'));
                } else {
                    dimensiuniField.setValue('');
                }
                dimensiuniField.setVisible(true);
                var edituraField = bookInfo.getEdituraField();
                edituraField.setValue(record.get('numeEditura'));
                edituraField.setVisible(true);
                var genField = bookInfo.getGenField();
                genField.setValue(record.get('numeCategorie'));
                genField.setVisible(true);
                var frontCoverField = bookInfo.getFrontCoverField();
                frontCoverField.setValue(record.get('frontCoverPath'));
                frontCoverField.setVisible(true);
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
                var uploadForm = window.down('form[itemId=uploadform]');
                uploadForm.down('image[itemId=frontCoverPreview]').src = 'covers/'+ selectedBook.get('frontCoverPath');
                window.show();
            },

            delBook: function(button, clickEvent, options) {
                Ext.MessageBox.confirm('Confirmare stergere', 'Sunteti sigur ca doriti sa stergeti cartea selectata?', this.deleteBook);
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
                                    createErrorWindow(result);
                                }
                            });
                }
            },

            searchBooks: function(textfield, newValue, oldValue) {
                var grid = Ext.widget('booksgrid');
                var store = grid.getStore();
                store.clearFilter(true);
                store.filter([
                    {
                        filterFn: function(record) {
                            if (Ext.isEmpty(newValue)) {
                                return true;
                            }
                            var numeAutor = record.get('authorName');
                            var title = record.get('title');
                            return numeAutor.indexOf(newValue) > -1 || title.indexOf(newValue) > -1;
                        }
                    }
                ]);
            }
        });