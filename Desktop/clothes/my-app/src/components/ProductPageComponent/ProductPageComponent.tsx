import React from 'react'
import Styled from 'styled-components'
import uuid from 'uuid'

const IMG = "https://dsw.scene7.com/is/image/DSWShoes/404995_001_ss_01?$pdp-image$"

const ProductName = Styled.h2`
padding: 20px 0px;
font-size:25px;
`

const ProductPageSection = Styled.section`
background:#ebe7df;
`
const ProductPageWrapper = Styled.div`
margin:0 auto;
width:80%;
background:#f2f0ed;
padding:40px;

`

const Img = Styled.img`
width:50%;
border:2px solid #b8b8b8;
`

const Content = Styled.div`
width:50%;
margin-left:30px;
`

const Row = Styled.div`
display:flex;
justify-content:center;
`
const Desc = Styled.p`
padding: 20px 0px;
`;

const Price = Styled.span`
padding: 20px 0px;
font-weight:600;
font-size:25px;
`;


const BuyBtn = Styled.button`
margin-top:5px ;
padding:10px 40px;
font-size:20px;
background:#7db71e;
border:2px solid #c5c9bd;
cursor:pointer;
color:#fff;
font-weight:700;
&:hover{
    background:#08b438;
    border:2px solid #7db71e;
}
`
interface IProps {
    data: any;
    addToCart: any;
    postID: any

}

const ProductPageComponent: React.SFC<IProps> = ({ postID, addToCart, data }) => {
    let elem1 = postID - 1
    let elem2 = postID
    console.log(elem1, elem2)
    return (
        <ProductPageSection>
            <ProductPageWrapper>
                {data.length > 0 ?
                    data.slice(elem1, elem2).map((item: any) => {

                        { item.id }
                        <Row key={uuid.v4()} >
                            <Img src={item.src} />
                            <Content>
                                <ProductName>
                                    {item.name}
                                </ProductName>
                                <Row>
                                    <Price>
                                        {item.price}
                                    </Price>
                                    <BuyBtn onClick={() => addToCart(item.id)} >BUY </BuyBtn>
                                </Row>
                                <Desc>

                                    {item.desc}
                                </Desc>
                            </Content>
                        </Row>



                    }




                    )
                    : "loading"
                }


                {console.log("data")}
                {console.log(data)}


            </ProductPageWrapper>
        </ProductPageSection >
    )
}

export default ProductPageComponent