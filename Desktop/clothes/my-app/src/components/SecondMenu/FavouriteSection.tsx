import React from 'react'

import styled from 'styled-components'

const Section = styled.div`
padding:10px;
`
const Icon = styled.i`
font-size:24px;
`
const Span = styled.span`
background:#efefef;
border-radius:6px;
padding:2px;
font-size:20px;
text-align:center;
`




const FavouriteSection: React.SFC = () => {
    return (
        <Section>
            <Icon className="far fa-star"></Icon>
            <Span> 30</Span>
        </Section>
    )
}

export default FavouriteSection