import React from 'react'
import Styled from 'styled-components'
import "animate.css/animate.min.css";
import { Animated } from "react-animated-css";
const DotWrapper = Styled.div`
    margin-left:2px;
    width:100%;
    cursor:pointer;
`

const DotInfo = Styled.div`
    display:none;
    color:#fff;
 
@media only screen and (min-width: 600px) {
    display:flex;
    flex-direction:column;
    text-align:center;
    padding:5px 10px;
}
`
const SlideWrapper = Styled.div`
    height:15px;
    width:100%;
    background:#000
    display:flex;

@media only screen and (min-width: 600px) {
    height:10px;
    width:100%;
    border-radius:0%;
    background:#000
    display:flex;
    margin:5px 10px;
}
`
const Slide = Styled.div`
    align-self:center;
    margin:0 auto;
    height:10px;
    width:90%;
    background:#57c5a0;

@media only screen and (min-width: 600px) {
    align-self:center;
    margin:0 auto;
    height:5px;
    width:95%;
    border-radius:0;
    background:#57c5a0;
}
`

interface Iprops {
    DotTitle: string;
    DotDesc: string;
    activeIndex: number;
    slideNumber: number;
    goToSlide: any;
}

const Dot: React.SFC<Iprops> = ({ DotTitle, DotDesc, activeIndex, slideNumber, goToSlide }) => {
    return (

        < DotWrapper onClick={() => goToSlide(slideNumber)} >
            <Animated animationIn="fadeIn" animationOut="swing" isVisible={activeIndex == slideNumber} animationInDuration={1000} animationOutDuration={0} >
                <SlideWrapper>
                    {activeIndex == slideNumber ? <Slide></Slide> : null}
                </SlideWrapper>
                <DotInfo>
                    <p>{DotTitle}</p>
                    <p>{DotDesc}</p>
                </DotInfo>
            </Animated>
        </DotWrapper >

    )
}

export default Dot