import React from 'react'
import { connect } from "react-redux";
import { fetchBestSellersSucces } from '../../actions/products'
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory'
import { addToCart, addToFavourite, fetchProductsResponse } from '../../actions/products'
interface Iprops {
    products: any;
    fetchBestSellersSucces: any;
    addToCart: any;
    addToFavourite: any;
    bestSellers: any;
    fetchProductsResponse: any;
}

interface IState {

}
class BestSellers extends React.Component<Iprops, IState> {
    handleAddToCart = (id: number) => {
        this.props.addToCart(id)
    }
    handleAddToFavourite = (id: number) => {
        this.props.addToFavourite(id)
    }
    componentDidMount() {
        this.props.fetchProductsResponse();
        this.props.fetchBestSellersSucces();

    }
    render() {
        const { bestSellers } = this.props
        return (
            <div>
                <ProductsCategory data={bestSellers} CategoryTitle="Best Sellers" addToCart={this.handleAddToCart} addToFavourite={this.handleAddToFavourite} />
            </div>
        )
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchBestSellersSucces: () => dispatch(fetchBestSellersSucces()),
        fetchProductsResponse: () => dispatch(fetchProductsResponse()),
        addToCart: (id: number) => dispatch(addToCart(id)),
        addToFavourite: (id: number) => dispatch(addToFavourite(id))
    }
}
const mapStateToProps = (state: any) => {
    console.log(state)

    return {
        bestSellers: state.products.bestSellers
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BestSellers) 
