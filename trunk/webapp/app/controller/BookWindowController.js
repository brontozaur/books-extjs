Ext.define('BM.controller.BookWindowController', {
            extend: 'Ext.app.Controller',
            stores: [
                'BookStore',
                'AutorStore',
                'EdituraStore'
            ],

            model: [
                'BookModel',
                'EdituraModel'
            ],

            views: [
                'book.BookWindow',
                'editura.EdituraWindow',
                'autor.AutorWindow',
                'categorie.CategorieWindow',
                'ErrorWindow'                
            ],

            init: function() {
                this.control({
                            'bookwindow button[itemId=saveBtn]': {
                                click: this.saveBook
                            },
                            'bookwindow button[itemId=cancelBtn]': {
                                click: this.closeWindow
                            },
                            'bookwindow button[itemId=addAutor]': {
                                click: function(button, clickEvent, options) {
                                    var window = Ext.widget('autorwindow');
                                    window.show();
                                }
                            },
                            'bookwindow button[itemId=addEditura]': {
                                click: function(button, clickEvent, options) {
                                    var window = Ext.widget('editurawindow');
                                    window.show();
                                }
                            },
                            'bookwindow button[itemId=addCategorie]': {
                                click: function(button, clickEvent, options) {
                                    var window = Ext.widget('categoriewindow');
                                    window.show();
                                }
                            }
                        });
            },

            saveBook: function(button, clickEvent, options) {
                var form = button.up('bookwindow').down('form[itemId=bookform]');
                var me = this;
                if (form.isValid()) {
                    form.submit({
                                url: 'books',
                                method: 'POST',
                                params: {
                                    event: 'save-book',
                                    bookId: form.down('hidden[name=bookId]').getValue(),
                                    autorId: form.down('autorCombo[name=authorId]').getValue(),
                                    idEditura: form.down('edituraCombo[name=idEditura]').getValue()
                                },
                                success: function(form, action) {
                                    me.closeWindow(button);
                                    clearInfoAreaFields();
                                    enablebuttons(false);
                                    var grid = Ext.widget('booksgrid');
                                    grid.getStore().load();
                                },

                                failure: function(form, action) {
                                    createFormErrorWindow(action);
                                }
                            });
                }
            },

            closeWindow: function(button, clickEvent, options) {
                var window = button.up('bookwindow');
                window.close();
            }
        });