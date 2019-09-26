import React from 'react'
import NewsItem from './NewsItem'
import Styled from 'styled-components'
import uuid from 'uuid';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const Section = Styled.section`
background: #dfdbd4;
padding: 20px;
max - width: 100 %;
margin: 10px;
h2{
    margin - bottom: 15px;
    color: #535250;
}
@media only screen and(min - width: 900px) {
    width: 40 %
}
`
interface IProps {
    data: Array<Object>,
}

const BlogNews: React.SFC<IProps> = ({ data }) => {
    const MapData = data.map(item => <NewsItem key={uuid.v4()} data={item} />)
    return (
        <Section>
            <ScrollAnimation animateIn='zoomInRight' animateOnce={true} >
                <h2> Blog News </h2>
            </ScrollAnimation>
            {MapData}

        </Section>
    )
}

export default BlogNews