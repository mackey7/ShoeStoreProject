import React from 'react'
import Styled from 'styled-components'

const PostShortItemWrapper = Styled.section`
border:1px solid #9d9d9c;
padding:30px;
-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
margin:20px 0px;
box-sizing:border-box;
`
const H2 = Styled.h2`
font-weight:600;
`
const P = Styled.p`
padding:30px;
`
const MoreBtn = Styled.input`
float:right;
padding:5px 30px;
background:inherit;
border:2px solid #9d9d9c;(
font-weight:500;
cursor:pointer;
&:hover{
    background:#9d9d9c;
    border:1px solid #fff;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 5px 0px rgba0,0,0,0.75);
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75)
}
`
interface IProps {
    data: any
}

const PostShortItem: React.SFC<IProps> = ({ data }) => {

    return (
        <PostShortItemWrapper>

            <H2>{data.title}</H2>
            <P> {data.decs}</P>
            <MoreBtn type="button" value="More" />
        </PostShortItemWrapper>

    )
}

export default PostShortItem