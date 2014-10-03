Ext.define('BM.controller.BooksGridController', {
            extend : 'Ext.app.Controller',
            stores : ['BooksStore'],

            model : ['BooksModel'],

            views : ['book.BooksGrid', 'book.BookWindow'],

            init : function() {
                this.control({
                            'booksgrid' : {
                                selectionchange : this.changeselection,
                                celldblclick : this.celldblclick
                            },
                            'booksgrid button[action=add-book]' : {
                                click : this.addBook
                            },
                            'booksgrid button[action=mod-book]' : {
                                click : this.modBook
                            },
                            'booksgrid button[action=del-book]' : {
                                click : this.delBook
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

            fillInfoArea : function(record) {
                var autorField = Ext.ComponentQuery.query('bookinfo displayfield[itemId=autor]')[0];
                autorField.setValue(record.get('author').nume);
                var titleField = Ext.ComponentQuery.query('bookinfo displayfield[itemId=title]')[0];
                titleField.setValue(record.get('title'));
                var dateField = Ext.ComponentQuery.query('bookinfo displayfield[itemId=data]')[0];
                dateField.setValue(Ext.util.Format.date(record.get('dataAparitie')));
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
                window.show();
            },

            delBook : function(button, clickEvent, options) {
                Ext.MessageBox.confirm('Confirmare', 'Sunteti sigur?', this.deleteBook);
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
                                    alert('Delete operation has failed miserably!');
                                }
                            });
                }
            }
        });