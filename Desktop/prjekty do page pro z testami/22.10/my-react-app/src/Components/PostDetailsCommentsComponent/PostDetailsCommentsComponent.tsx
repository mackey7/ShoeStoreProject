import React from 'react'
import PostDetailsCommentComponent from '../PostDetailsCommentComponent/PostDetailsCommentComponent'
import AddCommentComponent from '../AddCommentComponent/AddCommentComponent'
import styled from 'styled-components'
import uuid from 'uuid'


const CommentWrapper = styled.section`
width:80%;
margin:0 auto;

`

const BtnWrapper = styled.div`
display:flex;
justify-content:space-between;
`
const Btn = styled.span`
text-decoration:underline;
color:blue;
cursor: pointer;
`

interface IProps {
    addComment: any;
    postId: any;
    data: any;
}

interface IState {
    commentHide: boolean;
    addCommentState: boolean;
}

class PostDetailsCommentsComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            commentHide: true,
            addCommentState: false
        };
    }

    CommentToggle = () => {
        this.setState({
            commentHide: !this.state.commentHide
        });

    }
    AddComment = () => {
        this.setState({
            addCommentState: !this.state.addCommentState
        });

    }



    render() {

        const { addCommentState, commentHide } = this.state;
        const { addComment, postId, data } = this.props;
        const { AddComment, CommentToggle } = this

        const mapComments = data.map((item: any) => <PostDetailsCommentComponent key={uuid.v4()} data={item} />)

        return (
            <React.Fragment>
                <CommentWrapper>
                    <BtnWrapper>
                        <Btn onClick={CommentToggle}>  {commentHide ? "Show Comments" : "Hide comments"} </Btn>
                        <Btn onClick={AddComment} > Add comment</Btn>
                    </BtnWrapper>
                    {commentHide ? null : mapComments}
                </CommentWrapper >
                {this.state.addCommentState ? <AddCommentComponent addComment={addComment} cancel={this.AddComment} /> : null
                }
            </React.Fragment>
        )
    }
}

export default PostDetailsCommentsComponent