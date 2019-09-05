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
}

const Carousel: React.SFC<IProps> = ({ data, addToFavourite, addToCart }) => {
    return (
        <CarouselWrpper>
            <Slide data={data} addToFavourite={addToFavourite} addToCart={addToCart} />
            <CarouselDots data={data} />
        </CarouselWrpper>
    )
}

export default Carousel