import React from 'react'
import ArticlePageComponent from '../../components/ArticlePageComponent/ArticlePageComponent'
import { fetchBlogResponse } from '../../actions/blog'
import { connect } from "react-redux";

interface Iprops {
    fetchBlogResponse: any;
    match: any;
    posts: any;
}

class ArticlePage extends React.Component<Iprops> {
    componentWillMount() {
        let postId = this.props.match.params.id;
        console.log(postId)
    }
    componentDidMount() {
        this.props.fetchBlogResponse();
    }
    render() {
        const { posts, match } = this.props
        const articleID = parseInt(match.params.id, 10);
        return (
            <div>
                <ArticlePageComponent data={posts} articleId={articleID} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage)


