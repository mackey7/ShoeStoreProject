import React from 'react'
import Styled from 'styled-components'
import LeftSection from './LeftSection';
import RightSection from './RightSection';
const FooterWrapper = Styled.footer``

const Footer: React.SFC = () => {
    return (
        <FooterWrapper>
            <LeftSection />
            <RightSection />
        </FooterWrapper>
    )
}

export default Footer