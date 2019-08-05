import React from 'react'
import Styled from 'styled-components'
import ProductImage from './ProductImage'
import ProductPrice from './ProductPrice'
import ProductInfo from './ProductInfo'
const ProductDetails = Styled.div``

const ProductItem: React.SFC = ({ }) => {
    return (
        <section>
            <ProductImage src="https://2.allegroimg.com/original/0c6d28/ce72656046488deb944b8f9a6912" alt="alt" />
            <ProductDetails>
                <ProductPrice price="145.99" />
                <ProductInfo productName="Duffalo delecto" />
            </ProductDetails>
        </section>
    )
}

export default ProductItem