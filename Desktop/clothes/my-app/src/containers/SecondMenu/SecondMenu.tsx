import React from 'react'
import SecondMenuComponent from '../../components/SecondMenuComonent/SecondMenuComponent'

import { connect } from "react-redux";



interface Iprops {
}
interface IState {

}
class SecondMenu extends React.Component<Iprops, IState> {



    render() {
        return (
            <div>
                <SecondMenuComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(SecondMenu) 
