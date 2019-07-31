import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const UL = Styled.ul`
display:flex;
flex-wrap:wrap;
`
const LI = Styled.li`
list-style:none
`
const LINK = Styled(Link)`
color:#979797;
text-decoration:none;
padding:0px 10px;
&:hover{
    color:#fff;
}
`
const RightSection: React.SFC = () => {
    return (

        <UL>
            <LI> <LINK to="/Home">Home</LINK></LI>
            <LI> <LINK to="/Support">Support</LINK></LI>
            <LI> <LINK to="/Terms">Terms and Conditions</LINK></LI>
            <LI> <LINK to="/Faqs">Faqs</LINK></LI>
            <LI> <LINK to="/Contact">Contact us</LINK></LI>
        </UL>

    )
}

export default RightSection