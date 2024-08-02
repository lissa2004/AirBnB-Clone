import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { listingsListReducer } from './reducers/ListingsReducers';

// Combine reducers
const rootReducer = combineReducers({
  listings: listingsListReducer,
});

const middleware = [thunk];

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? composeWithDevTools({}) 
  : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
console.log('window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:', window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);
console.log('compose:', compose);
console.log('composeEnhancers:', composeEnhancers);

console.log('composeEnhancers:', composeEnhancers);
console.log('middleware:', middleware);

export default store;
