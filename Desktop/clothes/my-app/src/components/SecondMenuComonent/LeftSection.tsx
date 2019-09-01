import React from 'react'
import styled from 'styled-components'
import MenuListItem from './MenuListItem'

const NavWrapper = styled.nav`
order:2;
@media only screen and (min-width: 900px) {
order:1;
}
`

const Nav = styled.div`
height:100%;

`



const LeftMenu: React.SFC = () => {
    return (
        <NavWrapper>
            <Nav>
                <MenuListItem />
            </Nav>
        </NavWrapper>
    )
}

export default LeftMenu