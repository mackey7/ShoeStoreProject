import React from 'react'
import Styled from 'styled-components'
import uuid from 'uuid'


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
    max-height:500px;
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

const RowPrice = Styled.div`
    width:100%;
    display:flex;
    justify-content: space-around;
`

interface IProps {
    data: any;
    addToCart: any;
    postID: any

}

const ProductPageComponent: React.SFC<IProps> = ({ postID, addToCart, data }) => {
    let elem1 = postID - 1
    let elem2 = postID
    const DataMapToItem = data.slice(elem1, elem2).map((item: any) => (

        < Row key={uuid.v4()} >
            <Img src={item.src} />
            <Content>
                <ProductName>
                    {item.name}
                </ProductName>
                <RowPrice>
                    <Price>
                        {item.price}{item.currency}
                    </Price>
                    <BuyBtn onClick={() => addToCart(item.id)} >BUY </BuyBtn>
                </RowPrice>
                <Desc>

                    {item.description}
                </Desc>
            </Content>
        </Row>



    ))

    return (
        < ProductPageSection >
            <ProductPageWrapper>
                {data.length > 0 ? DataMapToItem : "loading"}
            </ProductPageWrapper>
        </ProductPageSection >
    )
}

export default ProductPageComponent