import React from 'react'

import Styled from 'styled-components'

const Section = Styled.div`
padding:10px;
position:relative;
`
const Icon = Styled.i`
font-size:24px;
cursor:pointer;
`
const Span = Styled.span`
background:#efefef;
border-radius:6px;
padding:2px;
font-size:20px;
text-align:center;
cursor:pointer;
`

const Box: any = Styled.section`
position:absolute;
top:45px;
left:-80px;
background:#fff;
width:300px;
border:1px solid red;
display: ${(props: any) => (props.isOpen ? "block" : "none")};
`
const ProductItem = Styled.div``
const ProductImg = Styled.img``
const ProductName = Styled.p``
const DeleteProduct = Styled.button``
const More = Styled.button`
width: 100 %;
cursor: pointer;
`
interface Iprops {

    isOpen?: boolean;
}
interface IState {
    isOpen: boolean;
}
class FavouriteSection extends React.Component<Iprops, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        }
    }
    SwitchIsOpen = () => {
        this.setState((PrevState) => {
            return {
                isOpen: !PrevState.isOpen
            }
        });


    }
    render() {



        return (
            <Section>
                <div onClick={this.SwitchIsOpen}>
                    <Icon className="far fa-star"></Icon>
                    <Span> 30</Span>
                </div>
                <Box isOpen={this.state.isOpen} >
                    <ProductItem>
                        <ProductImg />
                        <ProductName />
                        <DeleteProduct />
                    </ProductItem>
                    <More>More</More>
                </Box>
            </Section>
        )
    }
}

export default FavouriteSection