import { SORT_PRICE, FETCH_POSTS_SUCCESS, ADD_TO_CART, ADD_TO_FAVOURITE, FETCH_BESTSELLERS, FETCH_NEW_ARRIVALS, REMOVE_ITEM_FROM_CART, REMOVE_ITEM_FROM_FAVOURITE } from '../actions/actions_types'
import { Reducer } from 'redux'


interface IPropsState {
    products?: any;
    cart?: any;
    favourite?: any;
    bestSellers?: any;
    newArrival?: any;
}
interface IPropsAction {
    id?: any;
    type: any;
    payload?: any;
    a: any;
    key: any;
    e: any;
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
        "gender": "man",
        "newArrivals": true,
        "bestSellers": true
    }],
    favourite: [{
        "id": 1,
        "name": "CLASSIC SLIP-ON - Półbuty wsuwane",
        "src": "https://mosaic03.ztat.net/vgs/media/packshot/catalog-md/VA/21/2Z/00/Y0/02/VA212Z00Y-002@19.jpg",
        "price": 49.99,
        "currency": "$",
        "onSale": false,
        "quantity": 10,
        "category": "shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quidem? Excepturi suscipit quo dolores, debitis quae omnis quas a eos inventore repudiandae eaque aliquam cumque accusantium facilis quibusdam necessitatibus amet nam alias minus similique illo dignissimos impedit. Asperiores veniam doloremque quas natus ipsam et quam necessitatibus. Cumque quae iusto explicabo dolorem animi ratione repellendus enim sed esse cupiditate. Minima eaque, perspiciatis rerum praesentium, dicta maiores laudantium eveniet possimus laborum laboriosam eligendi suscipit ducimus, ipsum distinctio corrupti sequi veniam repellat nemo. Voluptates eum porro exercitationem sequi cum, ullam vitae reprehenderit fuga officiis mollitia velit delectus quod eaque soluta nam voluptatem totam?",
        "gender": "man",
        "newArrivals": true,
        "bestSellers": true
    }],
    bestSellers: [{
        "id": 1,
        "name": "CLASSIC SLIP-ON - Półbuty wsuwane",
        "src": "https://mosaic03.ztat.net/vgs/media/packshot/catalog-md/VA/21/2Z/00/Y0/02/VA212Z00Y-002@19.jpg",
        "price": 49.99,
        "currency": "$",
        "onSale": false,
        "quantity": 10,
        "category": "shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quidem? Excepturi suscipit quo dolores, debitis quae omnis quas a eos inventore repudiandae eaque aliquam cumque accusantium facilis quibusdam necessitatibus amet nam alias minus similique illo dignissimos impedit. Asperiores veniam doloremque quas natus ipsam et quam necessitatibus. Cumque quae iusto explicabo dolorem animi ratione repellendus enim sed esse cupiditate. Minima eaque, perspiciatis rerum praesentium, dicta maiores laudantium eveniet possimus laborum laboriosam eligendi suscipit ducimus, ipsum distinctio corrupti sequi veniam repellat nemo. Voluptates eum porro exercitationem sequi cum, ullam vitae reprehenderit fuga officiis mollitia velit delectus quod eaque soluta nam voluptatem totam?",
        "gender": "man",
        "newArrivals": true,
        "bestSellers": true
    }],
    newArrival: [{
        "id": 1,
        "name": "CLASSIC SLIP-ON - Półbuty wsuwane",
        "src": "https://mosaic03.ztat.net/vgs/media/packshot/catalog-md/VA/21/2Z/00/Y0/02/VA212Z00Y-002@19.jpg",
        "price": 49.99,
        "currency": "$",
        "onSale": false,
        "quantity": 10,
        "category": "shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quidem? Excepturi suscipit quo dolores, debitis quae omnis quas a eos inventore repudiandae eaque aliquam cumque accusantium facilis quibusdam necessitatibus amet nam alias minus similique illo dignissimos impedit. Asperiores veniam doloremque quas natus ipsam et quam necessitatibus. Cumque quae iusto explicabo dolorem animi ratione repellendus enim sed esse cupiditate. Minima eaque, perspiciatis rerum praesentium, dicta maiores laudantium eveniet possimus laborum laboriosam eligendi suscipit ducimus, ipsum distinctio corrupti sequi veniam repellat nemo. Voluptates eum porro exercitationem sequi cum, ullam vitae reprehenderit fuga officiis mollitia velit delectus quod eaque soluta nam voluptatem totam?",
        "gender": "man",
        "newArrivals": true,
        "bestSellers": true
    }],


}

const fetchProducts: Reducer<IPropsState, IPropsAction> = (state = initial, actions) => {
    switch (actions.type) {
        case FETCH_POSTS_SUCCESS: {
            return { ...state, products: actions.payload }
        }
        case FETCH_BESTSELLERS: {
            let newProducts = state.products.find((item: any) => item.bestSellers == true)
            return { ...state, bestSellers: newProducts }
        }
        case FETCH_NEW_ARRIVALS: {
            let newProducts = state.products.find((item: any) => item.newArrivals == true)
            return { ...state, newArrival: newProducts }
        }
        case ADD_TO_CART: {

            let addedProduct = state.products.find((item: any) => item.id === actions.id)

            return {
                ...state,
                cart: [...state.cart, addedProduct]

            }

        }
        case ADD_TO_FAVOURITE: {

            let addedProduct = state.products.find((item: any) => item.id === actions.id)

            return {
                ...state,
                favourite: [...state.favourite, addedProduct]

            }

        }
        case REMOVE_ITEM_FROM_CART: {
            let new_Array = state.cart.filter((item: any) => actions.id !== item.id)
            return {
                ...state, cart: new_Array,
            }
        }
        case REMOVE_ITEM_FROM_FAVOURITE: {
            let new_Array = state.favourite.filter((item: any) => actions.id !== item.id)
            return {
                ...state, favourite: new_Array,
            }
        }
        case SORT_PRICE: {
            if (actions.e === "max-min") {

                let sortFn = (a: any, b: any) => {
                    if (a[actions.key] > b[actions.key]) return -1;
                    if (a[actions.key] < b[actions.key]) return 1;
                    return 0;
                }
                let priceColumn = state.products
                let sortedColumn = priceColumn.sort(sortFn);
                console.log(...sortedColumn)
                return {
                    ...state, products: [...sortedColumn]
                }
            } if (actions.e === "min-max") {

                let sortFn = (a: any, b: any) => {
                    if (a[actions.key] < b[actions.key]) return -1;
                    if (a[actions.key] > b[actions.key]) return 1;
                    return 0;
                }
                let priceColumn = state.products
                let sortedColumn = priceColumn.sort(sortFn)
                console.log(...sortedColumn)
                return {
                    ...state, products: [...sortedColumn]
                }



            }
        } if (actions.e === " ") {
            let product = state.products

            return {
                ...state, products: product
            }



        }

        default:
            return state;
    }
}


export default fetchProducts