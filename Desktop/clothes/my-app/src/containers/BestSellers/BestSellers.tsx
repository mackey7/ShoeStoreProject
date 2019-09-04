import React from 'react'
import { connect } from "react-redux";
import { fetchBestSellers } from '../../actions/products'
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory'
import { addToCart, addToFavourite } from '../../actions/products'
interface Iprops {
    products: any;
    fetchBestSellers: any;
    addToCart: any;
    addToFavourite: any;
    bestSellers: any;
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
        this.props.fetchBestSellers();
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
        fetchBestSellers: () => dispatch(fetchBestSellers()),
        addToCart: (id: number) => dispatch(addToCart(id)),
        addToFavourite: (id: number) => dispatch(addToFavourite(id))
    }
}
const mapStateToProps = (state: any) => {
    return {
        bestSellers: state.products.cart
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BestSellers) 
