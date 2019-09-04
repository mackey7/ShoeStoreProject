import React from 'react'
import BasketSection from '../../components/SecondMenu/BasketSection'
import { connect } from "react-redux";
import { removeItemFromCart } from '../../actions/products'


interface Iprops {
    cart?: any;
    isOpen?: boolean;
    removeItemFromCart: any;

}
interface IState {
    isOpen: boolean;
}
class CartBox extends React.Component<Iprops, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        }
    }
    handleRemove = (id: number) => {
        this.props.removeItemFromCart(id)
    }
    SwitchIsOpen = () => {
        this.setState((PrevState) => {
            return {
                isOpen: !PrevState.isOpen
            }
        });
    }

    render() {
        const { cart } = this.props
        const { isOpen } = this.state
        return (
            <div>

                <BasketSection cart={cart} SwitchIsOpen={this.SwitchIsOpen} isOpen={isOpen} removeItemFromCart={this.handleRemove} />

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

export default connect(mapStateToProps, mapDispatchToProps)(CartBox) 
