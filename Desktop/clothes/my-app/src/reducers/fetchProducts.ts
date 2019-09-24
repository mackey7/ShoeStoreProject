import { FETCH_PRODUCTS_TO_SEARCH, FETCH_SORTED, SORT_PRICE, SORT_BRANDS, SORT_CATEGORIES, FETCH_POSTS_SUCCESS, ADD_TO_CART, ADD_TO_FAVOURITE, FETCH_BESTSELLERS, FETCH_NEW_ARRIVALS, REMOVE_ITEM_FROM_CART, REMOVE_ITEM_FROM_FAVOURITE } from '../actions/actions_types'
import { Reducer } from 'redux'






interface IPropsState {
    products?: any;
    cart?: any;
    favourite?: any;
    bestSellers?: any;
    newArrival?: any;
    sorted?: any
    searchProducts?: any;
    cartTotal: number;
}
interface IPropsAction {
    id?: any;
    type: any;
    payload?: any;
    a: any;
    key: any;
    e: any;
    brands: string,
    gender: string;
}

const initial: IPropsState = {
    cartTotal: 0,
    searchProducts: [],
    sorted: [],
    products: [],
    cart: [{
        "id": 1,
        "name": "CLASSIC SLIP-ON - Półbuty wsuwane",
        "src": "https://mosaic03.ztat.net/vgs/media/packshot/catalog-md/VA/21/2Z/00/Y0/02/VA212Z00Y-002@19.jpg",
        "price": 49.99,
        "currency": "$",
        "onSale": "false",
        "quantity": 1,
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
        "quantity": 1,
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
            state.bestSellers = [...actions.payload]
            let newProducts = state.bestSellers.filter((item: any) => item.bestSellers == true)
            return { ...state, bestSellers: newProducts }

        }
        case FETCH_NEW_ARRIVALS: {
            state.newArrival = [...actions.payload]
            let newProducts = state.newArrival.filter((item: any) => item.newArrivals == true)
            return { ...state, newArrival: newProducts }

        }
        case FETCH_SORTED: {
            return { ...state, sorted: actions.payload }
        }
        case FETCH_PRODUCTS_TO_SEARCH: {
            return { ...state, searchProducts: actions.payload }
        }
        case ADD_TO_CART: {
            let addedProduct = state.products.find((item: any) => item.id === actions.id)
            let existedProduct = state.cart.find((item: any) => actions.id === item.id)
            if (existedProduct) {
                addedProduct.quantity += 1
                return {
                    ...state, cart: [...state.cart],
                    cartTotal: state.cartTotal + addedProduct.price
                }
            }
            else {
                addedProduct.quantity = 1;
                let newTotal = state.cartTotal + addedProduct.price
                return {
                    ...state, cart: [...state.cart, addedProduct],
                    cartTotal: newTotal
                }
            }


        }
        case ADD_TO_FAVOURITE: {
            let addedProduct = state.products.find((item: any) => item.id === actions.id)
            let existedProduct = state.favourite.find((item: any) => actions.id === item.id)

            if (existedProduct) {
                existedProduct.quantity += 1;
                return {
                    ...state, favourite: [...state.favourite]

                }

            } else {
                addedProduct.quantity = 1;
                return {
                    ...state,
                    favourite: [...state.favourite, addedProduct]

                }

            }

        }
        case REMOVE_ITEM_FROM_CART: {
            let productToRemove = state.cart.find((item: any) => actions.id === item.id)
            let new_Array = state.cart.filter((item: any) => actions.id !== item.id)
            let NewCartTotal = state.cartTotal - (productToRemove.price * productToRemove.quantity)
            if (productToRemove.quantity > 1) {
                productToRemove.quantity -= 1
                return {
                    ...state, cart: [...state.cart],
                    cartTotal: NewCartTotal
                }
            } else {
                return {
                    ...state, cart: new_Array,
                    cartTotal: NewCartTotal

                }
            }


        }
        case REMOVE_ITEM_FROM_FAVOURITE: {
            let productToRemove = state.favourite.find((item: any) => actions.id === item.id)
            let new_Array = state.favourite.filter((item: any) => actions.id !== item.id)

            if (productToRemove.quantity > 1) {
                productToRemove.quantity -= 1
                return {
                    ...state, favourite: [...state.favourite]

                }
            } else {
                return {
                    ...state, favourite: new_Array,


                }
            }
        }
        case SORT_PRICE: {
            if (state.sorted.length > 0) {
                if (actions.e === "-") {
                    const sortedTable = [...state.sorted]
                    return {
                        ...state, sorted: [...sortedTable]
                    }

                } if (actions.e === "min-max") {
                    let sortFn = (a: any, b: any) => {
                        if (a[actions.key] < b[actions.key]) return -1;
                        if (a[actions.key] > b[actions.key]) return 1;
                        return 0;
                    }
                    let priceColumn = [...state.sorted]
                    let sortedColumn = priceColumn.sort(sortFn)
                    return {
                        ...state, sorted: [...sortedColumn]
                    }

                } if (actions.e === "max-min") {
                    let sortFn = (a: any, b: any) => {
                        if (a[actions.key] > b[actions.key]) return -1;
                        if (a[actions.key] < b[actions.key]) return 1;
                        return 0;
                    }
                    let priceColumn = [...state.sorted]
                    let sortedColumn = priceColumn.sort(sortFn);
                    return {
                        ...state, sorted: [...sortedColumn]
                    }

                }

            }

        }
        case SORT_BRANDS: {

            if (state.sorted.length > 0) {
                if (actions.e === "-") {

                    const sortedTable = [...state.sorted]
                    return {
                        ...state, sorted: [...sortedTable]
                    }
                } else {
                    // console.log("actions.brands")
                    // console.log(actions.brands)

                    return {
                        ...state,

                        filterParam: actions.e,
                        category: actions.brands,

                    };
                }
            } else {
                return state;
            }
        }
        case SORT_CATEGORIES: {

            if (state.sorted.length > 0) {
                if (actions.e === "-") {
                    console.log(actions.e)
                    const sortedTable = [...state.sorted]
                    return {
                        ...state, sorted: sortedTable
                    }
                } else {

                    return {
                        ...state,
                        filterParam: actions.e,
                        category: actions.gender,
                    };
                }

            }

        }

        default:
            return state;
    }
}


export default fetchProducts