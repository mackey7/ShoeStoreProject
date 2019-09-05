import React from 'react'
import Styled from 'styled-components';
import ProductItem from '../ProductItem/ProductItem'
import SortComponent from '../SortComponent/SortComponent'
import uuid from 'uuid'
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
    addToFavourite: any;
    addToCart: any;
}

const ProductsCategory: React.SFC<IProps> = ({ data, CategoryTitle, addToFavourite, addToCart }) => {
    const mapProducts = data.map((item: any) =>
        <ProductItem key={uuid.v4()} src={item.src} alt={item.alt} price={item.price} productName={item.name} addToFavourite={addToFavourite} addToCart={addToCart} productId={item.id} />
    )

    return (
        <ProductsCategoryWrapper>

            <H2> {CategoryTitle} </H2>

            <ProductsCategorySection>
                {mapProducts}
            </ProductsCategorySection>
        </ProductsCategoryWrapper >
    )
}

export default ProductsCategory