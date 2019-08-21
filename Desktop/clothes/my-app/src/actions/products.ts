import axios from 'axios';
import { FETCH_POSTS_SUCCESS } from './actions_types'

const API = "https://api.myjson.com/bins/1ecajr"


export const fetchProductsResponse = () => {
    return (dispatch: any) => {
        return axios.get(API)
            .then(response => {
                dispatch(fetchProducts(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const fetchProducts = (payload: any) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload
    }
}