import React from 'react'
import Styled from 'styled-components'

const ContentWrapper = Styled.section`

width:80%;


@media only screen and (min-width: 300px) {
 
}
@media only screen and (min-width: 600px) {
 
}
@media only screen and (min-width: 900px) {
    display:flex;
 flex-direction:column;
padding-left:30px;
justify-content:center;
 width:50%;
}
`
interface Iprops {
    price: string;
    title: string;
    description: string;
}


const Content: React.SFC<Iprops> = ({ price, title, description }) => {
    return (
        <ContentWrapper>
            <span>{price}</span>
            <h2>{title}</h2>
            <p>{description} </p>
            <div>
                <i className="far fa-eye"></i>
                <i className="far fa-star"></i>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </ContentWrapper>
    )
}

export default Content