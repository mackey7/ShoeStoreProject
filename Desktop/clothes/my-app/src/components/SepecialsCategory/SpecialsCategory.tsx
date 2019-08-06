import React from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.section`
background:#242424;
`
const Section = Styled.section`
width:90%;
margin:0 auto;


@media only screen and (min-width: 600px) {
  display:flex;
  flex-direction:row;
  width:80%;
}

`

import CategoryItem from './CategoryItem'
const SpecialsCategory: React.SFC = () => {
    return (
        <Wrapper>
            <Section >
                <CategoryItem alt="alt" src="https://m.media-amazon.com/images/G/01/6pm/landing/2019/Shoes/June/Mens_Boat_Shoes._CB442712240_.jpg" name="on sale" />
                <CategoryItem alt="alt" src="https://m.media-amazon.com/images/G/01/6pm/landing/2019/Shoes/June/Mens_Boat_Shoes._CB442712240_.jpg" name="on sale" />
                <CategoryItem alt="alt" src="https://m.media-amazon.com/images/G/01/6pm/landing/2019/Shoes/June/Mens_Boat_Shoes._CB442712240_.jpg" name="on sale" />
            </Section >
        </Wrapper>
    )
}

export default SpecialsCategory