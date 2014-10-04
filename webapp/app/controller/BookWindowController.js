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
                'book.BookWindow'
            ],

            init: function() {
                this.control({
                            'bookwindow button[itemId=saveBtn]': {
                                click: this.saveBook
                            },
                            'bookwindow button[itemId=cancelBtn]': {
                                click: this.closeWindow
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
                                    createErrorWindow(result);
                                }
                            });
                }
            },

            closeWindow: function(button, clickEvent, options) {
                var window = button.up('bookwindow');
                window.close();
            }
        });