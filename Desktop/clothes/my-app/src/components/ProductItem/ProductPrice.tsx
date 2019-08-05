import React from 'react'
import Styled from 'styled-components'

const PriceWrapper = Styled.span`
color:#fff;
font-weight:600;
background:#57c5a0;
padding:30px 10px;
margin-left:15px;
margin-top:-25px;
margin-right:20px;
z-index:999;

`

interface IProps {
    price: string
}


const ProductPrice: React.SFC<IProps> = ({ price }) => {
    return (
        <PriceWrapper>
            $ {price}

        </PriceWrapper>
    )
}

export default ProductPrice