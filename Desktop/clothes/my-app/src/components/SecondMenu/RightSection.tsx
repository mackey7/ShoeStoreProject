import React from 'react'

import styled from 'styled-components'
import FavouriteBox from '../../containers/FavouriteBox/FavouriteBox';
import CartBox from '../../containers/CartBox/CartBox'
const NavWrapper = styled.nav`
order:1;
@media only screen and (min-width: 900px) {
order:2;
}
`

const Nav = styled.div`
display:flex;
margin:20px;
justify-content:space-between ;
width:100%;
@media only screen and (min-width: 900px) {
order:2;
margin:0px;
}
`



const RightMenu: React.SFC = () => {
    return (
        <NavWrapper>
            <Nav>
                <FavouriteBox />
                <CartBox />
            </Nav>
        </NavWrapper>
    )
}

export default RightMenu