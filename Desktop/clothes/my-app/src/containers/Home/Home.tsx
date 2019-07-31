import React from 'react'
import CarouselContainer from '../CarouselContainer/CarouselContainer'
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
            <div> <CarouselContainer /></div>
        )
    }

}



export default Home