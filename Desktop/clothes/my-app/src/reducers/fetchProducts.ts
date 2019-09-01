import { FETCH_POSTS_SUCCESS, ADD_TO_CART } from '../actions/actions_types'
import { Reducer } from 'redux'


interface IPropsState {
    products: any;
    cart: any;
    favourite: any;
}


const initial: IPropsState = {
    products: [],
    cart: [{
        "id": 1,
        "name": "CLASSIC SLIP-ON - Półbuty wsuwane",
        "src": "https://mosaic03.ztat.net/vgs/media/packshot/catalog-md/VA/21/2Z/00/Y0/02/VA212Z00Y-002@19.jpg",
        "price": 49.99,
        "currency": "$",
        "onSale": "false",
        "quantity": 10,
        "category": "shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quidem? Excepturi suscipit quo dolores, debitis quae omnis quas a eos inventore repudiandae eaque aliquam cumque accusantium facilis quibusdam necessitatibus amet nam alias minus similique illo dignissimos impedit. Asperiores veniam doloremque quas natus ipsam et quam necessitatibus. Cumque quae iusto explicabo dolorem animi ratione repellendus enim sed esse cupiditate. Minima eaque, perspiciatis rerum praesentium, dicta maiores laudantium eveniet possimus laborum laboriosam eligendi suscipit ducimus, ipsum distinctio corrupti sequi veniam repellat nemo. Voluptates eum porro exercitationem sequi cum, ullam vitae reprehenderit fuga officiis mollitia velit delectus quod eaque soluta nam voluptatem totam?",
        "gender": "man"
    }],
    favourite: [{
        "id": 1,
        "name": "CLASSIC SLIP-ON - Półbuty wsuwane",
        "src": "https://mosaic03.ztat.net/vgs/media/packshot/catalog-md/VA/21/2Z/00/Y0/02/VA212Z00Y-002@19.jpg",
        "price": 49.99,
        "currency": "$",
        "onSale": "false",
        "quantity": 10,
        "category": "shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quidem? Excepturi suscipit quo dolores, debitis quae omnis quas a eos inventore repudiandae eaque aliquam cumque accusantium facilis quibusdam necessitatibus amet nam alias minus similique illo dignissimos impedit. Asperiores veniam doloremque quas natus ipsam et quam necessitatibus. Cumque quae iusto explicabo dolorem animi ratione repellendus enim sed esse cupiditate. Minima eaque, perspiciatis rerum praesentium, dicta maiores laudantium eveniet possimus laborum laboriosam eligendi suscipit ducimus, ipsum distinctio corrupti sequi veniam repellat nemo. Voluptates eum porro exercitationem sequi cum, ullam vitae reprehenderit fuga officiis mollitia velit delectus quod eaque soluta nam voluptatem totam?",
        "gender": "man"
    }],

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