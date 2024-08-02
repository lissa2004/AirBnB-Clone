// reducers/ListingsReducers.js
import {
    LISTING_LIST_REQUEST,
    LISTING_LIST_SUCCESS,
    LISTING_LIST_FAIL,
  } from '../types/ListingsTypes';
  
  const initialState = {
    listings: [],
    loading: false,
    error: null,
  };
  
  export const listingsListReducer = (state = initialState, action) => {
    switch (action.type) {
      case LISTING_LIST_REQUEST:
        return { ...state, loading: true };
      case LISTING_LIST_SUCCESS:
        return { ...state, loading: false, listings: action.payload };
      case LISTING_LIST_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  