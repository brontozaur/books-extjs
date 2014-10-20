Ext.define('BM.model.BooksTreeModel', {
            extend: 'Ext.data.Model',
            fields: [
                'leaf',
                'name',
                'size',
                {
                    name: 'treeItemName',
                    type: 'string',
                    convert: function(newValue, record) {
                        if (Ext.isEmpty(record.get('leaf')) || record.get('leaf') === false) {
                            return record.get('name') + ' (' + record.get('size') + ")";
                        }
                        return record.get('name');
                    }
                }
            ]
        });