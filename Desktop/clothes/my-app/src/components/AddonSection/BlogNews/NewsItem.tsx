import React from 'react'

interface IProps {
    data: any
}

const NewsItem: React.SFC<IProps> = ({ data }) => {
    return (
        <div>
            {data.title}
            {data.content}
            {data.date}
        </div>
    )
}

export default NewsItem