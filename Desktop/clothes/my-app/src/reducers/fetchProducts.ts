import { FETCH_POSTS_SUCCESS } from '../actions/actions_types'
import { Reducer } from 'redux'


interface IPropsState {
    products: any;
}


const initial: IPropsState = {
    products: []

}

const fetchProducts: Reducer<IPropsState> = (state = initial, actions) => {
    switch (actions.type) {
        case FETCH_POSTS_SUCCESS:
            console.log(actions.payload)
            return { products: actions.payload }

        default:
            return state;
    }
}


export default fetchProducts