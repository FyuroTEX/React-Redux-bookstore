import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom'



const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header row'>
            <Link to="/" className='logo text-dark'>ReStore</Link>
            <Link to="/cart" className="shopping-cart">
                <i className="fa fa-shopping-cart" />
                &nbsp;
                {numItems} items (${total})
            </Link>
        </header>
    );
};

export default ShopHeader;