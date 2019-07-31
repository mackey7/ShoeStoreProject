import React from 'react'
import Header from '../../components/Header/Header'
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
            <div> <Header /></div>
        )
    }

}



export default Home