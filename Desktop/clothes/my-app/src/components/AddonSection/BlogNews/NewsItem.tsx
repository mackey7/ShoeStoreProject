import React from 'react'
import Styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Section = Styled.section`
    display:flex;
    margin-bottom:20px;
    align-items:center;
`
const DateWrapper = Styled.section`
    background-color:#84d4b9;
    margin-right:20px;
    color:white;
    padding:20px;
    font-weight:600;
    font-size:25px;
`
interface IProps {
    data: any
}

const NewsItem: React.SFC<IProps> = ({ data }) => {
    return (
        <Section>
            <ScrollAnimation animateIn='zoomInRight' animateOnce={true} >
                <DateWrapper>
                    {data.date}

                </DateWrapper>
            </ScrollAnimation>
            <div>
                <ScrollAnimation animateIn='zoomInRight' animateOnce={true} >
                    <h2> {data.title} </h2>
                    <p> {data.content} </p>
                </ScrollAnimation>
            </div>
        </Section>
    )
}

export default NewsItem