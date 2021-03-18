import { FETCH_COMMENTS_SUCCESS, ADD_COMMENT_SUCCESS } from '../Actions/ActionType'

const initial = {
    comments: [],

}

const commentsReducer = (state = initial, actions: any) => {
    switch (actions.type) {
        case FETCH_COMMENTS_SUCCESS:
            return { comments: actions.payload }

        case ADD_COMMENT_SUCCESS:
            return { ...state, comments: [...state.comments, actions.payload] }



        default:
            return state;
    }
};

export default commentsReducer