import React from 'react';
import PostDetailsHeaderComponent from '../../Components/PostDetailsHeaderComponent/PostDetailsHeaderComponent'
import PostDetailsContentComponent from '../../Components/PostDetailsContentComponent/PostDetailsContentComponent'
import PostDetailsCommentsComponent from '../../Components/PostDetailsCommentsComponent/PostDetailsCommentsComponent'
import { fetchComments, addComment } from '../../Actions/comments'
import { fetchUserName } from '../../Actions/users'
import { fetchSinglePost } from '../../Actions/posts'
import { connect } from "react-redux";



interface IProps {
    users: any;
    match: any;
    fetchUserName: any;
    fetchSinglePost: any;
    fetchComments: any;
    post: any;
    comments: any;
    addComment: any;
}

class PostDetailsContainer extends React.Component<IProps> {
    componentWillMount() {
        const postId = this.props.match.params.postId
        const id = this.props.match.params.id
        this.props.fetchComments(postId);
        this.props.fetchSinglePost(postId);
        this.props.fetchUserName(id);
    }
    handleAdd = (postId: any) => {
        const { addComment } = this.props
        addComment(postId);

    }
    render() {
        const { users } = this.props.users;
        const { post } = this.props.post;
        if (Array.isArray(this.props.post.posts)) {
            return (<div></div>)
        } else {
            const UserId = this.props.match.params.id
            return (
                <div>
                    <PostDetailsHeaderComponent userName={users.name} backlink={'/user/' + UserId} />
                    <PostDetailsContentComponent title={post.title} post={post.body} />
                    <PostDetailsCommentsComponent data={this.props.comments.comments} postId={this.props.match.params.postId} addComment={this.handleAdd} />

                </div>
            )
        }

    }
}

const mapStateToProps = (state: any) => {
    return {
        comments: state.comments,
        post: state.posts,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchSinglePost: (postId: any) => dispatch(fetchSinglePost(postId)),
        fetchComments: (postId: any) => dispatch(fetchComments(postId)),
        fetchUserName: (id: any) => dispatch(fetchUserName(id)),
        addComment: (postId: any) => dispatch(addComment(postId))

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (PostDetailsContainer)
