Ext.define('BM.store.EdituraStore', {
    extend: 'Ext.data.Store',
    model: 'BM.model.EdituraModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        api: {
        	read: 'books?event=get-edituri'
        }
    }
});