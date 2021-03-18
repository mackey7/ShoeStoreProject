import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import AddCommentComponent from '../AddCommentComponent/AddCommentComponent'

const Icon = styled.i`
   color:#075394;
   cursor: pointer;
   margin-right:10px;
   &:hover{
       color:blue;
   }

`
const BackLink = styled(Link)`
    text-decoration:none;
    display:flex;
    align-items:center;
`
const Name = styled.p`
    font-weight:700;
`

const HeaderWrapper = styled.header`
    display:grid;
    grid-template-columns: auto auto auto;
    justify-content:space-between;
    padding:20px 5%;
`
interface IProps {
    userName: any;
    backlink: any;

}

interface IState {
    addPostView?: boolean;

}

class PostDetailsHeaderComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            addPostView: false,
        };
    }

    changeModal = () => {
        this.setState({
            addPostView: !this.state.addPostView
        })

    }
    render() {
        const { userName, backlink } = this.props

        return (
            <React.Fragment>
                <HeaderWrapper>
                    <BackLink to={backlink} >
                        <Icon className="fas fa-arrow-left fa-3x"></Icon>
                        <span> Back</span>
                    </BackLink >
                    <Name> {userName}</Name>
                </HeaderWrapper>

            </React.Fragment>
        )
    }

}

export default PostDetailsHeaderComponent
