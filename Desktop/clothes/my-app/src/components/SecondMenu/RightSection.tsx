import React from 'react'

import styled from 'styled-components'
import FavouriteSection from './FavouriteSection'
const NavWrapper = styled.nav`
`

const Nav = styled.div`

`



const RightMenu: React.SFC = () => {
    return (
        <NavWrapper>
            <Nav>
                <FavouriteSection />

            </Nav>
        </NavWrapper>
    )
}

export default RightMenu