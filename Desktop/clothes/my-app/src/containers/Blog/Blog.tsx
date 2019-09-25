import React from 'react'
import BlogCategory from '../../components/BlogCategory/BlogCategory'
import { fetchBlogResponse } from '../../actions/blog'
import { connect } from "react-redux";


interface Iprops {
    posts: any;
    fetchBlogResponse: any;
}

class Blog extends React.Component<Iprops> {
    componentDidMount() {
        this.props.fetchBlogResponse();
    }
    render() {
        const { posts } = this.props
        return (
            <div>
                <BlogCategory data={posts} />
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchBlogResponse: () => dispatch(fetchBlogResponse()),
    }
}

const mapStateToProps = (state: any) => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)

