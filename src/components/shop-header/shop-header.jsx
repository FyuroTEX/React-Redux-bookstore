import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



const ShopHeader = ({ items, total}) => {
    return (
        <header className='shop-header row'>
            <Link to="/bookstore/" className='logo text-dark'>ReStore</Link>
            <Link to="/bookstore/cart" className="shopping-cart">
                <i className="fa fa-shopping-cart" />
                &nbsp;
                {items.length} items (${total})
            </Link>
        </header>
    );
};
const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

export default connect(mapStateToProps)(ShopHeader);