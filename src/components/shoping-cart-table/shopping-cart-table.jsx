import React from 'react';
import { connect } from 'react-redux';
import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart
} from '../../actions';

import './shopping-cart-table.css';

const ShoppingaCartTable = ({ items, total, onIncreace, onDecreace, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (

            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        onClick={() => onIncreace(id)}
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecreace(id)}
                        className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        )
    };
    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(renderRow)}
                </tbody>


            </table>
            <div className='total'>
                Total: ${total}
            </div>
        </div>
    );
};
const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};
const mapDispatchToProps = {
    onIncreace: bookAddedToCart,
    onDecreace: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingaCartTable);