import React from 'react';
import styled from 'styled-components'

const ItemWrapper = styled.section`
border:2px solid black;
padding:0px 20px 10px 20px;
margin-top:20px;
`
const ItemHeader = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`

interface IProps {
    data: any
}

const PostDetailsCommentComponent: React.FC<IProps> = ({ data }) => {
    return (
        < ItemWrapper >
            <ItemHeader >
                <h4> {data.name} </h4>
                <a href={data.email}>{data.email}</a>
            </ItemHeader>
            <div >
                {data.body}
            </div>
        </ItemWrapper >
    )
}

export default PostDetailsCommentComponent