import React from 'react'
import styled from 'styled-components'

const PostWrapper = styled.article`
    width:80%;
    margin:0 auto;
 `
interface IProps {
    title: any;
    post: any;

}

const PostDetailsContentComponent: React.FC<IProps> = ({ title, post }) => {
    return (
        <PostWrapper>
            <div >
                <h3>{title}</h3>
                <p>{post}</p>
            </div>
        </PostWrapper >
    )
}

export default PostDetailsContentComponent