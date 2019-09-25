import React from 'react';
import Styled from 'styled-components';
import SearchResult from './SearchResult';
import uuid from 'uuid';

const SearchModalWrapper = Styled.div`
    position:absolute;
    top:0;
    left:0;
    min-width:100%;
    min-height:100%;
    display:flex;
    flex-direction:column;
    background:rgba(0, 0,0, 0.8);
    z-index:999;
`
const Row = Styled.div`
    display:flex;
    width:100%;
`

const Icon = Styled.i`
    cursor:pointer;
    color:#fff;
    font-size:30px;
    padding:30px;

`

const CenterWrapper = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-width:100%;
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
    margin-top:20px
    align-self:center;


@media only screen and (min-width: 900px) {
    width:80%;
    margin-top:100px;
}

`

const SearchList = Styled.div`
    color:#fff;
    width:80%;
    background:rgba(0, 0,0, 0.5);
    padding:20px;
    margin-top:50px;

`
const Empty = Styled.div`
    text-align:center;  
`

interface Iprops {
    switchOpenSearch?: any;
    data?: any;
    inputValue: string;
    onChangeInput: any;
}

const SearchModal: React.SFC<Iprops> = ({ switchOpenSearch, data, inputValue, onChangeInput }) => {


    const MapData = data.map((item: any) =>

        <SearchResult key={uuid.v4()} switchOpenSearch={switchOpenSearch} title={item.name} id={item.id} />
    )
    return (
        <SearchModalWrapper>
            <Row>
                <Icon onClick={switchOpenSearch} className="far fa-times-circle" ></Icon>
            </Row>

            <CenterWrapper>
                <Input type="text" placeholder="Search..." value={inputValue} onChange={onChangeInput} />

            </CenterWrapper>


            <CenterWrapper>
                <SearchList>
                    {data.length > 0 ? MapData : <Empty> no resluts </Empty>}
                </SearchList>
            </CenterWrapper>
        </SearchModalWrapper>
    )
}

export default SearchModal