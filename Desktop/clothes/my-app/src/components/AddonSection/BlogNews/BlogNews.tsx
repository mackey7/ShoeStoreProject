import React from 'react'
import NewsItem from './NewsItem'

interface IProps {
    data: Array<Object>,
}

const BlogNews: React.SFC<IProps> = ({ data }) => {
    return (
        <div>

            {data.map(item => <NewsItem data={item} />)}

        </div>
    )
}

export default BlogNews