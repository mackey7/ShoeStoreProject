import React from 'react'
import CartPageComponent from "../../components/CartPageComponent/CartPageComponent";

import { connect } from "react-redux";



interface Iprops {
    cart?: any
}
interface IState {

}
class CartPage extends React.Component<Iprops, IState> {



    render() {
        return (
            <div>
                {console.log(this.props.cart)}
                <CartPageComponent />

            </div>
        )
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

const mapStateToProps = (state: any) => {
    return {
        cart: state.products.cart

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage) 
