import { FETCH_POSTS_SUCCESS } from '../actions/actions_types'
import { Reducer } from 'redux'

interface IPropsState {
    products: any;
}


const initial: IPropsState = {
    products: [
        {
            "name": "product name",
            "src": "https://carry.pl/848-home_default/mh-8f-koszulka.jpg",
            "price": "49,99",
            "currency": "$",
            "onSale": "false",
            "quantity": "10",
            "category": "t-shirt",
            "description": "super koszulka",
            "gender": "female"
        }
    ]
}

const fetchProducts: Reducer<IPropsState> = (state = initial, actions) => {
    switch (actions.type) {
        case FETCH_POSTS_SUCCESS:
            return { products: actions.payload }

        default:
            return state;
    }
}


export default fetchProducts