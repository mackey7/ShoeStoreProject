import React from 'react'
import Styled from 'styled-components'

const CategoryWrapper = Styled.section`

background:#ebe7df;
`
const Category = Styled.section``
const CategoryHeader = Styled.div``
const ProductsItems = Styled.div``

interface IProps {
    title: string
}

const HomeCategory: React.SFC<IProps> = ({ title }) => {
    return (
        <CategoryWrapper>
            <Category>
                < CategoryHeader >
                    <h2>
                        {title}
                    </h2>

                    <input type="button" value="Show All" />
                </CategoryHeader>

                <ProductsItems>


                </ProductsItems>

            </Category >

        </CategoryWrapper>
    )
}

export default HomeCategory