import React from 'react'
import Styled from 'styled-components'

const Image = Styled.figure`
width:300px;
height:230px;
position:relative;
`

const Icons = Styled.div`
position:absolute;
top:0;
left:0;
background:rgba(0, 0, 0, 0.4);
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
`

const Icon = Styled.i`
color:#fff;
height:50px;
width:50px;
font-size:30px;
cursor:pointer;
&:hover{
        color:#57c5a0;
        

    }
`


interface Iprops {
    src: string;
    alt: string;
    onMouseMove: any;
    isMove: boolean;
    addToCart: any;
    productId?: number;
}

const ProductImage: React.SFC<Iprops> = ({ src, alt, onMouseMove, isMove, addToCart, productId }) => {


    return (
        <Image onMouseEnter={onMouseMove} onMouseLeave={onMouseMove}>
            <img src={src} alt={alt} width="100%" height="100%" />
            {isMove ?
                <Icons>
                    <Icon className="far fa-star"></Icon>
                    <Icon className="fas fa-shopping-cart" onClick={() => addToCart(productId)} ></Icon>
                </Icons>
                :
                null}
        </Image>
    )
}

export default ProductImage