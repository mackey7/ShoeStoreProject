import { combineReducers } from 'redux'
import fetchProducts from './fetchProducts'
import fetchPosts from './fetchPosts'
const rootReducer = combineReducers({
    products: fetchProducts,
    posts: fetchPosts

})


export default rootReducer