Ext.define('BM.model.BookModel', {
            extend: 'Ext.data.Model',
            fields: [
                'bookId',
                'author',
                'title',
                'originalTitle',
                'frontCoverPath',
                'backCoverPath',
                'isbn',
                'citita',
                'serie',
                'nrPagini',
                'width',
                'height',
                {
                    name: 'authorId',
                    mapping: 'author.autorId'
                },
                {
                    name: 'authorName',
                    mapping: 'author.nume'
                },
                {
                    name: 'dataAparitie',
                    type: 'date'
                },
                {
                    name: 'idEditura',
                    mapping: 'editura.idEditura'
                },
                {
                    name: 'numeEditura',
                    mapping: 'editura.numeEditura'
                },
                {
                    name: 'idCategorie',
                    mapping: 'categorie.idCategorie'
                },
                {
                    name: 'numeCategorie',
                    mapping: 'categorie.numeCategorie'
                }
            ]
        });