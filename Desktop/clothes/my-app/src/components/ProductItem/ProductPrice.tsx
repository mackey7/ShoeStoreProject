import React from 'react'
import Styled from 'styled-components'

const PriceWrapper = Styled.div`
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:600;
    background:#57c5a0;
    padding:20px 20px;
    margin-left:15px;
    margin-top:-25px;
    margin-right:20px;
    z-index:2;
`

interface IProps {
    price: string;

}


const ProductPrice: React.SFC<IProps> = ({ price }) => {
    return (
        <PriceWrapper >
            <span> ${price} </span>
        </PriceWrapper>
    )
}

export default ProductPrice