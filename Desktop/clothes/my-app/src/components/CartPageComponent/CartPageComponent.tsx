import React from 'react'
import Styled from 'styled-components'
const PIC = "https://n1.sdlcdn.com/imgs/h/1/7/Wdl-Sneakers-Red-Casual-Shoes-SDL039762466-1-2a564.jpg"
const CartPageSection = Styled.section`
background:#ebe7df;
`

const CartPageWrapper = Styled.div`
width:80%;
margin:0 auto;
background:#f9f8f7;
padding:40px;
border:2px solid #9a9a9a;
`

const ProductItem = Styled.div`
display:flex;
align-items:center;
justify-content: space-between;
border-bottom:2px solid #9a9a9a;
padding:20px 0px;
`

const ProductImg = Styled.img`
height:100px;
width:100px;
`
const ProductName = Styled.p`
font-size:30px;

`
const DeleteBtn = Styled.button`
background:inherit;
border:0;
font-size:20px;
cursor: pointer;
font-weight:400;
font-size:30px;
margin-rigHt:20px;
    i{
        color:red;
            &:hover{
            color:#ea0f0f;
            }
}
`

interface IProps {
    removeItemFromCart: any;
    cart: any;
}

const CartPageComponent: React.SFC<IProps> = ({ removeItemFromCart, cart }) => {

    return (
        <CartPageSection>
            <CartPageWrapper>
                {cart.map((item: any) =>
                    <ProductItem>
                        <ProductImg src={item.src} />
                        <ProductName>
                            {item.name}
                        </ProductName>
                        <DeleteBtn>
                            <i className="fas fa-trash-alt" onClick={() => removeItemFromCart(item.id)}></i>
                        </DeleteBtn>
                    </ProductItem>
                )}
            </CartPageWrapper>
        </CartPageSection>
    )
}

export default CartPageComponent