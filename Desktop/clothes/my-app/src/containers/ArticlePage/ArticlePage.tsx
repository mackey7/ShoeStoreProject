import React from 'react'
import ArticlePageComponent from '../../components/ArticlePageComponent/ArticlePageComponent'
interface Iprops {

}
interface IState {

}
class ArticlePage extends React.Component<Iprops, IState> {

    render() {
        return (
            <div>
                <ArticlePageComponent />
            </div>
        )
    }

}



export default ArticlePage