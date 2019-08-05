import React from 'react'
interface IProps {
    alt: string;
    src: string;
    name: string;
}
const CategoryItem: React.SFC<IProps> = ({ alt, src, name }) => {
    return (
        <figure>
            <img src={src}
                alt={alt} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default CategoryItem