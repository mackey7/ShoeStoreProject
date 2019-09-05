import axios from 'axios';
import { FETCH_SORTED, SORT_PRICE, SORT_BRANDS, SORT_CATEGORIES, FETCH_POSTS_SUCCESS, ADD_TO_CART, ADD_TO_FAVOURITE, FETCH_BESTSELLERS, FETCH_NEW_ARRIVALS, REMOVE_ITEM_FROM_CART, REMOVE_ITEM_FROM_FAVOURITE } from './actions_types'

const API = "https://api.myjson.com/bins/17kfov"


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

export const fetchProductsToSorted = () => {
    return (dispatch: any) => {
        return axios.get(API)
            .then(response => {
                dispatch(fetchSorted(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}
export const fetchSorted = (payload: any) => {
    return {
        type: FETCH_SORTED,
        payload
    }
}
export const addToCart = (id: number) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
export const addToFavourite = (id: number) => {
    return {
        type: ADD_TO_FAVOURITE,
        id
    }
}
export const removeItemFromCart = (id: number) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        id
    }
}
export const removeItemFromFavourite = (id: number) => {
    return {
        type: REMOVE_ITEM_FROM_FAVOURITE,
        id
    }
}
export const fetchBestSellers = () => {
    return {
        type: FETCH_BESTSELLERS

    }
}
export const fetchNewArrivals = () => {
    return {
        type: FETCH_NEW_ARRIVALS,

    }
}
export const sortPrice = (e: any, key: any) => {
    return {
        type: SORT_PRICE,
        e,
        key
    }
}
export const sortBrands = (e: any) => {
    return {
        type: SORT_BRANDS,
        e
    }
}
export const sortCategories = (e: any) => {
    return {
        type: SORT_CATEGORIES,
        e
    }
}