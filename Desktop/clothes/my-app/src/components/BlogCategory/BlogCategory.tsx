import React from 'react'
import Styled from 'styled-components'
import PostShortItem from './PostShortItem'
import uuid from 'uuid'

const BlogCategorySection = Styled.section`
background:#ebe7df;
margin:0;
`
const BlogCategoryWrapper = Styled.section`
width:80%;
margin:auto;
padding:20px 0px;
`

interface IProps {
    data?: any
}

const BlogCategory: React.SFC<IProps> = ({ data }) => {

    return (
        <BlogCategorySection>
            <BlogCategoryWrapper>
                {data.map((item: any) =>
                    <PostShortItem key={uuid.v4()} data={item} />

                )}


            </BlogCategoryWrapper>
        </BlogCategorySection>
    )
}

export default BlogCategory