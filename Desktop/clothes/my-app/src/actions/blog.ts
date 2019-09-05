import axios from 'axios';
import { FETCH_BLOG_POSTS_SUCCESS } from './actions_types'

const API = "https://api.myjson.com/bins/1fjoqn"


export const fetchBlogResponse = () => {
    return (dispatch: any) => {
        return axios.get(API)
            .then(response => {
                dispatch(fetchPosts(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const fetchPosts = (payload: any) => {
    return {
        type: FETCH_BLOG_POSTS_SUCCESS,
        payload
    }
}