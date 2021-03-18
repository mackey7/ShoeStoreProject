import { FETCH_POSTS_SUCCESS, DELETE_POST_SUCCESS, ADD_POST_SUCCESS, FETCH_SINGLE_POST_SUCCESS } from '../Actions/ActionType'

interface IState {
    post?: any;
    posts?: any;
}

const initial: IState = {
    posts: [],
    post: []

}

const postsReducer = (state = initial, actions: any) => {
    switch (actions.type) {
        case FETCH_POSTS_SUCCESS:
            return { posts: actions.payload }
        case DELETE_POST_SUCCESS:
            let new_array_posts = state.posts.filter((item: any) => actions.payload !== item.id)
            return {
                ...state, posts: new_array_posts
            }
        case ADD_POST_SUCCESS:
            return {
                ...state, posts: [...state.posts, actions.payload]
            }
        case FETCH_SINGLE_POST_SUCCESS:
            return { post: actions.payload }
        default:
            return state;
    }
};

export default postsReducer