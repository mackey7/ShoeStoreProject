import React from 'react'
import CarouselContainer from '../CarouselContainer/CarouselContainer'
import AddonSection from '../../components/AddonSection/AddonSection'
import styled from 'styled-components'

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

                <AddonSection />
            </div>
        )
    }

}



export default Home