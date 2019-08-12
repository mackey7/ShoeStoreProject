import { combineReducers } from 'redux'
import fetchProducts from './fetchProducts'
const rootReducer = combineReducers({ products: fetchProducts })


export default rootReducer