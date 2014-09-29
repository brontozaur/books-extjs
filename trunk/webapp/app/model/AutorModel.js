Ext.define('BM.model.AutorModel', {
			extend : 'Ext.data.Model',
			fields : ['autorId', 'nume', {
						name : 'dataNasterii',
						type : 'date'
					}]
		});