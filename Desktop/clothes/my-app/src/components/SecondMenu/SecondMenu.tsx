import React from 'react'
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import styled from 'styled-components'

const NavWrapper = styled.nav`
border-bottom:4px solid #ebe7df;
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
                <i className="fas fa-bars"></i>
                <LeftSection />
                <RightSection />
            </Nav>
        </NavWrapper>
    )
}

export default SecondMenu