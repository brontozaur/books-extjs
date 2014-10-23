Ext.define('BM.model.TreeBooksModel', {
            extend: 'Ext.data.Model',
            fields: [
                'leaf',
                'name',
                'howManyBooks',
                {
                    name: 'treeItemName',
                    type: 'string',
                    convert: function(newValue, record) {
                        var howManyBooks = record.get('howManyBooks');
                        if (Ext.isEmpty(record.get('leaf')) || record.get('leaf') === false) {
                            var letter = record.get('name');
                            var carte = howManyBooks === 1 ? 'carte' : 'carti';

                            return letter + ' (' + howManyBooks + ' ' + carte + ')';
                        }
                        return record.get('name');
                    }
                }
            ]
        });