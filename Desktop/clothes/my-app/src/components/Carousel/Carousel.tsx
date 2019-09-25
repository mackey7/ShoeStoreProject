import React from 'react'
import Slide from './Slide'
import CarouselDots from './CarouselDots'

interface IProps {
    data: any;
    addToFavourite: any;
    addToCart: any;
    activeIndex: number;
    goToSlide: any;
}

const Carousel: React.SFC<IProps> = ({ data, addToFavourite, addToCart, activeIndex, goToSlide }) => {
    return (
        <header>
            <Slide data={data} addToFavourite={addToFavourite} addToCart={addToCart} activeIndex={activeIndex} />
            <CarouselDots data={data} activeIndex={activeIndex} goToSlide={goToSlide} />
        </header>
    )
}

export default Carousel