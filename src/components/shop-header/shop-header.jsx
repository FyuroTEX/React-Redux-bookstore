import React from 'react';
import './shop-header.css';


const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header row'>
            <a href="/" className='logo text-dark'>ReStore</a>
            <a href="#" className="shopping-cart">
                <i className="fa fa-shopping-cart" />
                &nbsp;
                {numItems} items (${total})
            </a>
        </header>
    );
};

export default ShopHeader;