import React from 'react'
import { connect } from "react-redux";
import { fetchProductsResponse } from '../../actions/products'
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory'
import SortComponent from '../../components/SortComponent/SortComponent'
import { addToCart, addToFavourite, sortPrice } from '../../actions/products'


interface Iprops {
    products: any;
    fetchProductsResponse: any;
    addToCart: any;
    addToFavourite: any;
    sortPrice: any;
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
    handleSortPrice = (e: any, key: any) => {
        console.log(this.props.sortPrice(e, key))
        this.props.sortPrice(e.target.value, key)
    }
    componentDidMount() {
        this.props.fetchProductsResponse();
    }
    render() {
        const { products } = this.props.products;
        return (
            <div>
                <SortComponent sortPrice={this.handleSortPrice} />
                < ProductsCategory data={products} CategoryTitle="Products" addToCart={this.handleAddToCart} addToFavourite={this.handleAddToFavourite} />
            </div>
        )
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProductsResponse: () => dispatch(fetchProductsResponse()),
        addToCart: (id: number) => dispatch(addToCart(id)),
        addToFavourite: (id: number) => dispatch(addToFavourite(id)),
        sortPrice: (e: any, key: any) => dispatch(sortPrice(e, key))
    }
}
const mapStateToProps = (state: any) => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products) 