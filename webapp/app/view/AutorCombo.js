Ext.define('BM.view.AutorCombo', {
	extend: 'Ext.form.field.ComboBox',
	xtype: 'autorCombo',
	model:'BM.model.AutorModel',
	displayField:'nume',
	valueField:'autorId',
	store: 'AutorStore',
});