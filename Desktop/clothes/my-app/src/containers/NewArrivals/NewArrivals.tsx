import React from 'react'
import { connect } from "react-redux";
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory'
import { addToCart, addToFavourite, fetchNewArrivalsSucces, fetchProductsResponse } from '../../actions/products'

interface Iprops {
    products: any;
    fetchNewArrivalsSucces: any;
    addToCart: any;
    addToFavourite: any;
    newArrival: any;
    fetchProductsResponse: any;
}


class NewArrivals extends React.Component<Iprops> {
    handleAddToCart = (id: number) => {
        this.props.addToCart(id)
    }
    handleAddToFavourite = (id: number) => {
        this.props.addToFavourite(id)
    }
    componentDidMount() {
        this.props.fetchNewArrivalsSucces();
        this.props.fetchProductsResponse();
    }
    render() {
        const { newArrival } = this.props
        return (
            <div>
                < ProductsCategory data={newArrival} CategoryTitle="New Arrivals" addToCart={this.handleAddToCart} addToFavourite={this.handleAddToFavourite} />
            </div>
        )
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNewArrivalsSucces: () => dispatch(fetchNewArrivalsSucces()),
        fetchProductsResponse: () => dispatch(fetchProductsResponse()),
        addToCart: (id: number) => dispatch(addToCart(id)),
        addToFavourite: (id: number) => dispatch(addToFavourite(id))
    }
}
const mapStateToProps = (state: any) => {
    console.log(state)

    return {
        newArrival: state.products.newArrival

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewArrivals) 
