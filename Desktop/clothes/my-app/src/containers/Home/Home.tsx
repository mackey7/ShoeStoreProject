import React from 'react'
import CarouselContainer from '../CarouselContainer/CarouselContainer'
import AddonSection from '../../components/AddonSection/AddonSection'
import styled from 'styled-components'
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import SpecialsCategory from '../../components/SepecialsCategory/SpecialsCategory'
import { fetchProductsResponse } from '../../actions/products'
import { connect } from "react-redux";



const NavWrapper = styled.nav`
`

const Nav = styled.div`

`
interface Iprops {
    products: any;
    fetchProductsResponse: any;
}
interface IState {

}
class Home extends React.Component<Iprops, IState> {
    componentWillMount() {
        this.props.fetchProductsResponse();
    }
    render() {
        return (
            <div> <CarouselContainer />
                {console.log(this.props.products.products)}
                <SpecialsCategory />
                <HomeCategory title="New arrivals on FooseShoes" />
                <HomeCategory title="Best sellers of the month" />
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