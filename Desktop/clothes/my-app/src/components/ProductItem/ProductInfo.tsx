import React from 'react'
import Styled from 'styled-components'

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
    productId?: number;
    addToCart: any;

}

const ProductInfo: React.SFC<Iprops> = ({ productName, onMouseMove, isMove, productId, addToCart }) => {

    const conatiner = isMove ?
        <Icons>

            <Icon className="far fa-eye"></Icon>
            <Icon className="far fa-star"></Icon>
            <Icon className="far fa-share-square"></Icon>
            <Icon className="fas fa-shopping-cart" onClick={() => addToCart(productId)} ></Icon>
        </Icons>
        :
        <P>  {productName}  </P>

    return (
        < ProductInfoWrapper onMouseEnter={onMouseMove} onMouseLeave={onMouseMove} >
            {conatiner}
        </ProductInfoWrapper >
    )
}

export default ProductInfo