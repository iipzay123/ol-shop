import {applyMiddleware, createStore, compose} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
const {logger} = require('redux-logger');

import combineReducers from './combine_reducers';

const middleware = [thunk, promise];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = compose(applyMiddleware(...middleware))(createStore)(
  combineReducers,
);

export default store;
