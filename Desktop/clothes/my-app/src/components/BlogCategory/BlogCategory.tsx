import React from 'react'
import Styled from 'styled-components'
import PostShortItem from './PostShortItem'

const BlogCategorySection = Styled.section`
background:#ebe7df;
`
const BlogCategoryWrapper = Styled.section`
width:80%;
margin:auto;
`



const BlogCategory: React.SFC = () => {

    return (
        <BlogCategorySection>
            <BlogCategoryWrapper>
                <PostShortItem />
                <PostShortItem />
            </BlogCategoryWrapper>
        </BlogCategorySection>
    )
}

export default BlogCategory