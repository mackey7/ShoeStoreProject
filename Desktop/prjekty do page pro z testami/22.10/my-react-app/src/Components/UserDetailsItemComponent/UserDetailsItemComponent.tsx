import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Icon = styled.i`
    color:#075394;
    cursor:pointer;
    margin-right:10px;
    &:hover{
        color:blue;
    }
`

const PostWrapper = styled.section`
    max-width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:2px solid black;
    padding:10px 20px;
    margin-bottom:20px;
`
const TitleWrapper = styled.p`
    margin-left:20px;
    font-weight:700;
`

const LeftItem = styled.div`
    display:flex;
    align-items:center;
    width:100%;
`
const IconLink = styled(Link)`
    color:#075394;
    cursor:pointer;
    text-decoration:none;
    margin-right:10px;
    &:hover{
        color:blue;
    }
`

interface IProps {
    deleteItem: any;
    postID: any;
    PostTitle: string;
    postId: any;
    id: any;

}

const UserDetailsItemComponent: React.FC<IProps> = ({ deleteItem, postID, PostTitle, id, postId }) => {
    const handleDelete = () => {
        deleteItem(postID)
    }

    return (
        <PostWrapper>
            <LeftItem>
                <Icon onClick={handleDelete} className="far fa-trash-alt fa-2x"></Icon>
                <TitleWrapper>{PostTitle} </TitleWrapper>
            </LeftItem>
            <IconLink to={`/user/${postId}/${id}`} className="fas fa-chevron-right fa-2x" ></IconLink>
        </PostWrapper>
    )
}

export default UserDetailsItemComponent