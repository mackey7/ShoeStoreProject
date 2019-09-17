import React from 'react'
import Slide from './Slide'
import CarouselDots from './CarouselDots'
import Styled from 'styled-components'

const CarouselWrpper = Styled.header`

`
interface IProps {
    data: any;
    addToFavourite: any;
    addToCart: any;
    activeIndex: number;
    goToSlide: any;
}

const Carousel: React.SFC<IProps> = ({ data, addToFavourite, addToCart, activeIndex, goToSlide }) => {
    return (
        <CarouselWrpper>
            <Slide data={data} addToFavourite={addToFavourite} addToCart={addToCart} activeIndex={activeIndex} />
            <CarouselDots data={data} activeIndex={activeIndex} goToSlide={goToSlide} />
        </CarouselWrpper>
    )
}

export default Carousel