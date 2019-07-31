import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
padding:10px;
`

const Icon = styled.i`
font-size:24px;
`
const Span = styled.span`
background:#57c5a0;
border-radius:6px;
padding:2px;
font-size:20px;
text-align:center;
margin-left:5px;
`




const BasketSection: React.SFC = () => {
    return (
        <Section>

            <Icon className="fas fa-shopping-basket"></Icon>
            <Span> 0</Span>
        </Section>
    )
}

export default BasketSection