import React from 'react'
import Styled from 'styled-components'

const Section = Styled.section`
display:flex;
margin-bottom:20px;

h2, p{

}
`


const DateWrapper = Styled.section`
background-color:#84d4b9;
margin-right:20px;
color:white;

`
interface IProps {
    data: any
}

const NewsItem: React.SFC<IProps> = ({ data }) => {
    return (
        <Section>
            <DateWrapper>
                {data.date}

            </DateWrapper>
            <div>
                <h2> {data.title} </h2>
                <p> {data.content} </p>
            </div>
        </Section>
    )
}

export default NewsItem