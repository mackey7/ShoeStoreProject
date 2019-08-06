import React from 'react'
import Slide from './Slide'
import CarouselDots from './CarouselDots'
import Styled from 'styled-components'

const CarouselWrpper = Styled.header`

`


const Carousel: React.SFC = () => {
    return (
        <CarouselWrpper>
            <Slide />
            <CarouselDots />
        </CarouselWrpper>
    )
}

export default Carousel