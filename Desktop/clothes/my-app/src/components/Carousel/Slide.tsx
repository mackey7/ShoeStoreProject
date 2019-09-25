import React from 'react'
import Image from './Image'
import Content from './Content'
import Styled from 'styled-components'
import uuid from 'uuid';

const Wrapper = Styled.div`
    background:#e9e8e3;
    min-width:100%;
`

const SlideWrapper: any = Styled.div`
    margin:0 auto;
    width:80%;
    display:${(props: any) => (props.isDisplay ? "flex" : "none")};
    flex-direction:column;

@media only screen and (min-width: 900px) {
    flex-direction:row;
}
`
interface IProps {
    data: any;
    addToFavourite: any;
    addToCart: any;
    activeIndex: number;
    isDisplay?: boolean;
}


const Slide: React.SFC<IProps> = ({ data, addToFavourite, addToCart, activeIndex }) => {
    const MapDat = data.slice(3, 7).map((item: any, index: number) =>
        <SlideWrapper key={uuid.v4()} isDisplay={index == activeIndex} >
            <Image src={item.src} alt={item.name} />
            <Content price={item.price} title={item.name} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellendus cum aperiam eos, quibusdam consequatur ." addToFavourite={addToFavourite} addToCart={addToCart} productID={item.id} />
        </SlideWrapper>
    )

    return (
        <Wrapper>
            {MapDat}
        </Wrapper>
    )
}

export default Slide