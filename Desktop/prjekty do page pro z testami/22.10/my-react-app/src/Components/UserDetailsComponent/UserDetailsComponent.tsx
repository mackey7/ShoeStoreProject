import React from 'react';
import styled from 'styled-components'
import UserDetailsItemComponent from '../UserDetailsItemComponent/UserDetailsItemComponent';
import { Loaders } from '../../Helpers/loaders'
import { Center } from '../../Helpers/center'

const PostsWrapper = styled.section`
max-width:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
margin:5%;
`

interface IProps {
    data: any;
    deleteItem: any;
    postId: any;
}

const UserDetailsComponent: React.FC<IProps> = ({ data, deleteItem, postId }) => {
    const posts = data;
    if (posts === undefined) {
        return (
            <Center>
                <Loaders>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Loaders>
                <span>Loading</span>
            </Center>)
    } else {
        const post = posts.map((item: any) =>
            <UserDetailsItemComponent key={item.id} PostTitle={item.title} deleteItem={deleteItem} id={item.id} postID={item.id} postId={postId} />
        )
        return (
            <PostsWrapper>
                {post ? post : "NO POSTS"}
            </PostsWrapper>
        )
    }
}

export default UserDetailsComponent