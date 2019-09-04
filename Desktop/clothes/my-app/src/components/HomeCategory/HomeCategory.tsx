import React from 'react'
import Styled from 'styled-components'
import ProductItem from '../ProductItem/ProductItem'
import { Link } from 'react-router-dom'
import uuid from 'uuid'

const CategoryWrapper = Styled.section`
padding: 30px 20px;
background:#ebe7df;
`
const Category = Styled.section`
 margin:0 auto;
@media screen and (min-width: 600px) {
 width:80%; 
}
`
const CategoryHeader = Styled.div`
display:flex;
flex-direction:column;
@media screen and (min-width: 600px) {
  display:flex;
flex-direction:row;
justify-content:space-between;
}
`
const ProductsItems = Styled.div`
padding:40px 0px;
  display:flex;
flex-direction:column;
justify-content:space-between;
@media screen and (min-width: 600px) {
  display:flex;
flex-direction:row;
justify-content:space-between;
}
`
const EmptyArray = Styled.p`
font-size:50px;
text-align:center;
`
const LINK = Styled(Link)`
border:0;
background:inherit;
border:1px solid #bcb5a7;
padding:5px 20px;
text-decoration:none;
font-weight:700;
 color:#bcb5a7;  
&:hover{  
 background:#bcb5a7;
 cursor: pointer;
 color:#000;
}
`



interface IProps {
    title: string,
    data?: any;
    RouteName: string,
    addToCart: any;
    addToFavourite: any;

}

const HomeCategory: React.SFC<IProps> = ({ title, data, RouteName, addToCart, addToFavourite }) => {
    const products =
        data.length > 0 ?
            data.slice(0, 3).map((item: any) =>
                <ProductItem key={uuid.v4()} src={item.src} alt={item.alt} price={item.price} productName={item.name} addToCart={addToCart} productId={item.id} addToFavourite={addToFavourite} />
            )
            :

            <EmptyArray> No products</EmptyArray>;



    return (
        <CategoryWrapper>
            <Category>
                < CategoryHeader >
                    <h2> {title}</h2>
                    <LINK to={RouteName}>Show All</LINK>
                </CategoryHeader>

                <ProductsItems>
                    {products}
                </ProductsItems>

            </Category >

        </CategoryWrapper >
    )
}

export default HomeCategory