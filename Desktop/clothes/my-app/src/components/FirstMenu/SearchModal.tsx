import React from 'react'
import Styled from 'styled-components'

const SearchModalWrapper = Styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
background:rgba(0, 0,0, 0.8);

`
const InputWrapper = Styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
`

const Input = Styled.input`
width:100%;
height:30px;
color:#fff;
background:rgba(0, 0,0, 0.9);
border:0;
padding:20px;
font-size:24px;


@media only screen and (min-width: 900px) {
width:60%;
}

@media only screen and (min-width: 600px) {
width:80%;
}

`
const Icon = Styled.i`
cursor:pointer;
color:#fff;
font-size:30px;
padding:30px;
`


interface Iprops {
    switchOpenSearch: any;
}

const SearchModal: React.SFC<Iprops> = ({ switchOpenSearch }) => {
    return (
        <SearchModalWrapper>

            <InputWrapper>
                <Input type="text" placeholder="Search..." />

            </InputWrapper>


            <Icon onClick={switchOpenSearch} className="far fa-times-circle"></Icon>

        </SearchModalWrapper>
    )
}

export default SearchModal