import React from 'react'
import Carousel from '../../components/Carousel/Carousel'

import {
    fetchProductsResponse,
    addToCart, addToFavourite
} from '../../actions/products'
import { connect } from "react-redux";
interface Iprops {
    fetchProductsResponse: any;
    products: any;
    addToCart: any;
    addToFavourite: any;
}
interface IState {

}
class HeaderContainer extends React.Component<Iprops, IState> {
    handleAddToCart = (id: number) => {
        this.props.addToCart(id)
    }
    handleAddToFavourite = (id: number) => {
        this.props.addToFavourite(id)
    }
    componentDidMount() {
        this.props.fetchProductsResponse();
    }
    render() {
        const { products } = this.props
        return (
            <React.Fragment>
                <Carousel data={products} addToCart={this.handleAddToCart} addToFavourite={this.handleAddToFavourite} />
            </React.Fragment >
        )
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProductsResponse: () => dispatch(fetchProductsResponse()),
        addToCart: (id: number) => dispatch(addToCart(id)),
        addToFavourite: (id: number) => dispatch(addToFavourite(id))

    }
}

const mapStateToProps = (state: any) => {
    return {
        products: state.products.products
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer) 
