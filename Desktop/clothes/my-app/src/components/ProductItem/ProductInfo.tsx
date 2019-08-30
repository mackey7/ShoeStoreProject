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


interface Iprops {
    productName: string;
    onMouseMove: any;
    isMove: boolean;

}

const ProductInfo: React.SFC<Iprops> = ({ productName, onMouseMove, isMove }) => {

    const conatiner = isMove ?
        <Icons>
            <i className="far fa-eye"></i>
            <i className="far fa-star"></i>
            <i className="far fa-share-square"></i>
            <i className="fas fa-shopping-cart"></i>
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