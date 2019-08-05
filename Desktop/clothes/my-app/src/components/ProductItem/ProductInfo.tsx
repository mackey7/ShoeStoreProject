import React from 'react'
import Styled from 'styled-components'

const ProductInfoWrapper = Styled.div`
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




interface Iprops {
    productName: string;
}

const ProductInfo: React.SFC<Iprops> = ({ productName }) => {
    return (
        <ProductInfoWrapper>
            <p>  {productName}  </p>
            <Icons>
                <i className="far fa-eye"></i>
                <i className="far fa-star"></i>
                <i className="far fa-share-square"></i>
                <i className="fas fa-shopping-cart"></i>
            </Icons>
        </ProductInfoWrapper>
    )
}

export default ProductInfo