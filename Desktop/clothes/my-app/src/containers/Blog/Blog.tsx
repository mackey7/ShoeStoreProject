import React from 'react'
import BlogCategory from '../../components/BlogCategory/BlogCategory'
interface Iprops {

}
interface IState {

}
class Blog extends React.Component<Iprops, IState> {

    render() {
        return (
            <div>
                <BlogCategory />
            </div>
        )
    }

}



export default Blog