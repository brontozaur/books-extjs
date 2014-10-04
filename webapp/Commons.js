function enablebuttons(enable) {
    var modButton = Ext.ComponentQuery.query('booksgrid button[action=mod-book]')[0];
    var delButton = Ext.ComponentQuery.query('booksgrid button[action=del-book]')[0];
    if (enable) {
        modButton.enable();
        delButton.enable();
    } else {
        modButton.disable();
        delButton.disable();
    }
}

function clearInfoAreaFields() {
    var bookInfo = Ext.ComponentQuery.query('bookinfo')[0];
    var autorField = bookInfo.getAutorField();
    autorField.setValue("");
    var titleField = bookInfo.getTitleField();
    titleField.setValue("");
    var dateField = bookInfo.getDataAparitieField();
    dateField.setValue("");
    var originalTitleField = bookInfo.getOriginalTitleField();
    originalTitleField.setValue("");
    var isbnField = bookInfo.getIsbnField();
    isbnField.setValue("");
    var cititaField = bookInfo.getCititaField();
    cititaField.setValue("");
    var serieField = bookInfo.getSerieField();
    serieField.setValue("");
    var nrPaginiField = bookInfo.getNrPaginiField();
    nrPaginiField.setValue("");
    var dimensiuniField = bookInfo.getDimensiuniField();
    dimensiuniField.setValue("");
    var edituraField = bookInfo.getEdituraField();
    edituraField.setValue("");
    var genField = bookInfo.getGenField();
    genField.setValue("");

    autorField.setVisible(false);
    titleField.setVisible(false);
    dateField.setVisible(false);
    originalTitleField.setVisible(false);
    isbnField.setVisible(false);
    cititaField.setVisible(false);
    serieField.setVisible(false);
    nrPaginiField.setVisible(false);
    dimensiuniField.setVisible(false);
    edituraField.setVisible(false);
    genField.setVisible(false);
}

function enablebuttonsAutor(enable) {
    var modButton = Ext.ComponentQuery.query('autorgrid button[action=mod-autor]')[0];
    var delButton = Ext.ComponentQuery.query('autorgrid button[action=del-autor]')[0];
    if (enable) {
        modButton.enable();
        delButton.enable();
    } else {
        modButton.disable();
        delButton.disable();
    }
}

function enablebuttonsEditura(enable) {
    var modButton = Ext.ComponentQuery.query('edituragrid button[action=mod-editura]')[0];
    var delButton = Ext.ComponentQuery.query('edituragrid button[action=del-editura]')[0];
    if (enable) {
        modButton.enable();
        delButton.enable();
    } else {
        modButton.disable();
        delButton.disable();
    }
}

function enablebuttonsCategorie(enable) {
    var modButton = Ext.ComponentQuery.query('categoriegrid button[action=mod-categorie]')[0];
    var delButton = Ext.ComponentQuery.query('categoriegrid button[action=del-categorie]')[0];
    if (enable) {
        modButton.enable();
        delButton.enable();
    } else {
        modButton.disable();
        delButton.disable();
    }
}

function createErrorWindow(response) {
    var window = Ext.widget('errorwindow');
    var errorMessage = response.getAllResponseHeaders().error_message;
    var errorRootCasue = response.getAllResponseHeaders().error_root_cause;
    var errorStackTrace = response.getAllResponseHeaders().error_stacktrace;
    window.setTitle('Mesaj de eroare');
    if (!Ext.isEmpty(errorMessage)) {
        window.setStackTace('Cauza:\n-----------------\n' + errorMessage + '\n\nDetalii:\n-----------------\n' + errorStackTrace);
    } else {
        window.setStackTace('Cauza:\n-----------------\n' + errorRootCasue + '\n\nDetalii:\n-----------------\n' + errorStackTrace);
    }
    window.show();
}