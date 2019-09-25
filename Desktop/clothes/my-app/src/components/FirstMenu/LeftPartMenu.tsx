import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = styled(Link)`
    color:#57c5a0;
    font-size:24px;
    padding:14px;
    text-decoration:none;
`

const LeftPartMenu: React.SFC = () => {
    return (
        <Logo to="/">FOOSESHOES</Logo>

    )
}

export default LeftPartMenu