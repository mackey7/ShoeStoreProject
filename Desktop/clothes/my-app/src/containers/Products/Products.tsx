import React from 'react'
import { connect } from "react-redux";
import { fetchProductsResponse } from '../../actions/products'
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory'
import { addToCart, addToFavourite } from '../../actions/products'

interface Iprops {
    products: any;
    fetchProductsResponse: any;
    addToCart: any;
    addToFavourite: any;
}
interface IState {

}
class Products extends React.Component<Iprops, IState> {
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
        const { products } = this.props.products;
        return (
            <div>
                < ProductsCategory data={products} CategoryTitle="Products" addToCart={this.handleAddToCart} addToFavourite={this.handleAddToFavourite} />
            </div>
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
        products: state.products
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products) 