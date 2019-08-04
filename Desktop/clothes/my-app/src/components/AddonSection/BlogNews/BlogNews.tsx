import React from 'react'
import NewsItem from './NewsItem'
import Styled from 'styled-components'

const Section = Styled.section`
background:#dfdbd4;
padding:20px;
width:100%;
h2{
margin-bottom:15px;
color:#535250;
}
@media only screen and (min-width: 900px) {
    width:40%
 
}
`
interface IProps {
    data: Array<Object>,
}

const BlogNews: React.SFC<IProps> = ({ data }) => {
    return (
        <Section>
            <h2> Blog News </h2>
            {data.map(item => <NewsItem data={item} />)}

        </Section>
    )
}

export default BlogNews