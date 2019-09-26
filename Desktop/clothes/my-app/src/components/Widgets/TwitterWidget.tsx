import React from 'react'
import WidgetTitle from './WidgetTitle'
import Styled from 'styled-components'
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const TwitterWidgetWrapper = Styled.section`
    width:100%;
    padding:0px ;
@media only screen and (min-width: 900px) {
    width:33%;
}
@media only screen and (min-width: 900px) {
    padding:0px 40px;
}
`
const TwitUser = Styled.span`
    color:#57c5a0;
`
const Post = styled.section`
    margin-bottom:10px;
`

const Time = styled.span`
    font-weight:600;
`

const TwitterWidget: React.SFC = () => {
    return (
        <TwitterWidgetWrapper>
            <WidgetTitle title="twitter widget" />
            <Post>
                <ScrollAnimation animateIn='zoomInLeft' animateOnce={true} >
                    <p>
                        <TwitUser>@ericfustero</TwitUser>
                        Why thank you. Your work looks awasome by the way!
                </p>
                    <Time> 19 days ago</Time>
                </ScrollAnimation>
            </Post>
            <Post>
                <ScrollAnimation animateIn='zoomInLeft' animateOnce={true} >
                    <p>
                        <TwitUser>@roymarvelous</TwitUser>
                        You can seek a refund through. TF if is it not as advertised - but it is :)
                </p>
                    <Time> 21 days ago</Time>
                </ScrollAnimation>
            </Post>

        </TwitterWidgetWrapper >
    )
}

export default TwitterWidget