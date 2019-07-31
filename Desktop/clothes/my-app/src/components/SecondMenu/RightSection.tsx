import React from 'react'

import styled from 'styled-components'
import FavouriteSection from './FavouriteSection';
import BasketSection from './BasketSection'
const NavWrapper = styled.nav`
`

const Nav = styled.div`
display:flex;
`



const RightMenu: React.SFC = () => {
    return (
        <NavWrapper>
            <Nav>
                <FavouriteSection />
                <BasketSection />

            </Nav>
        </NavWrapper>
    )
}

export default RightMenu