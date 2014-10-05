Ext.define('BM.controller.EastRegionController', {
            extend: 'Ext.app.Controller',
            requires: [
                'Ext.window.MessageBox'
            ],
            stores: [
                'BookStore',
                'AutorStore',
                'EdituraStore',
                'CategorieStore'
            ],

            model: [
                'BookModel',
                'AutorModel',
                'EdituraModel',
                'CategorieModel'
            ],

            views: [
                'EastRegion',
                'editura.EdituraWindow',
                'autor.AutorWindow',
                'categorie.CategorieWindow',
                'ErrorWindow'
            ],

            init: function() {
                this.control({
                    // AUTOR START
                    'autorgrid': {
                        selectionchange: this.changeselectionAutor,
                        celldblclick: this.celldblclickAutor
                    },
                    'autorgrid button[action=add-autor]': {
                        click: this.addAutor
                    },
                    'autorgrid button[action=mod-autor]': {
                        click: this.modAutor
                    },
                    'autorgrid button[action=del-autor]': {
                        click: this.delAutor
                    },
                    'autorgrid button[action=refresh-autor]': {
                        click: this.refreshAutorGrid
                    },
                    'autorwindow button[itemId=saveBtn]': {
                        click: this.saveAutor
                    },
                    'autorwindow button[itemId=cancelBtn]': {
                        click: this.closeAutorWindow
                    },
                    // AUTOR END

                    // EDITURA START
                    'edituragrid': {
                        selectionchange: this.changeselectionEditura,
                        celldblclick: this.celldblclickEditura
                    },
                    'edituragrid button[action=add-editura]': {
                        click: this.addEditura
                    },
                    'edituragrid button[action=mod-editura]': {
                        click: this.modEditura
                    },
                    'edituragrid button[action=del-editura]': {
                        click: this.delEditura
                    },
                    'edituragrid button[action=refresh-editura]': {
                        click: this.refreshEdituraGrid
                    },
                    'editurawindow button[itemId=saveBtn]': {
                        click: this.saveEditura
                    },
                    'editurawindow button[itemId=cancelBtn]': {
                        click: this.closeEdituraWindow
                    },
                    // EDITURA END

                    // CATEGORIE START
                    'categoriegrid': {
                        selectionchange: this.changeselectionCategorie,
                        celldblclick: this.celldblclickCategorie
                    },
                    'categoriegrid button[action=add-categorie]': {
                        click: this.addCategorie
                    },
                    'categoriegrid button[action=mod-categorie]': {
                        click: this.modCategorie
                    },
                    'categoriegrid button[action=del-categorie]': {
                        click: this.delCategorie
                    },
                    'categoriegrid button[action=refresh-categorie]': {
                        click: this.refreshCategorieGrid
                    },
                    'categoriewindow button[itemId=saveBtn]': {
                        click: this.saveCategorie
                    },
                    'categoriewindow button[itemId=cancelBtn]': {
                        click: this.closeCategorieWindow
                    }
                        // CATEGORIE END
                    });
            },

            changeselectionAutor: function(selModel, selected, eOpts) {
                enablebuttonsAutor(selected.length > 0);
            },

            celldblclickAutor: function(grid, td, cellIndex, record, tr, rowIndex, e) {
                var modButton = Ext.ComponentQuery.query('autorgrid button[action=mod-autor]')[0];
                this.modAutor(modButton);
            },

            addAutor: function(button, clickEvent, options) {
                var window = Ext.widget('autorwindow');
                window.show();
            },

            modAutor: function(button, clickEvent, options) {
                var delButton = Ext.ComponentQuery.query('autorgrid button[action=del-autor]')[0];
                delButton.disable();
                var window = Ext.widget('autorwindow');
                var selectionModel = button.up('eastregion').down('autorgrid').getSelectionModel();
                if (!selectionModel.hasSelection) {
                    Ext.Msg.show({
                                title: 'Autor neselectat',
                                msg: 'Selectati un autor',
                                width: 300,
                                buttons: Ext.Msg.OK,
                                icon: Ext.window.MessageBox.WARNING
                            });
                    return;
                }
                var selectedAutor = selectionModel.getSelection()[0];
                var bookForm = window.down('form[itemId=autorform]');
                bookForm.loadRecord(selectedAutor);
                window.show();
            },

            delAutor: function(button) {
                Ext.MessageBox.confirm('Confirmare', 'Sunteti sigur?', this.deleteAutor);
            },

            deleteAutor: function(button) {
                if (button == 'yes') {
                    var autorgrid = Ext.ComponentQuery.query('autorgrid')[0];
                    var selectionModel = autorgrid.getSelectionModel();
                    if (!selectionModel.hasSelection) {
                        Ext.Msg.show({
                                    title: 'Autor neselectat',
                                    msg: 'Selectati un autor',
                                    width: 300,
                                    buttons: Ext.Msg.OK,
                                    icon: Ext.window.MessageBox.WARNING
                                });
                        return;
                    }
                    var selectedAutor = selectionModel.getSelection()[0];
                    Ext.Ajax.request({
                                url: 'books',
                                method: 'POST',
                                params: {
                                    event: 'del-autor',
                                    autorId: selectedAutor.get('autorId')
                                },
                                scope: this,
                                success: function(result, request) {
                                    enablebuttons(false);
                                    Ext.widget('autorgrid').getStore().load();
                                },
                                failure: function(result, request) {
                                    createErrorWindow(result);
                                }
                            });
                }
            },

            closeAutorWindow: function(button, clickEvent, options) {
                var window = button.up('autorwindow');
                window.close();
            },

            saveAutor: function(button, clickEvent, options) {
                var form = button.up('autorwindow').down('form[itemId=autorform]');
                if (form.isValid()) {
                    form.submit({
                                url: 'books',
                                method: 'POST',
                                params: {
                                    event: 'save-autor',
                                    autorId: form.down('hidden[name=autorId]').getValue(),
                                    nume: form.down('textfield[name=nume]').getValue()
                                },
                                success: function(form, action) {
                                    button.up('autorwindow').close();
                                    enablebuttons(false);
                                    Ext.widget('autorgrid').getStore().load();
                                },

                                failure: function(form, action) {
                                    createErrorWindow(result);
                                }
                            });
                }
            },

            refreshAutorGrid: function(button, clickEvent, options) {
                button.up('eastregion').down('autorgrid').getStore().reload();
            },

            changeselectionEditura: function(selModel, selected, eOpts) {
                enablebuttonsEditura(selected.length > 0);
            },

            celldblclickEditura: function(grid, td, cellIndex, record, tr, rowIndex, e) {
                var modButton = Ext.ComponentQuery.query('edituragrid button[action=mod-editura]')[0];
                this.modEditura(modButton);
            },

            addEditura: function(button, clickEvent, options) {
                var window = Ext.widget('editurawindow');
                window.show();
            },

            modEditura: function(button, clickEvent, options) {
                var delButton = Ext.ComponentQuery.query('edituragrid button[action=del-editura]')[0];
                delButton.disable();
                var window = Ext.widget('editurawindow');
                var selectionModel = button.up('eastregion').down('edituragrid').getSelectionModel();
                if (!selectionModel.hasSelection) {
                    Ext.Msg.show({
                                title: 'Editura neselectata',
                                msg: 'Selectati o editura',
                                width: 300,
                                buttons: Ext.Msg.OK,
                                icon: Ext.window.MessageBox.WARNING
                            });
                    return;
                }
                var selectedEditura = selectionModel.getSelection()[0];
                var bookForm = window.down('form[itemId=edituraform]');
                bookForm.loadRecord(selectedEditura);
                window.show();
            },

            delEditura: function(button) {
                Ext.MessageBox.confirm('Confirmare', 'Sunteti sigur?', this.deleteEditura);
            },

            deleteEditura: function(btn) {
                if (btn == 'yes') {
                    var edituragrid = Ext.ComponentQuery.query('edituragrid')[0];
                    var selectionModel = edituragrid.getSelectionModel();
                    if (!selectionModel.hasSelection) {
                        Ext.Msg.show({
                                    title: 'Editura neselectata',
                                    msg: 'Selectati o editura',
                                    width: 300,
                                    buttons: Ext.Msg.OK,
                                    icon: Ext.window.MessageBox.WARNING
                                });
                        return;
                    }
                    var selectedEditura = selectionModel.getSelection()[0];
                    Ext.Ajax.request({
                                url: 'books',
                                method: 'POST',
                                params: {
                                    event: 'del-editura',
                                    idEditura: selectedEditura.get('idEditura')
                                },
                                scope: this,
                                success: function(result, request) {
                                    enablebuttons(false);
                                    Ext.widget('edituragrid').getStore().load();
                                },
                                failure: function(result, request) {
                                    createErrorWindow(result);
                                }
                            });
                }
            },

            closeEdituraWindow: function(button, clickEvent, options) {
                var window = button.up('editurawindow');
                window.close();
            },

            saveEditura: function(button, clickEvent, options) {
                var form = button.up('editurawindow').down('form[itemId=edituraform]');
                if (form.isValid()) {
                    form.submit({
                                url: 'books',
                                method: 'POST',
                                params: {
                                    event: 'save-editura',
                                    idEditura: form.down('hidden[name=idEditura]').getValue(),
                                    title: form.down('textfield[name=numeEditura]').getValue()
                                },
                                success: function(form, action) {
                                    button.up('editurawindow').close();
                                    enablebuttons(false);
                                    Ext.widget('edituragrid').getStore().load();
                                },

                                failure: function(form, action) {
                                    createErrorWindow(result);
                                }
                            });
                }
            },

            refreshEdituraGrid: function(button, clickEvent, options) {
                button.up('eastregion').down('edituragrid').getStore().reload();
            },

            changeselectionCategorie: function(selModel, selected, eOpts) {
                enablebuttonsCategorie(selected.length > 0);
            },

            celldblclickCategorie: function(grid, td, cellIndex, record, tr, rowIndex, e) {
                var modButton = Ext.ComponentQuery.query('categoriegrid button[action=mod-categorie]')[0];
                this.modCategorie(modButton);
            },

            addCategorie: function(button, clickEvent, options) {
                var window = Ext.widget('categoriewindow');
                window.show();
            },

            modCategorie: function(button, clickEvent, options) {
                var delButton = Ext.ComponentQuery.query('categoriegrid button[action=del-categorie]')[0];
                delButton.disable();
                var window = Ext.widget('categoriewindow');
                var selectionModel = button.up('eastregion').down('categoriegrid').getSelectionModel();
                if (!selectionModel.hasSelection) {
                    Ext.Msg.show({
                                title: 'Categorie neselectata',
                                msg: 'Selectati o categorie',
                                width: 300,
                                buttons: Ext.Msg.OK,
                                icon: Ext.window.MessageBox.WARNING
                            });
                    return;
                }
                var selectedCategorie = selectionModel.getSelection()[0];
                var bookForm = window.down('form[itemId=categorieform]');
                bookForm.loadRecord(selectedCategorie);
                window.show();
            },

            delCategorie: function(button) {
                Ext.MessageBox.confirm('Confirmare', 'Sunteti sigur?', this.deleteCategorie);
            },

            deleteCategorie: function(btn) {
                if (btn == 'yes') {
                    var categoriegrid = Ext.ComponentQuery.query('categoriegrid')[0];
                    var selectionModel = categoriegrid.getSelectionModel();
                    if (!selectionModel.hasSelection) {
                        Ext.Msg.show({
                                    title: 'Categorie neselectata',
                                    msg: 'Selectati o categorie',
                                    width: 300,
                                    buttons: Ext.Msg.OK,
                                    icon: Ext.window.MessageBox.WARNING
                                });
                        return;
                    }
                    var selectedCategorie = selectionModel.getSelection()[0];
                    Ext.Ajax.request({
                                url: 'books',
                                method: 'POST',
                                params: {
                                    event: 'del-categorie',
                                    idCategorie: selectedCategorie.get('idCategorie')
                                },
                                scope: this,
                                success: function(result, request) {
                                    enablebuttons(false);
                                    Ext.widget('categoriegrid').getStore().load();
                                },
                                failure: function(result, request) {
                                    createErrorWindow(result);
                                }
                            });
                }
            },

            closeCategorieWindow: function(button, clickEvent, options) {
                var window = button.up('categoriewindow');
                window.close();
            },

            saveCategorie: function(button, clickEvent, options) {
                var form = button.up('categoriewindow').down('form[itemId=categorieform]');
                if (form.isValid()) {
                    form.submit({
                                url: 'books',
                                method: 'POST',
                                params: {
                                    event: 'save-categorie',
                                    idCategorie: form.down('hidden[name=idCategorie]').getValue(),
                                    title: form.down('textfield[name=numeCategorie]').getValue()
                                },
                                success: function(form, action) {
                                    button.up('categoriewindow').close();
                                    enablebuttons(false);
                                    Ext.widget('categoriegrid').getStore().load();
                                },

                                failure: function(form, action) {
                                    createErrorWindow(result);
                                }
                            });
                }
            },

            refreshCategorieGrid: function(button, clickEvent, options) {
                button.up('eastregion').down('categoriegrid').getStore().reload();
            }
        });