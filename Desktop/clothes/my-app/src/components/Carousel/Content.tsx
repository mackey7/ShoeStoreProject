import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContentWrapper = Styled.section`
    width:90%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-content:center;
    padding:20px 0px;

@media only screen and (min-width: 900px) {
    display:flex;
    flex-direction:column;
    padding: 0px 0px 0px 30px;
    justify-content:center;
    width:50%;
}
`
const PriceBox = Styled.span`
    background:#57c5a0;
    padding:20px;
    width:100%;
    color:#fff;
    font-weight:600;
    text-align:center;
    font-size:28px;
`
const ProductTitle = Styled.h2`
    font-weight:600;
    font-size:28px;
    padding:20px 20px 20px 0px;
    text-align:center;
`

const Description = Styled.p`
    font-weight:400;
    font-size:20px;
    padding:20px 20px 20px 0px;
    text-align:center;
`

const Icon = Styled.i`
    padding:10px;
    background:#f9f9f8;
    color:#757574;
    cursor:pointer;
    margin:2px;
    font-size:30px;
    &:hover{
        color:#57c5a0;
    }
`


interface Iprops {
    price: string;
    title: string;
    description: string;
    productID: number;
    addToCart: any;
    addToFavourite: any;


}


const Content: React.SFC<Iprops> = ({ price, title, description, productID, addToCart, addToFavourite }) => {
    return (
        <ContentWrapper>
            <PriceBox>{price}$</PriceBox>
            <ProductTitle>{title}</ProductTitle>
            <Description>{description} </Description>
            <div>
                <Link to={`/product/${productID}`}>
                    <Icon className="far fa-eye"> </Icon>
                </Link>
                <Icon className="far fa-star" onClick={() => addToFavourite(productID)}></Icon>
                <Icon className="fas fa-shopping-cart" onClick={() => addToCart(productID)}></Icon>
            </div>
        </ContentWrapper >
    )
}

export default Content