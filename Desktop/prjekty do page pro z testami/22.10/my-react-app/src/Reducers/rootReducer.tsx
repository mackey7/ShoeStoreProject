import { combineReducers } from 'redux'
import userReducer from './userReducer'
import postsReducer from './postsReducer'
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
    users: userReducer,
    posts: postsReducer,
    comments: commentsReducer
})

export default rootReducer