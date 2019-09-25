import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import uuid from 'uuid';

const Section = Styled.div`
    padding:10px;
    position:relative;
`

const Icon = Styled.i`
    font-size:24px;
    cursor:pointer;
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
    right:-50px;
    background:#fff;
    width:300px;
    border:2px solid #9a9a9a;
    display: ${(props: any) => (props.isOpen ? "block" : "none")};
    z-index:3;
    @media only screen and (min-width: 900px) {
      right:-130px;
}
`
const ProductItem = Styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
    border-bottom:2px solid #9a9a9a;
`
const ProductImg = Styled.img`
    height:50px;
    width:50px;
`
const ProductName = Styled.p`
    padding-left:10px;
`
const DeleteProduct = Styled.button`
    background:inherit;
    border:0;
    font-size:20px;
    cursor: pointer;
    padding: 0px 10px 0px 10px
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
const Row = Styled.div`
    display:flex;
`

interface IProps {
    SwitchIsOpen: any;
    isOpen: any;
    cart: any;
    removeItemFromCart: any;
}




const BasketSection: React.SFC<IProps> = ({ SwitchIsOpen, isOpen, cart, removeItemFromCart }) => {
    const MapCart = cart.map((item: any) =>
        <ProductItem key={uuid.v4()}>
            <ProductImg src={item.src} />
            <ProductName >
                {item.name}
            </ProductName >
            <Row>
                <span>{item.quantity}</span>
                <DeleteProduct >
                    <i className="fas fa-trash-alt" onClick={() => removeItemFromCart(item.id)}></i>
                </DeleteProduct >
            </Row>
        </ProductItem>
    )
    return (
        <Section>
            <div onClick={SwitchIsOpen}>
                <Icon className="fas fa-shopping-basket"></Icon>
                <Span> {cart.length}</Span>
            </div>
            <Box isOpen={isOpen}>
                {cart.length > 0 ? MapCart : <div> no products </div>}
                <More><LINK to="/cart">More</LINK> </More>
            </Box>
        </Section>
    )
}
export default BasketSection