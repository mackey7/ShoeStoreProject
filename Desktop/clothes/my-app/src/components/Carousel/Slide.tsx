import React from 'react'
import Image from './Image'
import Content from './Content'


const imgUrl = "https://i1.adis.ws/i/boohooamplience/agg94538_camel_xl?$product_page_main_magic_zoom$"

const Slide: React.SFC = () => {
    return (

        <section>
            <Image src={imgUrl} alt="skirt" />
            <Content price="$145.99" title="Pink Shoes 2013 Collection" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellendus cum aperiam eos, quibusdam consequatur ." />
        </section>
    )
}

export default Slide