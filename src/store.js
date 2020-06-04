import { createStore, applyMiddleware } from 'redux';
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




const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

store.dispatch('HELLO_WORLD');

export default store;