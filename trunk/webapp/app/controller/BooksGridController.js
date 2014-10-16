Ext.define('BM.controller.BooksGridController', {
            extend : 'Ext.app.Controller',
            stores : ['BookStore'],

            model : ['BookModel'],

            views : ['book.BooksGrid', 'book.BookWindow'],

            init : function() {
                this.control({
                            'booksgrid' : {
                                selectionchange : this.changeselection,
                                celldblclick : this.celldblclick,
                                itemkeydown : this.handleKeyPress
                            },
                            'booksgrid button[action=add-book]' : {
                                click : this.addBook
                            },
                            'booksgrid button[action=mod-book]' : {
                                click : this.modBook
                            },
                            'booksgrid button[action=del-book]' : {
                                click : this.delBook
                            },
                            'booksgrid textfield[name=searchField]' : {
                                change : this.searchBooks
                            }
                        });
            },

            changeselection : function(selModel, selected, eOpts) {
                if (selected.length > 0) {
                    enablebuttons(true);
                    this.fillInfoArea(selected[0]);
                }
            },

            celldblclick : function(grid, td, cellIndex, record, tr, rowIndex, e) {
                var modButton = Ext.ComponentQuery.query('booksgrid button[action=mod-book]')[0];
                this.modBook(modButton);
            },

            handleKeyPress : function(grid, record, item, index, event, eOpts) {
                if (event.keyCode == Ext.EventObject.DELETE && grid.getSelectionModel().hasSelection()) {
                    this.delBook();
                }
            },

            fillInfoArea : function(record) {
                var bookInfo = Ext.ComponentQuery.query('bookinfo')[0];
                var fieldContainer = bookInfo.down('container[itemId=bookInfoFields]');

                var autorField = fieldContainer.down('displayfield[itemId=autor]');
                autorField.setValue(record.get('author').nume);
                autorField.setVisible(!Ext.isEmpty(autorField.getValue()));

                var titleField = fieldContainer.down('displayfield[itemId=title]');
                titleField.setValue(record.get('title'));
                titleField.setVisible(!Ext.isEmpty(titleField.getValue()));

                var dateField = fieldContainer.down('displayfield[itemId=data]');
                dateField.setValue(Ext.util.Format.date(record.get('dataAparitie')));
                dateField.setVisible(!Ext.isEmpty(dateField.getValue()));

                var originalTitleField = fieldContainer.down('displayfield[itemId=originalTitle]');
                originalTitleField.setValue(record.get('originalTitle'));
                originalTitleField.setVisible(!Ext.isEmpty(originalTitleField.getValue()));

                var isbnField = fieldContainer.down('displayfield[itemId=isbn]');
                isbnField.setValue(record.get('isbn'));
                isbnField.setVisible(!Ext.isEmpty(isbnField.getValue()));

                var cititaField = fieldContainer.down('displayfield[itemId=citita]');
                cititaField.setValue(record.get('citita') ? "Da" : "Nu");
                cititaField.setVisible(true);

                var serieField = fieldContainer.down('displayfield[itemId=serie]');
                serieField.setValue(record.get('serie'));
                serieField.setVisible(!Ext.isEmpty(serieField.getValue()));

                var nrPaginiField = fieldContainer.down('displayfield[itemId=nrPagini]');
                nrPaginiField.setValue(record.get('nrPagini'));
                nrPaginiField.setVisible(nrPaginiField.getValue() > 0);

                var dimensiuniField = fieldContainer.down('displayfield[itemId=dimensiuni]');
                if (record.get('width') > 0 || record.get('height') > 0) {
                    dimensiuniField.setValue(record.get('width') + ' x ' + record.get('height'));
                } else {
                    dimensiuniField.setValue('');
                }
                dimensiuniField.setVisible(!Ext.isEmpty(dimensiuniField.getValue()));

                var edituraField = fieldContainer.down('displayfield[itemId=numeEditura]');
                edituraField.setValue(record.get('numeEditura'));
                edituraField.setVisible(!Ext.isEmpty(edituraField.getValue()));

                var genField = fieldContainer.down('displayfield[itemId=numeCategorie]');
                genField.setValue(record.get('numeCategorie'));
                genField.setVisible(!Ext.isEmpty(genField.getValue()));

                var frontImageContainer = bookInfo.down('image[itemId=frontCoverInfo]');
                var frontCover = record.get('frontCoverPath');
                var hasFrontCover = !Ext.isEmpty(frontCover);
                var label = bookInfo.down('label[itemId=frontCoverLabel]');
                label.setVisible(hasFrontCover);
                frontImageContainer.setVisible(hasFrontCover);
                if (hasFrontCover) {
                    frontImageContainer.setSrc('covers/' + frontCover);
                }

                var backImageContainer = bookInfo.down('image[itemId=backCoverInfo]');
                var backCover = record.get('backCoverPath');
                var hasbackCover = !Ext.isEmpty(backCover);
                var label = bookInfo.down('label[itemId=backCoverLabel]');
                label.setVisible(hasbackCover);
                backImageContainer.setVisible(hasbackCover);
                if (hasbackCover) {
                    backImageContainer.setSrc('covers/' + backCover);
                }
            },

            addBook : function(button, clickEvent, options) {
                var window = Ext.widget('bookwindow');
                window.show();
            },

            modBook : function(button, clickEvent, options) {
                var delButton = Ext.ComponentQuery.query('booksgrid button[action=del-book]')[0];
                delButton.disable();
                var window = Ext.widget('bookwindow');
                var selectionModel = button.up('viewport').down('booksgrid').getSelectionModel();
                if (!selectionModel.hasSelection) {
                    Ext.Msg.show({
                                title : 'Carte neselectata',
                                msg : 'Selectati o carte',
                                width : 300,
                                buttons : Ext.Msg.OK,
                                icon : Ext.window.MessageBox.WARNING
                            });
                    return;
                }
                var selectedBook = selectionModel.getSelection()[0];
                var bookForm = window.down('form[itemId=bookform]');
                bookForm.loadRecord(selectedBook);
                var coversComponent = window.down('component[itemId=cardLayoutPanel]');

                var frontCover = selectedBook.get('frontCoverPath');

                if (!Ext.isEmpty(frontCover)) {
                    var frontCoverUploadForm = coversComponent.down('form[itemId=frontUploadform]');
                    frontCoverUploadForm.down('image[itemId=frontCoverPreview]').src = 'covers/' + selectedBook.get('frontCoverPath');
                }

                var backCover = selectedBook.get('backCoverPath');
                if (!Ext.isEmpty(backCover)) {
                    var backCoverUploadForm = coversComponent.down('form[itemId=backUploadform]');
                    backCoverUploadForm.down('image[itemId=backCoverPreview]').src = 'covers/' + selectedBook.get('backCoverPath');
                }

                window.show();
            },

            delBook : function(button, clickEvent, options) {
                Ext.MessageBox.confirm('Confirmare stergere', 'Sunteti sigur ca doriti sa stergeti cartea selectata?', this.deleteBook);
            },

            deleteBook : function(btn) {
                if (btn == 'yes') {
                    var booksGrid = Ext.ComponentQuery.query('booksgrid')[0];
                    var selectionModel = booksGrid.getSelectionModel();
                    if (!selectionModel.hasSelection) {
                        Ext.Msg.show({
                                    title : 'Carte neselectata',
                                    msg : 'Selectati o carte',
                                    width : 300,
                                    buttons : Ext.Msg.OK,
                                    icon : Ext.window.MessageBox.WARNING
                                });
                        return;
                    }
                    var selectedBook = selectionModel.getSelection()[0];
                    Ext.Ajax.request({
                                url : 'books',
                                method : 'POST',
                                params : {
                                    event : 'del-book',
                                    bookId : selectedBook.get('bookId')
                                },
                                scope : this,
                                success : function(result, request) {
                                    clearInfoAreaFields();
                                    enablebuttons(false);
                                    Ext.widget('booksgrid').getStore().load();
                                },
                                failure : function(result, request) {
                                    createErrorWindow(result);
                                }
                            });
                }
            },

            searchBooks : function(textfield, newValue, oldValue) {
                var grid = Ext.widget('booksgrid');
                var store = grid.getStore();
                store.clearFilter(true);
                store.filter([{
                            filterFn : function(record) {
                                if (Ext.isEmpty(newValue)) {
                                    return true;
                                }
                                var numeAutor = record.get('authorName');
                                var title = record.get('title');
                                return numeAutor.indexOf(newValue) > -1 || title.indexOf(newValue) > -1;
                            }
                        }]);
            }
        });