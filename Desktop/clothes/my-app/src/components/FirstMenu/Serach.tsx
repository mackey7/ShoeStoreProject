import React from 'react'
import styled from 'styled-components'

const Icon = styled.i`
color:white;
display: flex;
justify-content: center;
align-items: center; 
font-size:24px;
`

interface IProps {

}

const Search: React.SFC<IProps> = (props) => {
    return (
        <Icon className="fa fa-search"></Icon>
    )
}

export default Search