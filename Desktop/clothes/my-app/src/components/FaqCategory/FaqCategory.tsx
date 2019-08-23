import React from 'react'
import Styled from 'styled-components'

const FaqCategorySection = Styled.section`
background: #ebe7df;
padding:40px 0px;
`

const FaqCategoryWrapper = Styled.div`
width:80%;
margin:auto;
background: #f5f2ec;

`

const FaqCategory: React.SFC = () => {

    return (
        <FaqCategorySection>

            <FaqCategoryWrapper>

                <h2>FAQ</h2>


            </FaqCategoryWrapper>

        </FaqCategorySection>
    )
}

export default FaqCategory