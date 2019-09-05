import React from 'react'
import Styled from 'styled-components'

const ImageProduct = Styled.img`
height:500px;
width:100%;


@media only screen and (min-width: 300px) {
 
}
@media only screen and (min-width: 600px) {
 
}
@media only screen and (min-width: 900px) {
 flex-direction:row;
 width:50%;
}
`
interface IProps {
    src: string;
    alt: string;
}

const Image: React.SFC<IProps> = ({ src, alt }) => {
    return (
        <ImageProduct src={src} alt={alt} />
    )
}

export default Image