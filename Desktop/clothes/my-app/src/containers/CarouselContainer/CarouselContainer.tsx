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
    state = {
        activeIndex: 0,

    };
    handleAddToCart = (id: number) => {
        this.props.addToCart(id)
    }
    handleAddToFavourite = (id: number) => {
        this.props.addToFavourite(id)
    }
    componentDidMount() {
        this.props.fetchProductsResponse();
        setInterval(this.nextSlide, 5000)
    }
    goToSlide = (index: number) => {
        this.setState({
            activeIndex: index
        });
    };



    nextSlide = (e: any) => {
        // e.preventDefault();

        let index = this.state.activeIndex;
        let { products } = this.props;
        let slidesLength = products.slice(0, 3).length;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    };



    render() {

        const { products } = this.props
        const { activeIndex } = this.state
        return (
            <React.Fragment>
                <Carousel data={products} addToCart={this.handleAddToCart} addToFavourite={this.handleAddToFavourite} activeIndex={activeIndex} goToSlide={this.goToSlide} />
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
