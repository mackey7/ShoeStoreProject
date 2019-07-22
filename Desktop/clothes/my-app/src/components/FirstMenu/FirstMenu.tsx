import React from 'react'
import LeftpartMenu from './LeftPartMenu';
import RightPartMenu from './RightPartMenu'
import styled from 'styled-components'

const NavWrapper = styled.nav`
width:100%;
height:60px;
background:#242424;
`

const Nav = styled.div`
width:80%;
margin: 0 auto;
display:flex;
flex-direction:row;
justify-content:space-between;
`



const FirstMenu: React.SFC = () => {
    return (
        <NavWrapper>
            <Nav>
                <LeftpartMenu />
                <RightPartMenu />
            </Nav>
        </NavWrapper>
    )
}

export default FirstMenu