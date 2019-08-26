import React from 'react'
import Styled from 'styled-components';
import ProductItem from '../ProductItem/ProductItem'

const ProductsCategoryWrapper = Styled.section`
    width:90%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
@media screen and (min-width: 600px) {
    width:80%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}
`

interface IProps {
    data: any;
}

const ProductsCategory: React.SFC<IProps> = ({ data }) => {
    const mapProducts = data.map((item: any) =>


        <ProductItem key={item.id} src={item.src} alt={item.alt} price={item.price} productName={item.name}></ProductItem>

    )

    return (
        <ProductsCategoryWrapper>
            {mapProducts}
        </ProductsCategoryWrapper>
    )
}

export default ProductsCategory