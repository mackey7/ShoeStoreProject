import React from 'react'
import Styled from 'styled-components'
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
const ProductPageComponent: React.SFC = () => {

    return (
        <ProductPageSection>
            <ProductPageWrapper>
                <Row>
                    <Img src={IMG} />
                    <Content>
                        <ProductName>
                            Vans classic skate shoe and the first to bear
                        </ProductName>
                        <Row>
                            <Price>
                                56.99$
                        </Price>
                            <BuyBtn>BUY </BuyBtn>
                        </Row>
                        <Desc>

                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem sint aut debitis? Reiciendis hic delectus dicta provident. Minima magni maiores repellat reprehenderit, dolor rerum voluptatem eveniet, quisquam ullam et voluptatibus delectus quod quibusdam aspernatur esse! Ad, odit dicta! Expedita velit itaque sunt, esse illo omnis ipsum est blanditiis minus. Quibusdam illum delectus cumque, beatae minus asperiores doloribus repellat similique architecto fugit dolor commodi nulla est deserunt repudiandae dolorem reiciendis eaque distinctio totam obcaecati ea ab tenetur magnam. Praesentium eos placeat voluptatibus? Repellendus ad deserunt eos asperiores vero illo inventore dolorum. Perspiciatis quos blanditiis quibusdam nostrum optio, cum quisquam tempore similique quod? Labore quibusdam perspiciatis, iste ratione recusandae maxime consequuntur amet ducimus. Optio illum iusto beatae quibusdam dolore consectetur, officiis repellendus asperiores explicabo! Mollitia, aliquid inventore repellat recusandae ex dolorum iste! Impedit recusandae nostrum nobis aliquid doloribus. Odit beatae quia, quo, unde doloribus deleniti debitis dolores molestias asperiores, placeat error accusantium dolor et! Est, qui eius accusantium dolore nulla incidunt maxime repellat doloribus, ullam assumenda, explicabo reprehenderit enim alias quisquam exercitationem commodi! Voluptas quidem explicabo vel mollitia expedita ipsam! Ullam quisquam similique officia dolores natus quos illum maxime? Enim adipisci, porro tempora dolorem doloribus labore! Dolorem, iste! Facere ex minus voluptatibus?
                        </Desc>
                    </Content>
                </Row>
            </ProductPageWrapper>
        </ProductPageSection>
    )
}

export default ProductPageComponent