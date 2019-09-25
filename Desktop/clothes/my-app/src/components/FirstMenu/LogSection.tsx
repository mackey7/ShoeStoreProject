import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const LoginWrapper = Styled.div`
    color:white;
    margin-left:10px;
    display: flex;
    justify-content: center;
    align-items: center; 
    padding:0px 20px;
`
const LINK = Styled(Link)`
    color:white;
    text-decoration:none;
    margin-left:10px;
    margin-right:10px;
    font-size:24px;
`


const LogSection: React.SFC = () => {
    return (
        <LoginWrapper>
            <LINK to="/login" >Login</LINK>
            or <LINK to="/register" >REGISTER</LINK>

        </LoginWrapper>
    )
}

export default LogSection