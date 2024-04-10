import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';

import { listingsListReducer } from "./reducers/ListingsReducers"; 

const rootReducer = combineReducers({listingsListReducer});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
