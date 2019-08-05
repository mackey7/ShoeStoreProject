import React from 'react'
import Styled from 'styled-components'
import ProductImage from './ProductImage'
import ProductPrice from './ProductPrice'
import ProductInfo from './ProductInfo'
const ProductDetails = Styled.div``

const ProductItem: React.SFC = ({ }) => {
    return (
        <section>
            <ProductImage />
            <ProductDetails>
                <ProductPrice />
                <ProductInfo />
            </ProductDetails>
        </section>
    )
}

export default ProductItem