import React from 'react'
import CarouselContainer from '../CarouselContainer/CarouselContainer'
import AddonSection from '../../components/AddonSection/AddonSection'
import HomeCategory from '../../components/HomeCategory/HomeCategory';

import { fetchProductsResponse, addToCart, addToFavourite } from '../../actions/products'
import { connect } from "react-redux";




interface Iprops {
    products: any;
    fetchProductsResponse: any;
    addToCart: any;
    addToFavourite: any;
}
interface IState {

}
class Home extends React.Component<Iprops, IState> {
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
        return (
            <div>
                <CarouselContainer />

                <HomeCategory title="New arrivals on FooseShoes" data={this.props.products.products} RouteName="/newArrivals" addToCart={this.handleAddToCart} addToFavourite={this.handleAddToFavourite} />
                <HomeCategory title="Best sellers of the month" data={this.props.products.products} RouteName="/bestSellers" addToCart={this.handleAddToCart} addToFavourite={this.handleAddToFavourite} />
                <AddonSection />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home) 