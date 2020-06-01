export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'The Witcher',
            author: 'A. Sapkowski',
            price: 53,
            coverImage: 'the_witcher.jpg'
        },
        {
            id: 2,
            title: 'Atlas Shrugged',
            author: 'A. Rand',
            price: 33,
            coverImage: 'atlas.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happend'));
                } else { 
                    resolve(this.data);
                };
            }, 700);
        });
    };
};