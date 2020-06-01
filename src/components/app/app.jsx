import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';
import ShoppingaCartTable from './../shoping-cart-table';

import './app.css';

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={2} total={106} />
            <Switch>
                <Route
                    path='/' exact
                    component={HomePage}
                />
                <Route path='/cart'
                    component={CartPage}
                />
            </Switch>
            <ShoppingaCartTable />
        </main>
    )
};

export default App;
