import React from 'react'
import Styled from 'styled-components';
import ProductItem from '../ProductItem/ProductItem'

interface IProps {
    data: any;
}

const ProductsCategory: React.SFC<IProps> = ({ data }) => {
    const mapProducts = data.map((item: any) =>


        <ProductItem key={item.id} src={item.src} alt={item.alt} price={item.price} productName={item.name}></ProductItem>

    )

    return (
        <div>
            {mapProducts}
        </div>
    )
}

export default ProductsCategory