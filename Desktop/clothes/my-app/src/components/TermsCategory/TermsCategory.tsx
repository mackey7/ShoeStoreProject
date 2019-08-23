import React from 'react'
import Styled from 'styled-components'

const TermsCategorySection = Styled.section`
background: #ebe7df;
padding:40px 0px;
`

const TermsCategoryWrapper = Styled.div`
width:80%;
margin:auto;
background: #f5f2ec;

`

const TermsCategory: React.SFC = () => {

    return (
        <TermsCategorySection>

            <TermsCategoryWrapper>

                <h2>Terms</h2>


            </TermsCategoryWrapper>

        </TermsCategorySection>
    )
}

export default TermsCategory