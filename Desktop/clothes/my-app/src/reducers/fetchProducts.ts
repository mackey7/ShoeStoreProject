import { FETCH_POSTS_SUCCESS, ADD_TO_CART } from '../actions/actions_types'
import { Reducer } from 'redux'


interface IPropsState {
    products: any;
    cart?: any;
}


const initial: IPropsState = {
    products: [],
    cart: ["cart"]

}

const fetchProducts: Reducer<IPropsState> = (state = initial, actions) => {
    switch (actions.type) {
        case FETCH_POSTS_SUCCESS:
            return { products: actions.payload }

        case ADD_TO_CART: {
            return state.cart

        }
        default:
            return state;
    }
}


export default fetchProducts