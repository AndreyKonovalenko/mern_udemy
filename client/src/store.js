import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const initialState = {}; // it is not necessary parame

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;