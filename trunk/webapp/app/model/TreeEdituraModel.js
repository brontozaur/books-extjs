Ext.define('BM.model.TreeEdituraModel', {
            extend: 'Ext.data.Model',
            fields: [
                'leaf',
                'name',
                'howManyEdituri',
                'howManyBooks',
                {
                    name: 'treeItemName',
                    type: 'string',
                    convert: function(newValue, record) {
                        var howManyEdituri = record.get('howManyEdituri');
                        if (Ext.isEmpty(record.get('leaf')) || record.get('leaf') === false) {
                            var letter = record.get('name');
                            var howManyBooks = record.get('howManyBooks');
                            var editura = howManyEdituri === 1 ? 'editura' : 'edituri';
                            var carte = howManyBooks === 1 ? 'carte' : 'carti';

                            return letter + ' (' + howManyEdituri + ' ' + editura + ', ' + howManyBooks + ' ' + carte + ')';
                        }
                        return record.get('name') + ' (' + howManyEdituri + ')';
                    }
                }
            ]
        });