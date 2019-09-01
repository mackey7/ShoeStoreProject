import React from 'react'
import BasketSection from '../../components/SecondMenu/BasketSection'
import { connect } from "react-redux";


interface Iprops {
    cart?: any;
    isOpen?: boolean;

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

                <BasketSection cart={cart} SwitchIsOpen={this.SwitchIsOpen} isOpen={isOpen} />

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

export default connect(mapStateToProps, mapDispatchToProps)(CartBox) 
