import React from 'react'
import Styled from 'styled-components'

const Figure = Styled.figure`
    width:100%;
    height:100%;
    img{
        display:block;
        max-width:200px;
        max-height:200px;
        padding:5px;
    }
    @media only screen and (min-width: 900px) {
        max-width:100px;
        max-height:100px;
        margin:5px;
}
`


interface IProps {
    src: string;
    alt: string;

}

const WidgetImage: React.SFC<IProps> = ({ src, alt }) => {
    return (
        <Figure>
            <img src={src} alt={alt} width="100%" height="100%" />
        </Figure>
    )
}

export default WidgetImage