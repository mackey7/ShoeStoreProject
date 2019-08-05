import React from 'react'
import Styled from 'styled-components'

const Image = Styled.figure`
width:100%;
height:100%;
`

interface Iprops {
    src: string;
    alt: string;
}

const ProductImage: React.SFC<Iprops> = ({ src, alt }) => {
    return (
        <Image>
            <img src={src} alt={alt} width="100%" height="100%" />
        </Image>
    )
}

export default ProductImage