import React from 'react'
import Dot from './Dot'
import Styled from 'styled-components'



const CarouselDotsWrapper = Styled.section`
background:#2e2e2e;
`
const CarouselDotsSection = Styled.section`
margin:0 auto;
width:90%;
display:flex;
justify-content:space-between;
padding-bottom:4px 0px 30px 0px;

@media only screen and (min-width: 300px) {
 
}
@media only screen and (min-width: 600px) {
 
}
@media only screen and (min-width: 900px) {
width:80%;

}
`

interface IProps {
    data: any;
    activeIndex: number;
    goToSlide: any;
}
const CarouselDots: React.SFC<IProps> = ({ data, activeIndex, goToSlide }) => {
    return (
        <CarouselDotsWrapper>
            <CarouselDotsSection>
                {data.slice(3, 7).map((item: any, index: any) =>

                    <Dot DotTitle={item.name} DotDesc={item.price} activeIndex={activeIndex} slideNumber={index} goToSlide={goToSlide} />

                )}


            </CarouselDotsSection>
        </CarouselDotsWrapper>
    )
}

export default CarouselDots