import React from 'react'
import Styled from 'styled-components'
const Figure = Styled.figure`
padding:5px;
`


interface IProps {
    src: string;
    alt: string;
    height: string;
    width: string;
}

const WidgetImage: React.SFC<IProps> = ({ src, alt, height, width }) => {
    return (
        <Figure>
            <img src={src} alt={alt} height={height} width={width} />
        </Figure>
    )
}

export default WidgetImage