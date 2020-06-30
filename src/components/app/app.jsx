import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';

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
                <Redirect to='/' />
            </Switch>
        </main>
    )
};

export default App;
