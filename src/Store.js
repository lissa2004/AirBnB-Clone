import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { listingsListReducer } from './reducers/ListingsReducers';

// Combine reducers
const rootReducer = combineReducers({
  listings: listingsListReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer(applyMiddleware(...middleware))
);

export default store;
