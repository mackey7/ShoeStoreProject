import React from 'react'
import Styled from 'styled-components'
import ProductImage from './ProductImage'
import ProductPrice from './ProductPrice'
import ProductInfo from './ProductInfo'
const ProductDetails = Styled.div`
display:flex;
border-top:1px solid black;
`
const ProductItemWrapper = Styled.section`
background:#fff;
width:300px;

`
const ProductItem: React.SFC = ({ }) => {
    return (
        <ProductItemWrapper>
            <ProductImage src="https://2.allegroimg.com/original/0c6d28/ce72656046488deb944b8f9a6912" alt="alt" />
            <ProductDetails>
                <ProductPrice price="145.99" />
                <ProductInfo productName="Duffalo" />
            </ProductDetails>
        </ProductItemWrapper>
    )
}

export default ProductItem