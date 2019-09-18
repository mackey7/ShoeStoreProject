import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const Result = Styled(Link)`
text-decoration:none;
color:#bbbbbb;
padding:20px 0px;
font-size:25px;
&:hover{
   color:#fff; 
}
`


interface Iprops {
    title: string;
    id: number;
    switchOpenSearch: any;
}

const SearchResult: React.SFC<Iprops> = ({ title, id, switchOpenSearch }) => {
    return (

        <div onClick={switchOpenSearch}>
            <Result to={`/product/${id}`}>
                <p>{title}</p>
            </Result>
        </div>
    )
}

export default SearchResult