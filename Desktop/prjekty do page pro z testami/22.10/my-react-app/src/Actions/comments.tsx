import axios from 'axios';
import { FETCH_COMMENTS_SUCCESS, ADD_COMMENT_SUCCESS } from './ActionType/index'

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchCommentsSuccess = (payload: any) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload
    };
};

export const fetchComments = (postId: any) => {
    return (dispatch: any) => {
        return axios.get(`${API_URL}/comments?postId=${postId}`)
            .then(response => {
                dispatch(fetchCommentsSuccess(response.data));

            })
            .catch(error => {
                throw error;
            });
    };
};

export const addComment = (id: any) => {
    return (dispatch: any) => {
        return axios.post(`${API_URL}/comments?postId=${id}`)
            .then(response => {
                dispatch(addCommentSuccess(response.data))
            })
            .catch(error => {
                throw error
            })
    }
}

export const addCommentSuccess = (payload: any) => {
    return {
        type: ADD_COMMENT_SUCCESS,
        payload

    }
}