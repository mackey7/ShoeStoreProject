import React from 'react'

interface IProps {
    src: string;
    alt: string;
}

const Image: React.SFC<IProps> = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} width="300" />
    )
}

export default Image