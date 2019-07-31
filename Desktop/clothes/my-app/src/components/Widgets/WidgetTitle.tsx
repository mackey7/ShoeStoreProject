import React from 'react'

interface IProps {
    title: string
}

const WidgetTitle: React.SFC<IProps> = ({ title }) => {
    return (
        <h2>{title}</h2>
    )
}

export default WidgetTitle