Ext.define('BM.store.AutorStore', {
			extend : 'Ext.data.Store',
			model : 'BM.model.AutorModel',
			autoLoad : true,
			autoSync : true,
			// groupField: 'name',
			proxy : {
				type : 'ajax',
				api : {
					read : 'books?event=get-autors'
				}
			}
		});