import React from 'react'
import CarouselContainer from '../CarouselContainer/CarouselContainer'
import AddonSection from '../../components/AddonSection/AddonSection'
import styled from 'styled-components'
import HomeCategory from '../../components/HomeCategory/HomeCategory';

const NavWrapper = styled.nav`
`

const Nav = styled.div`

`
interface Iprops {

}
interface IState {

}
class Home extends React.Component<Iprops, IState> {

    render() {
        return (
            <div> <CarouselContainer />
                <HomeCategory title="New arrivals on FooseShoes" />
                <HomeCategory title="Best sellers of the month" />
                <AddonSection />
            </div>
        )
    }

}



export default Home