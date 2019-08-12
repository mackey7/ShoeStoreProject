
import { FETCH_POSTS_SUCCESS } from './actions_types'

export const fetchProducts = (payload: any) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload
    }
}