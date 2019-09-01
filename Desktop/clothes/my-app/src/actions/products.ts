import axios from 'axios';
import { FETCH_POSTS_SUCCESS, ADD_TO_CART } from './actions_types'

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
export const addToCart = (id: number) => {
    return {
        type: ADD_TO_CART,
        id
    }
}