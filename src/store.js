import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const logMiddleware = ({ getState }) => (next) => (action) => {
    // const logMiddleware = (store) => (dispatch) => (action) => {
    // const logMiddleware = (store, dispatch) => (action) => {

    console.log(action.type, getState());
    return next(action);
};

const stringMiddleware = () => (next) => (action) => {
    // const stringMiddleware = () => (next) => (action) => { next or dispatch
    // () or (state) or ({getState, dispatch})
    if (typeof action === 'string') {
        return next({
            type: action
        });
    };
    return next(action);
};


const store = createStore(reducer, applyMiddleware( thunkMiddleware, stringMiddleware, logMiddleware));

// store.dispatch('HELLO_WORLD');

// const myAction = (dispatch) => {
//     setTimeout(() => dispatch({
//         type: 'DELAYED_ACTION'
//     }), 2000);
// };

// const delayedActionCreator = (timeout) => (dispatch) => {
//     setTimeout(() => dispatch({
//         type: 'DELAYED_ACTION_CREATOR'
//     }), timeout);
// };


// store.dispatch(myAction);
// store.dispatch(delayedActionCreator(3500));

export default store;