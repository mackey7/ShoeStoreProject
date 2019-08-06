import React from 'react'
import Styled from 'styled-components'
import ProductItem from '../ProductItem/ProductItem'

const CategoryWrapper = Styled.section`

padding: 30px 20px;
background:#ebe7df;
`
const Category = Styled.section`
 margin:0 auto;
@media screen and (min-width: 600px) {
 width:80%; 

}
`
const CategoryHeader = Styled.div`
display:flex;
flex-direction:column;
@media screen and (min-width: 600px) {
  display:flex;
flex-direction:row;
justify-content:space-between;
}
`
const ProductsItems = Styled.div`
padding:40px 0px;

`
const Button = Styled.input`
background:inherit;
border:1px solid #bcb5a7;
padding:5px 20px;
color:#bcb5a7;
font-weight:700;
&:hover{
 color:#000;;   
 background:#bcb5a7;
 cursor: pointer;
}


`
interface IProps {
    title: string
}

const HomeCategory: React.SFC<IProps> = ({ title }) => {
    return (
        <CategoryWrapper>
            <Category>
                < CategoryHeader >
                    <h2> {title}</h2>

                    <Button type="button" value="Show All" />
                </CategoryHeader>

                <ProductsItems>
                    <ProductItem src="https://2.allegroimg.com/original/0c6d28/ce72656046488deb944b8f9a6912" alt="alt" price="145.99" productName="Duffalo" />

                </ProductsItems>

            </Category >

        </CategoryWrapper>
    )
}

export default HomeCategory