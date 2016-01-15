Ext.define('BM.controller.BookWindowController', {
            extend: 'Ext.app.Controller',
            stores: [
                'BookStore',
                'AutorStore',
                'EdituraStore'
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
                            },
                            'bookwindow filefield[name=frontCoverUpload]': {
                                change: this.uploadFrontCover
                            },
                            'bookwindow filefield[name=backCoverUpload]': {
                                change: this.uploadBackCover
                            },
                            'bookwindow button[itemId=frontCoverButton]': {
                                click: this.front
                            },
                            'bookwindow button[itemId=backCoverButton]': {
                                click: this.back
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
                                    idEditura: form.down('edituraCombo[name=idEditura]').getValue(),
                                    frontCoverImage: Ext.ComponentQuery.query('image[itemId=frontCoverPreview]')[0].src,
                                    backCoverImage: Ext.ComponentQuery.query('image[itemId=backCoverPreview]')[0].src
                                },
                                success: function(form, action) {
                                    me.closeWindow(button);
                                    clearInfoAreaFields();
                                    enablebuttons(false);
                                    var grid = Ext.ComponentQuery.query('booksgrid')[0];
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
            },

            uploadFrontCover: function(fileUploadField, value, eOpts) {
                var form = fileUploadField.up('bookwindow').down('form[itemId=frontUploadform]');
                if (form.isValid()) {
                    form.submit({
                                url: 'books',
                                method: 'POST',
                                params: {
                                    event: 'upload-front-cover',
                                    fileName: value
                                },
                                success: function(form, action) {
                                    var response = Ext.JSON.decode(action.response.responseText);
                                    var imageCanvas = Ext.ComponentQuery.query('image[itemId=frontCoverPreview]')[0];
                                    imageCanvas.setSrc(response.fileName);
                                },

                                failure: function(form, action) {
                                    createFormErrorWindow(action);
                                }
                            });
                }
            },

            uploadBackCover: function(fileUploadField, value, eOpts) {
                var form = fileUploadField.up('bookwindow').down('form[itemId=backUploadform]');
                if (form.isValid()) {
                    form.submit({
                                url: 'books',
                                method: 'POST',
                                params: {
                                    event: 'upload-back-cover',
                                    fileName: value
                                },
                                success: function(form, action) {
                                    var response = Ext.JSON.decode(action.response.responseText);
                                    var imageCanvas = Ext.ComponentQuery.query('image[itemId=backCoverPreview]')[0];
                                    imageCanvas.setSrc(response.fileName);
                                },

                                failure: function(form, action) {
                                    createFormErrorWindow(action);
                                }
                            });
                }
            },

            back: function(button, e, eOpts) {
                var panel = button.up('toolbar[itemId=coversToolbar]').up('panel[itemId=cardLayoutPanel]');
                panel.getLayout().setActiveItem('backUploadform');
            },

            front: function(button, e, eOpts) {
                var panel = button.up('toolbar[itemId=coversToolbar]').up('panel[itemId=cardLayoutPanel]');
                panel.getLayout().setActiveItem('frontUploadform');
            }
        });