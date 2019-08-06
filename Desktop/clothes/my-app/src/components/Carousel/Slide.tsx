import React from 'react'
import Image from './Image'
import Content from './Content'
import Styled from 'styled-components'

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

const imgUrl = "https://i1.adis.ws/i/boohooamplience/agg94538_camel_xl?$product_page_main_magic_zoom$"

const Slide: React.SFC = () => {
    return (
        <Wrapper>
            <SlideWrapper>
                <Image src={imgUrl} alt="skirt" />
                <Content price="$145.99" title="Pink Shoes 2013 Collection" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellendus cum aperiam eos, quibusdam consequatur ." />
            </SlideWrapper>,
        </Wrapper>
    )
}

export default Slide