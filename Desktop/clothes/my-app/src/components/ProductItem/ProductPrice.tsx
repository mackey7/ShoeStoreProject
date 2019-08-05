import React from 'react'
import Styled from 'styled-components'

const PriceWrapper = Styled.span``

interface IProps {
    price: string
}


const ProductPrice: React.SFC<IProps> = ({ price }) => {
    return (
        <PriceWrapper>
            $ {price}

        </PriceWrapper>
    )
}

export default ProductPrice