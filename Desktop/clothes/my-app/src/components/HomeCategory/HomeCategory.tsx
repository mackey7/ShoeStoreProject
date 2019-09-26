import React from 'react'
import Styled from 'styled-components'
import ProductItem from '../ProductItem/ProductItem'
import { Link } from 'react-router-dom'
import uuid from 'uuid'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
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
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
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
    align-items:center;
@media screen and (min-width: 900px) {
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
    width:70px;
    border:0;
    background:inherit;
    border:1px solid #bcb5a7;
    padding:5px 20px;
    text-decoration:none;
    font-weight:700;
    color:#bcb5a7;  
    margin-top:20px;
    &:hover{  
        background:#bcb5a7;
        cursor: pointer;
        color:#000; 
    }   
    @media screen and (min-width: 600px) {
        margin-top:0px
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
                    <ScrollAnimation animateIn='zoomInLeft' animateOnce={true} >
                        <h2> {title}</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='zoomInRight' animateOnce={true} >
                        <LINK to={RouteName}>Show All</LINK>
                    </ScrollAnimation>
                </CategoryHeader>
                <ProductsItems>
                    {products}
                </ProductsItems>
            </Category >
        </CategoryWrapper >
    )
}

export default HomeCategory