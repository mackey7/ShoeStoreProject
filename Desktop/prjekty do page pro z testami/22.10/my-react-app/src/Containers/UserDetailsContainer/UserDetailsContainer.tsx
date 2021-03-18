import React from 'react';
import UserDetailsHeaderComponent from '../../Components/UserDetailsHeaderComponent/UserDetailsHeaderComponent'
import UserDetailsComponent from '../../Components/UserDetailsComponent/UserDetailsComponent'
import { fetchPosts, deletePost, addPost } from '../../Actions/posts';
import { fetchUserName } from '../../Actions/users';
import { connect } from "react-redux";

interface IProps {
    fetchPosts: any;
    fetchUserName: any;
    match: any;
    deletePost: any;
    addPost: any
    users: any;
    posts: any;
    handleAdd(): void;
    handleDelete: any;
    backLink: string;
    displayAdd: any;


}

class UserDetailsContainer extends React.Component<IProps> {

    componentDidMount() {
        let UserId: any = this.props.match.params.id
        console.log(UserId)
        this.props.fetchPosts(UserId);
        this.props.fetchUserName(UserId);
    }


    handleDelete = (postID: number) => {
        this.props.deletePost(postID)

    };
    handleAdd = (postId: any, title: string, body: string) => {
        this.props.addPost(postId, title, body)

    }

    render() {
        const { users } = this.props.users;
        const { posts } = this.props.posts;
        const { handleAdd, handleDelete } = this

        return (
            <div>

                <UserDetailsHeaderComponent userName={users.name} addPost={handleAdd} userId={this.props.match.params.id} />
                <UserDetailsComponent data={posts} deleteItem={handleDelete} postId={this.props.match.params.id} />

            </div >
        )


    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchPosts: (UserId: any) => dispatch(fetchPosts(UserId)),
        deletePost: (postID: number) => dispatch(deletePost(postID)),
        addPost: (postId: any, title: string, body: string) => dispatch(addPost(postId, title, body)),
        fetchUserName: (UserId: number) => dispatch(fetchUserName(UserId))

    };
}


const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        posts: state.posts,
        users: state.users
    }

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetailsContainer);