Ext.define('BM.view.book.BooksGrid', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.booksgrid',

			title : 'Lista carti',

			selType : 'rowmodel',

			columnLines : true,

			store : 'BooksStore',

			dockedItems : [{
						xtype : 'pagingtoolbar',
						store : 'BooksStore',
						dock : 'bottom',
						displayInfo : true
					}, {
						xtype : 'toolbar',
						items : [{
									iconCls : 'icon-add',
									text : 'Adaugare',
									action : 'add-book',
									scope : this
								}, {
									iconCls : 'icon-mod',
									text : 'Modificare',
									disabled : true,
									action : 'mod-book',
									scope : this
								}, {
									iconCls : 'icon-delete',
									text : 'Stergere',
									disabled : true,
									action : 'del-book',
									scope : this
								}],
						dock : 'top'
					}],

			initComponent : function() {
				this.columns = this.buildColumns();
				this.callParent(arguments);

				this.store.load({
							params : {
								start : 0,
								limit : BM.store.BooksStore.itemsPerPage
							}
						});
			},

			buildColumns : function() {
				return [{
							header : 'Autor',
							dataIndex : 'authorName',
							flex : 1,
							editor : 'textfield'
						}, {
							header : 'Titlu',
							dataIndex : 'title',
							flex : 1
						}, {
							header : 'Data aparitie',
							dataIndex : 'dataAparitie',
							flex : 1,
							editor : 'datefield',
							renderer : Ext.util.Format.dateRenderer('m/d/Y')
						}];
			}
		});