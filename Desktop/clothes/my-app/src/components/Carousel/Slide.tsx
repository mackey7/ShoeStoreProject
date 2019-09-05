import React from 'react'
import Image from './Image'
import Content from './Content'
import Styled from 'styled-components'
import uuid from 'uuid';

const Wrapper = Styled.div`
background:#e9e8e3;
`


const SlideWrapper = Styled.div`
margin:0 auto;
width:80%;
display:flex;
flex-direction:column;

@media only screen and (min-width: 300px) {
 
}
@media only screen and (min-width: 600px) {
 
}
@media only screen and (min-width: 900px) {
 flex-direction:row;
}
`

interface IProps {
    data: any;
    addToFavourite: any;
    addToCart: any;

}



const Slide: React.SFC<IProps> = ({ data, addToFavourite, addToCart }) => {
    return (
        <Wrapper>
            {data.slice(0, 1).map((item: any) =>
                <SlideWrapper key={uuid.v4()}>
                    <Image src={item.src} alt={item.name} />
                    <Content price={item.price} title={item.name} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellendus cum aperiam eos, quibusdam consequatur ." addToFavourite={addToFavourite} addToCart={addToCart} productID={item.id} />
                </SlideWrapper>

            )}

        </Wrapper>
    )
}

export default Slide