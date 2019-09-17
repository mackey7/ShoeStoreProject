import React from 'react'
import Styled from 'styled-components'


const SortWrapper = Styled.section`
background:#2e2e2e;
width:100%;
padding:50px 0px;
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
    sortPrice: any;
    sortCategories: any;
    sortBrands: any;


}
interface IState {

}
class SortComponent extends React.Component<Iprops, IState> {

    render() {
        const { sortPrice, sortCategories, sortBrands } = this.props
        return (
            <SortWrapper>
                <SortSection>

                    <Span> Sort by  </Span>
                    <Select onClick={(e) => sortBrands(e, "brands")} >
                        <option value="-"> Brands</option>
                        <option value="All Star"> All Star</option>
                        <option value="Big Star"> Big Star</option>
                        <option value="reebok"> Reebok</option>
                        <option value="Gucci"> Gucci</option>
                        <option value="Nike"> Nike</option>


                    </Select>
                    <Select onClick={(e) => sortCategories(e, "gender")} >
                        <option value="-"> Categories</option>
                        <option value="woman"> woman</option>
                        <option value="man"> man</option>
                    </Select>
                    <Select onClick={(e) => sortPrice(e, 'price')}>

                        <option value="-"> Price</option>
                        <option value="min-max"> min-max</option>
                        <option value="max-min"> max-min</option>
                    </Select>

                </SortSection>
            </SortWrapper>
        )
    }

}



export default SortComponent