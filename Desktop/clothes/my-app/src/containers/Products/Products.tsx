import React from 'react'
import { connect } from "react-redux";

interface Iprops {
    products: any
}
interface IState {

}
class Products extends React.Component<Iprops, IState> {

    render() {
        return (
            <div>
                {console.log(this.props.products.products)}
                Products
            </div>
        )
    }

}
const mapStateToProps = (state: any) => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps)(Products) 