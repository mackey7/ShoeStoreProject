import React from 'react'
import Styled from 'styled-components'

const BlogCategorySection = Styled.section`
background:#ebe7df;
padding:20px 0px;
`
const BlogCategoryWrapper = Styled.section`
width:80%;
margin:auto;
`


const BlogCategory: React.SFC = () => {

    return (
        <BlogCategorySection>
            <BlogCategoryWrapper>
                BlogCategory
            </BlogCategoryWrapper>
        </BlogCategorySection>

    )
}

export default BlogCategory