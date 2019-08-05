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


interface Iprops {
    src: string;
    alt: string;
    price: string;
    productName: string;
}

const ProductItem: React.SFC<Iprops> = ({ src, alt, price, productName }) => {
    return (
        <ProductItemWrapper>
            <ProductImage src={src} alt={alt} />
            <ProductDetails>
                <ProductPrice price={price} />
                <ProductInfo productName={productName} />
            </ProductDetails>
        </ProductItemWrapper>
    )
}

export default ProductItem