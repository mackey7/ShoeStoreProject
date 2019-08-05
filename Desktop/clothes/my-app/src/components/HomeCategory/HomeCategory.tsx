import React from 'react'
import Styled from 'styled-components'

const CategoryWrapper = Styled.section`
padding: 0px 20px;
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
const ProductsItems = Styled.div``
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


                </ProductsItems>

            </Category >

        </CategoryWrapper>
    )
}

export default HomeCategory