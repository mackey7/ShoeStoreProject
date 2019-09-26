import React from 'react'
import Styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Figure = Styled.figure`
    width:100%;
    height:100%;
    img{
        display:block;
        max-width:200px;
        max-height:200px;
        padding:5px;
    }
    @media only screen and (min-width: 900px) {
        max-width:100px;
        max-height:100px;
        margin:5px;
}
`


interface IProps {
    src: string;
    alt: string;

}

const WidgetImage: React.SFC<IProps> = ({ src, alt }) => {
    return (
        <Figure>
            <ScrollAnimation animateIn='zoomInRight' animateOnce={true} >
                <img src={src} alt={alt} width="100%" height="100%" />
            </ScrollAnimation>
        </Figure>
    )
}

export default WidgetImage