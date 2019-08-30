import React from 'react'
import Styled from 'styled-components';
import ProductItem from '../ProductItem/ProductItem'

const ProductsCategorySection = Styled.section`
    width:90%;
    margin:0 auto;
    display:flex;
     flex-wrap:wrap;
    flex-direction:column;
@media screen and (min-width: 600px) {
    width:80%;
    display:flex;
    flex-direction:row;
   
    justify-content:space-between;
}
`

const ProductsCategoryWrapper = Styled.section`

background:#ebe7df;
`

const H2 = Styled.h2`
text-align:center;
padding:40px;
font-size:40px;
`

interface IProps {
    data: any;
    CategoryTitle: string;
}

const ProductsCategory: React.SFC<IProps> = ({ data, CategoryTitle }) => {
    const mapProducts = data.map((item: any) =>
        <ProductItem key={item.id} src={item.src} alt={item.alt} price={item.price} productName={item.name}></ProductItem>
    )

    return (
        <ProductsCategoryWrapper>
            <H2> {CategoryTitle} </H2>
            <ProductsCategorySection>
                {mapProducts}
            </ProductsCategorySection>
        </ProductsCategoryWrapper>
    )
}

export default ProductsCategory