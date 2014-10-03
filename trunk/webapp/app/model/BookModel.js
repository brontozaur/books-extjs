Ext.define('BM.model.BookModel', {
            extend : 'Ext.data.Model',
            fields : [
                'bookId',
                'author',
                {
                    name : 'authorId',
                    mapping : 'author.autorId'
                },
                {
                    name : 'authorName',
                    mapping : 'author.nume'
                },
                'title',
                {
                    name : 'dataAparitie',
                    type : 'date'
                }
            ]
        });