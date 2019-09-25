import React from 'react'
import LeftpartMenu from './LeftPartMenu';
import RightPartMenu from './RightPartMenu'
import styled from 'styled-components'

const NavWrapper = styled.nav`
    min-width:100%;
    min-height:60px;
    background:#242424;
`

const Nav = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
    padding-bottom:30px;

    @media only screen and (min-width: 600px) {
        width:80%;
        margin: 0 auto;
        padding-bottom:0px;
        flex-direction:row;
        justify-content:space-between;
        flex-wrap:wrap;
    }
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