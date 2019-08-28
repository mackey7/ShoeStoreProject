import React from 'react'
import CartPageComponent from "../../components/CartPageComponent/CartPageComponent"


interface Iprops {

}
interface IState {

}
class CartPage extends React.Component<Iprops, IState> {

    render() {
        return (
            <div>
                <CartPageComponent />

            </div>
        )
    }

}



export default CartPage