
export default class BookstoreService {

    getBooks() {
        return [
            {
                id: 1,
                title: 'The Witcher',
                author: 'A. Sapkowski',
                price: 53,
                coverImage: 'https://cdn.shopify.com/s/files/1/0024/6874/1219/products/young-adult-the-witcher-series-7-book-collection-young-adult-paperback-andrzej-sapkowski-1_1200x1200.jpg?v=1580200301'
            },
            {
                id: 2,
                title: 'Atlas Shrugged',
                author: 'A. Rand',
                price: 33,
                coverImage: 'https://lh3.googleusercontent.com/proxy/H-On5RJzCnK05Wka1_Adf5Kt7EhWrK3IcdEq8hQ9wsfhc0aXeL81KrKMTDR54n0IebLvm97Nh9F8cPhLTb9-zGpJuuuJmhe-UdptqkIb0Pfmy7KW7EcehigbTE_7vflN'
            }
        ];
    };
};