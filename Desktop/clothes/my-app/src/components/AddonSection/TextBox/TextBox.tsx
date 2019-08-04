import React from 'react'
import Styled from 'styled-components'

const Section = Styled.section`
background:#dfdbd4;
padding:20px;
width:100%;
margin:10px;

h2{
margin-bottom:15px;
color:#535250;
}
p{
color:#535250;
padding-bottom:20px;
}
span{
color:#535250;
}
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
            <h2> {data.titile} </h2>
            <p> {data.content}  </p>
            <span>  {data.author ? ` - ${data.author} - ` : null}  </span>
        </Section>
    )
}

export default TextBox