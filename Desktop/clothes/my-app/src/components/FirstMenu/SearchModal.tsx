import React from 'react';
import Styled from 'styled-components';
import SearchResult from './SearchResult';
import uuid from 'uuid';

const SearchModalWrapper = Styled.div`
position:absolute;
top:0;
left:0;
width:100%;
min-height:100%;
display:flex;
flex-direction:column;
background:rgba(0, 0,0, 0.8);
z-index:999;

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
background:rgba(0, 0,0, 0.5);
border:0;
padding:20px;
font-size:24px;


@media only screen and (min-width: 900px) {
width:60%;
margin-top:200px;
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

const SearchList = Styled.div`
color:#fff;
width:80%;
margin:50px auto;
background:rgba(0, 0,0, 0.5);
padding:20px;

`
const Row = Styled.div`
display:flex;
width:100%;
height:100%;
`


interface Iprops {
    switchOpenSearch?: any;
    data?: any;
    inputValue: string;
    onChangeInput: any;
}

const SearchModal: React.SFC<Iprops> = ({ switchOpenSearch, data, inputValue, onChangeInput }) => {
    return (
        <SearchModalWrapper>
            <Row>
                <InputWrapper>
                    <Input type="text" placeholder="Search..." value={inputValue} onChange={onChangeInput} />

                </InputWrapper>
                <Icon onClick={switchOpenSearch} className="far fa-times-circle" ></Icon>
            </Row>

            <SearchList>
                {data.length > 0 ?
                    data.map((item: any) =>

                        <SearchResult key={uuid.v4()} switchOpenSearch={switchOpenSearch} title={item.name} id={item.id} />
                    )
                    : "no resluts"
                }



            </SearchList>
        </SearchModalWrapper>
    )
}

export default SearchModal