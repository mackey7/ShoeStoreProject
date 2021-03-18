import axios from 'axios'
import { FETCH_USER_SUCCESS, FETCH_USER_NAME_SUCCESS } from './ActionType/index'

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUserSuccess = (payload: any) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload
    }
}

export const fetchUser = () => {
    return (dispatch: any) => {
        return axios.get(`${API_URL}/users`)
            .then(response => {
                dispatch(fetchUserSuccess(response.data))
            })
            .catch(error => {
                throw error;
            });
    }
}


export const fetchUserNameSuccess = (payload: any) => {
    return {
        type: FETCH_USER_NAME_SUCCESS,
        payload
    }
}

export const fetchUserName = (id: any) => {
    return (dispatch: any) => {
        return axios.get(`${API_URL}/users/${id}`)
            .then(response => {
                dispatch(fetchUserNameSuccess(response.data))
            })
            .catch(error => {
                throw error
            })
    }
}