import React from 'react'
import Styled from 'styled-components'
import ProductImage from './ProductImage'
import ProductPrice from './ProductPrice'
import ProductInfo from './ProductInfo'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const ProductDetails = Styled.div`
    display:flex;
    border-top:1px solid black;
    height:70px;
`
const ProductItemWrapper = Styled.section`
    background:#fff;
    width:300px;
    height:300px;
    margin: 0px 30px 30px 0px;
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
    addToCart: any;
    productId: number;
    addToFavourite: any;
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
    handleMove = (arg: boolean) => {
        this.setState(() => {
            return {
                isMove: arg
            }
        });
    }

    render() {
        const { src, alt, price, productName, addToCart, productId, addToFavourite } = this.props
        return (
            <ScrollAnimation animateIn='zoomIn' animateOnce={true} >
                <ProductItemWrapper>
                    <ProductImage onMouseMove={this.handleMove} isMove={this.state.isMove} src={src} alt={alt} addToCart={addToCart} productId={productId} addToFavourite={addToFavourite} />
                    <ProductDetails>
                        <ProductPrice price={price} />
                        <ProductInfo onMouseMove={this.handleMove} isMove={this.state.isMove} productName={productName} addToCart={addToCart} productId={productId} addToFavourite={addToFavourite} />
                    </ProductDetails>
                </ProductItemWrapper>
            </ScrollAnimation>
        )
    }
}

export default ProductItem