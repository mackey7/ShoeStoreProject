import React from 'react'
import CarouselContainer from '../CarouselContainer/CarouselContainer'
import AddonSection from '../../components/AddonSection/AddonSection'
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import SpecialsCategory from '../../components/SepecialsCategory/SpecialsCategory'
import { fetchProductsResponse } from '../../actions/products'
import { connect } from "react-redux";



interface Iprops {
    products: any;
    fetchProductsResponse: any;
}
interface IState {

}
class Home extends React.Component<Iprops, IState> {
    componentDidMount() {
        this.props.fetchProductsResponse();
    }
    render() {
        return (
            <div> <CarouselContainer />
                <SpecialsCategory />
                <HomeCategory title="New arrivals on FooseShoes" data={this.props.products.products} RouteName="/newArrivals" />
                <HomeCategory title="Best sellers of the month" data={this.props.products.products} RouteName="/bestSellers" />
                <AddonSection />
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProductsResponse: () => dispatch(fetchProductsResponse()),
    }
}

const mapStateToProps = (state: any) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) 