import React from 'react'

interface IProps {
    data: any
}

const TextBox: React.SFC<IProps> = ({ data }) => {
    return (
        <div>
            {data.titile}
            {data.content}
            {data.author}
        </div>
    )
}

export default TextBox