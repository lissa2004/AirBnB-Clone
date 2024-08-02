import { createStore, combineReducers, applyMiddleware, } from 'redux';
import {thunk} from 'redux-thunk';


import { listingsListReducer } from './reducers/ListingsReducers';

// Combine reducers
const rootReducer = combineReducers({
  listings: listingsListReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,(applyMiddleware(...middleware))
);

export default store;
