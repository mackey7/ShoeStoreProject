import React from 'react'
import Styled from 'styled-components'

const Image = Styled.figure`
padding:20px 10px;
position:realtive;
img{
width:100%;
height:200px;

}
figcaption{
position:absolute;
top:50%;
text-align: center; 
max-width:100%;
color:#fff;
background:rgb(0.00,0.00,0.00, 0.5);
padding:10px 20px;
text-transform:uppercase;
font-weight:400;
}
}
`

interface IProps {
    alt: string;
    src: string;
    name: string;
}
const CategoryItem: React.SFC<IProps> = ({ alt, src, name }) => {
    return (
        <Image>
            <img src={src}
                alt={alt} />
            <figcaption>{name}</figcaption>
        </Image>
    )
}

export default CategoryItem