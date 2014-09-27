Ext.define('BM.controller.EastRegionController', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.window.MessageBox'],
    stores: [
        'BooksStore',
        'AutorStore',
        'EdituraStore'
    ],

    model: [
        'BooksModel',
        'AutorModel',
        'EdituraModel'
    ],

    views: [
        'EastRegion'
    ],

    init: function() {
        this.control({
        });
    }
});