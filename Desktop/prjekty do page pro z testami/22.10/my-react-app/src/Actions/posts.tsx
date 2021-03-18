import axios from 'axios';
import { FETCH_POSTS_SUCCESS, DELETE_POST_SUCCESS, ADD_POST_SUCCESS, FETCH_SINGLE_POST_SUCCESS } from './ActionType/index'

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPostsSuccess = (payload: any) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload
    }

}

export const fetchPosts = (UserId: any) => {
    return (dispatch: any) => {
        return axios.get(`${API_URL}/posts?userId=${UserId}`)
            .then(response => {
                dispatch(fetchPostsSuccess(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const deletePostSuccess = (payload: any) => {
    console.log(payload)
    return {
        type: DELETE_POST_SUCCESS,
        payload
    }
}
export const deletePost = (id: number) => {
    return (dispatch: any) => {
        return axios.delete(`${API_URL}/posts/${id}`)
            .then(response => {
                dispatch(deletePostSuccess(id))

            })
            .catch(error => {
                throw error
            })
    }
}
export const addPost = (postId: any, title: string, body: string) => {
    return (dispatch: any) => {
        return axios.post(`${API_URL}/posts?userId=${postId}`)
            .then(response => {
                dispatch(addPostSuccess(response.data))
            })
            .catch(error => {
                throw error
            })
    }
}

export const addPostSuccess = (payload: any) => {
    return {
        type: ADD_POST_SUCCESS,
        payload
    }
}

export const fetchSinglePostSuccess = (payload: any) => {
    return {
        type: FETCH_SINGLE_POST_SUCCESS,
        payload
    };
};


export const fetchSinglePost = (postId: any) => {
    return (dispatch: any) => {
        return axios.get(`${API_URL}/posts/${postId}`)
            .then(response => {
                dispatch(fetchSinglePostSuccess(response.data));

            })
            .catch(error => {
                throw error;
            });
    };
};
