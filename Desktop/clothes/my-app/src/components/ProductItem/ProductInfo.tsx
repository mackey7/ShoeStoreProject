import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const ProductInfoWrapper = Styled.div`
    height:60px;
    width:200px;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Icons = Styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    i{
        color:#c0c0c0;
        cursor:pointer;
        margin:4px;
        &:hover{
            color:#57c5a0;
        }
    }
`

const P = Styled.p`
    font-weight:700;
`
const Icon = Styled.i`
    font-size:25px;
`

interface Iprops {
    productName: string;
    onMouseMove: any;
    isMove: boolean;
    productId: number;
    addToCart: any;
    addToFavourite: any;
}

const ProductInfo: React.SFC<Iprops> = ({ productName, onMouseMove, isMove, productId, addToCart, addToFavourite }) => {

    const conatiner = isMove ?
        <Icons>
            <ScrollAnimation animateIn="zoomInLeft" duration={1}>
                <Link to={`/product/${productId}`}>
                    <Icon className="far fa-eye"> </Icon>
                </Link>
            </ScrollAnimation>
            <ScrollAnimation animateIn="zoomInUp" >
                <Icon className="far fa-star" onClick={() => addToFavourite(productId)}></Icon>
            </ScrollAnimation>
            <ScrollAnimation animateIn="zoomInRight">
                <Icon className="fas fa-shopping-cart" onClick={() => addToCart(productId)} ></Icon>
            </ScrollAnimation>
        </Icons >
        :
        <P>  {productName}  </P>

    return (
        < ProductInfoWrapper onMouseEnter={() => onMouseMove(true)} onMouseLeave={() => onMouseMove(false)} >
            {conatiner}
        </ProductInfoWrapper >
    )
}

export default ProductInfo