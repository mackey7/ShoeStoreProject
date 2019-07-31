import React from 'react'
import Slide from './Slide'
import CarouselDots from './CarouselDots'



const Carousel: React.SFC = () => {
    return (
        <React.Fragment>
            <Slide />
            <CarouselDots />
        </React.Fragment>
    )
}

export default Carousel