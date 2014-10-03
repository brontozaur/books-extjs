Ext.define('BM.store.CategorieStore', {
            extend : 'Ext.data.Store',
            model : 'BM.model.CategorieModel',
            autoLoad : true,
            autoSync : true,
            proxy : {
                type : 'ajax',
                api : {
                    read : 'books?event=get-categorii'
                }
            }
        });