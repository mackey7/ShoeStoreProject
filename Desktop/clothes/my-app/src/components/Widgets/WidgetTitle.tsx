import React from 'react'
import Styled from 'styled-components'

const Titile = Styled.h2`
text-transform:uppercase;
font-weight:400;
padding-bottom:10px;
`


interface IProps {
    title: string
}

const WidgetTitle: React.SFC<IProps> = ({ title }) => {
    return (
        <Titile>{title}</Titile>
    )
}

export default WidgetTitle