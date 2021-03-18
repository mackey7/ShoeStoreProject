import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import AddPostComponent from '../AddPostComponent/AddPostComponent'

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
    addPost: any;
    userId: any;
}

interface IState {
    addPostView?: boolean;

}

class UserDetailsHeaderComponent extends React.Component<IProps, IState> {
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
        const { userName, addPost, userId } = this.props
        return (
            <React.Fragment>
                <HeaderWrapper>
                    <BackLink to='/' >
                        <Icon className="fas fa-arrow-left fa-3x"></Icon>
                        <span> Back</span>
                    </BackLink >
                    <Name> {userName}</Name>
                    <Icon onClick={this.changeModal} className="fas  fa-plus-circle red fa-3x"></Icon>
                </HeaderWrapper>
                {this.state.addPostView ? <AddPostComponent userId={userId} addPost={addPost} cancel={this.changeModal} /> : null
                }
            </React.Fragment>
        )
    }

}

export default UserDetailsHeaderComponent
