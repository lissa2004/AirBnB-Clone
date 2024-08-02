import {LISTING_LIST_REQUEST, LISTING_LIST_SUCCESS, LISTING_LIST_FAIL} from '.../types/ListingsTypes';
import axios from 'axios';

export const listingsListReducer = () => async(dispatch) =>{
    try {
        dispatch({type: LISTING_LIST_REQUEST});

        const{data} = await axios.get()
        dispatch({type:LISTING_LIST_SUCCESS, payload:data});
        
    } catch (error) {
        dispatch({type: LISTING_LIST_FAIL,payload:error})
    }
}