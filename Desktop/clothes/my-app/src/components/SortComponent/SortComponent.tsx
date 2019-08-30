import React from 'react'
import Styled from 'styled-components'


const SortWrapper = Styled.section`
background:#2e2e2e;
width:100%;
padding:50px 0px;
margin-bottom:40px;

`
const SortSection = Styled.section`
color:white;
margin:0 auto;
width:90%;
display:flex;
flex-direction: column;
align-content:space-between;

@media only screen and (min-width: 900px) {
        width:80%;
        display: flex;
        justify-content:space-around;
        align-items:baseline;
        flex-direction: row;
    }

`
const Span = Styled.span`
font-size:30px;
font-weight:500;
`
const Select = Styled.select`
border:0px;
background:#242424;
padding: 20px 50px;
color:#fff;
font-size:18px;
font-weight:600;
cursor:pointer;
margin:20px 0px;

@media only screen and (min-width: 900px) {
       
        margin:0px;
    }
`
const Option = Styled.option`
padding:50px;
background:#242424;
color:#fff;
font-size:18px;
font-weight:500;
cursor:pointer;

`

interface Iprops {

}
interface IState {

}
class SortComponent extends React.Component<Iprops, IState> {

    render() {
        return (
            <SortWrapper>
                <SortSection>

                    <Span> Sort by  </Span>
                    <Select>
                        <Option>Brands</Option>
                        <Option> Brands</Option>
                        <Option> Brands</Option>

                    </Select>
                    <Select>
                        <Option> Categories</Option>
                        <Option> Categories</Option>
                        <Option> Categories</Option>
                    </Select>
                    <Select>
                        <Option> Price</Option>
                        <Option> Price</Option>
                        <Option> Price</Option>
                    </Select>

                </SortSection>
            </SortWrapper>
        )
    }

}



export default SortComponent