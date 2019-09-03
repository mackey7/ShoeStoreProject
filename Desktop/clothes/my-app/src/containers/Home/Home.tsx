import React from 'react'
import CarouselContainer from '../CarouselContainer/CarouselContainer'
import AddonSection from '../../components/AddonSection/AddonSection'
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import SpecialsCategory from '../../components/SepecialsCategory/SpecialsCategory'
import { fetchProductsResponse } from '../../actions/products'
import { connect } from "react-redux";
import { addToCart } from '../../actions/products'



interface Iprops {
    products: any;
    fetchProductsResponse: any;
    addToCart: any;
}
interface IState {

}
class Home extends React.Component<Iprops, IState> {
    handleClick = (id: number) => {
        this.props.addToCart(id)
    }

    componentDidMount() {
        this.props.fetchProductsResponse();
    }
    render() {
        return (
            <div> <CarouselContainer />
                <SpecialsCategory />
                <HomeCategory title="New arrivals on FooseShoes" data={this.props.products.products} RouteName="/newArrivals" addToCart={this.handleClick} />
                <HomeCategory title="Best sellers of the month" data={this.props.products.products} RouteName="/bestSellers" addToCart={this.handleClick} />
                <AddonSection />
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProductsResponse: () => dispatch(fetchProductsResponse()),
        addToCart: (id: number) => dispatch(addToCart(id))

    }
}

const mapStateToProps = (state: any) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) 