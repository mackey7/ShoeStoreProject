import React from 'react'
import CartPageComponent from "../../components/CartPageComponent/CartPageComponent";
import { connect } from "react-redux";
import { removeItemFromCart } from '../../actions/products'

interface Iprops {
    cart?: any;
    removeItemFromCart: any;
}
interface IState {

}
class CartPage extends React.Component<Iprops, IState> {
    handleRemove = (id: number) => {
        this.props.removeItemFromCart(id)
    }
    render() {
        const { cart } = this.props
        return (
            <div>

                <CartPageComponent cart={cart} removeItemFromCart={this.handleRemove} />

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        removeItemFromCart: (id: number) => dispatch(removeItemFromCart(id)),
    }
}

const mapStateToProps = (state: any) => {
    return {
        cart: state.products.cart

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage) 
