import axios from 'axios';
import { FETCH_PRODUCTS_TO_SEARCH, SEARCH_PRODUCTS_IN_PRODUCTS, FETCH_SORTED, SORT_PRICE, SORT_BRANDS, SORT_CATEGORIES, FETCH_POSTS_SUCCESS, ADD_TO_CART, ADD_TO_FAVOURITE, FETCH_BESTSELLERS, FETCH_NEW_ARRIVALS, REMOVE_ITEM_FROM_CART, REMOVE_ITEM_FROM_FAVOURITE } from './actions_types'

const API = "https://api.myjson.com/bins/7d40a"


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

export const fetchBestSellersSucces = () => {
    return (dispatch: any) => {
        return axios.get(API)
            .then(response => {
                dispatch(fetchBestSellers(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}


export const fetchBestSellers = (payload: any) => {
    return {
        type: FETCH_BESTSELLERS,
        payload

    }
}

export const fetchNewArrivalsSucces = () => {
    return (dispatch: any) => {
        return axios.get(API)
            .then(response => {
                dispatch(fetchNewArrivals(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const fetchNewArrivals = (payload: any) => {
    return {
        type: FETCH_NEW_ARRIVALS,
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

export const sortPrice = (e: any, key: any) => {
    return {
        type: SORT_PRICE,
        e,
        key
    }
}
export const sortBrands = (e: any, brands: string) => {
    return {
        type: SORT_BRANDS,
        e, brands
    }
}
export const sortCategories = (e: any, gender: string) => {
    return {
        type: SORT_CATEGORIES,
        e, gender

    }
}






export const fetchProductsToSearchSucces = () => {
    return (dispatch: any) => {
        return axios.get(API)
            .then(response => {
                dispatch(fetchProductsToSearch(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const fetchProductsToSearch = (payload: any) => {
    return {
        type: FETCH_PRODUCTS_TO_SEARCH,
        payload

    }
}



