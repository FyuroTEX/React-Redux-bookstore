import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
    const books = [{
        id: 1,
        title: 'Witcher',
        author: 'A. Sapkowski'
    },
    {
        id: 2,
        title: 'Atlas Shrugged',
        author: 'A. Rand'
    }];
    return (
        <>
            <div>Home Page</div>
            <BookList books={books} />
        </>
    );
};

export default HomePage;
