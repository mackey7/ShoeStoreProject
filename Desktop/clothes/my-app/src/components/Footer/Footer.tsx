import React from 'react'
import Styled from 'styled-components'
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const FooterWrapper = Styled.footer`
    display:flex;
    justify-content: space-around;
    flex-wrap:wrap;
    background:#2e2e2e;
    padding:20px 0px;
    color:#979797;
`

const Footer: React.SFC = () => {
    return (
        <FooterWrapper>
            <LeftSection />
            <RightSection />
        </FooterWrapper>
    )
}

export default Footer