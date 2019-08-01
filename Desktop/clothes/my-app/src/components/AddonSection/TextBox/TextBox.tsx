import React from 'react'
import Styled from 'styled-components'

const Section = Styled.section`
background:#dfdbd4;
padding:20px;
width:100%;
margin:10px;
@media only screen and (min-width: 900px) {
    width:20%
 
}
`
interface IProps {
    data: any
}

const TextBox: React.SFC<IProps> = ({ data }) => {
    return (
        <Section>
            {data.titile}
            {data.content}
            {data.author}
        </Section>
    )
}

export default TextBox