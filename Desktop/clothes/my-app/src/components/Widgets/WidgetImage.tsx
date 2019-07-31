import React from 'react'

interface IProps {
    src?: string;
    alt?: string;
    height?: string;
    width?: string;
}

const WidgetImage: React.SFC<IProps> = ({ src, alt, height, width }) => {
    return (
        <figure>
            <img src={src} alt={alt} height={height} width={width} />
        </figure>
    )
}

export default WidgetImage