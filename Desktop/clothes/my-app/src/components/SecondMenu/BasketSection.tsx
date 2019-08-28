import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
const PIC = "https://n1.sdlcdn.com/imgs/h/1/7/Wdl-Sneakers-Red-Casual-Shoes-SDL039762466-1-2a564.jpg"
const Section = Styled.div`
padding:10px;
position:relative;
`

const Icon = Styled.i`
font-size:24px;
`
const Span = Styled.span`
background:#57c5a0;
border-radius:6px;
padding:2px;
font-size:20px;
text-align:center;
margin-left:5px;
cursor:pointer;
`








const Box: any = Styled.section`
position:absolute;
top:45px;
right:-130px;
background:#fff;
width:300px;
border:2px solid #9a9a9a;
display: ${(props: any) => (props.isOpen ? "block" : "none")};
`
const ProductItem = Styled.div`
display:flex;
align-items:center;
justify-content: space-around;
border-bottom:2px solid #9a9a9a;
`
const ProductImg = Styled.img`
height:50px;
width:50px;
`
const ProductName = Styled.p`

`
const DeleteProduct = Styled.button`
background:inherit;
border:0;
font-size:20px;
cursor: pointer;
font-weight:400;
    i{
        color:red;
            &:hover{
            color:#ea0f0f;
            }
}
`
const More = Styled.button`
width: 100%;
padding:8px 0px;
background:#da2121;
font-size:18px;
cursor: pointer;
border:0px;
font-weight:600;
color:#fff;

&:hover{

    background:#ea0f0f;
}
`

const LINK = Styled(Link)`
        text-decoration: none;
        color:#fff;
`



interface Iprops {

    isOpen?: boolean;
}
interface IState {
    isOpen: boolean;
}


class BasketSection extends React.Component<Iprops, IState> {
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
                    <Icon className="fas fa-shopping-basket"></Icon>
                    <Span> 0</Span>
                </div>

                <Box isOpen={this.state.isOpen} >
                    <ProductItem>
                        <ProductImg src={PIC} />
                        <ProductName >
                            Wdl Sneakers Red Casual Shoes
                        </ProductName >
                        <DeleteProduct >
                            <i className="fas fa-trash-alt"></i>
                        </DeleteProduct >
                    </ProductItem>
                    <ProductItem>
                        <ProductImg src={PIC} />
                        <ProductName >
                            Wdl Sneakers Red Casual Shoes
                        </ProductName >
                        <DeleteProduct >
                            <i className="fas fa-trash-alt"></i>
                        </DeleteProduct >
                    </ProductItem>
                    <ProductItem>
                        <ProductImg src={PIC} />
                        <ProductName >
                            Wdl Sneakers Red Casual Shoes
                        </ProductName >
                        <DeleteProduct >
                            <i className="fas fa-trash-alt"></i>
                        </DeleteProduct >
                    </ProductItem>
                    <More><LINK to="/cart">More</LINK> </More>
                </Box>
            </Section>
        )
    }
}
export default BasketSection