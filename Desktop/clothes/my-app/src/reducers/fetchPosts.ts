import { FETCH_BLOG_POSTS_SUCCESS } from '../actions/actions_types'
import { Reducer } from 'redux'




interface IPropsState {
    posts?: any;

}
interface IPropsAction {
    type: any
    payload?: any;

}
const initial: IPropsState = {
    posts: []
}

const fetchPosts: Reducer<IPropsState, IPropsAction> = (state = initial, actions) => {
    switch (actions.type) {
        case FETCH_BLOG_POSTS_SUCCESS: {
            return { ...state, posts: actions.payload }
        }
        default:
            return state;
    }
}


export default fetchPosts