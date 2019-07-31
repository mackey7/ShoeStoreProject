import React from 'react'
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import styled from 'styled-components'

const NavWrapper = styled.nav`
/* width:100%;
height:100px; */
`

const Nav = styled.div`
width:80%;
margin:0 auto;
display:flex;
flex-direction:auto;
justify-content:space-between;
`



const SecondMenu: React.SFC = () => {
    return (
        <NavWrapper>
            <Nav>
                <LeftSection />
                <RightSection />
            </Nav>
        </NavWrapper>
    )
}

export default SecondMenu