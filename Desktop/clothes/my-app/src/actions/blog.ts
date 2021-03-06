import axios from 'axios';
import { FETCH_BLOG_POSTS_SUCCESS } from './actions_types'

const API = "https://mackey7.github.io/clothesAPi/blog.json"


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