import { FETCH_USER_SUCCESS, FETCH_USER_NAME_SUCCESS } from '../Actions/ActionType'
import { Reducer } from 'redux'


export interface IUserState {
    users?: string[];

}
const initial: IUserState = {
    users: [],

}

const userReducer: Reducer<IUserState> = (state = initial, actions) => {
    switch (actions.type) {
        case FETCH_USER_SUCCESS:

            return { users: actions.payload }
        case FETCH_USER_NAME_SUCCESS:
            return { users: actions.payload }



        default:
            return state;
    }
};

export default userReducer