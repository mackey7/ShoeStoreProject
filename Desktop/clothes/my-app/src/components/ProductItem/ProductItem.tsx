import React from 'react'
import Styled, { ThemeConsumer } from 'styled-components'
import ProductImage from './ProductImage'
import ProductPrice from './ProductPrice'
import ProductInfo from './ProductInfo'



const ProductDetails = Styled.div`
display:flex;
border-top:1px solid black;
height:70px;
`
const ProductItemWrapper = Styled.section`
background:#fff;
width:300px;
height:300px;
`


interface Iprops {
    src: string;
    alt: string;
    price: string;
    productName: string;
}
interface Iprops {
    src: string;
    alt: string;

}
interface IState {
    isMove: boolean;
}


class ProductItem extends React.Component<Iprops, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isMove: false
        }
    }
    handleMove = () => {
        this.setState((PrevState) => {
            return {
                isMove: !PrevState.isMove
            }
        });


    }

    render() {
        const { src, alt, price, productName } = this.props
        return (
            <ProductItemWrapper>
                <ProductImage src={src} alt={alt} />
                <ProductDetails>
                    <ProductPrice price={price} />
                    <ProductInfo onMouseMove={this.handleMove} isMove={this.state.isMove} productName={productName} />
                </ProductDetails>
            </ProductItemWrapper>
        )
    }
}

export default ProductItem