import React from 'react'
import styled from 'styled-components'
import MenuListItem from './MenuListItem'

const NavWrapper = styled.nav`

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