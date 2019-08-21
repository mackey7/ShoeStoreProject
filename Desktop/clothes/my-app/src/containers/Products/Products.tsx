import React from 'react'
import { connect } from "react-redux";
import { fetchProductsResponse } from '../../actions/products'
import ProductItem from '../../components/ProductItem/ProductItem'

interface Iprops {
    products: any;
    fetchProductsResponse: any;
}
interface IState {

}
class Products extends React.Component<Iprops, IState> {
    componentWillMount() {
        this.props.fetchProductsResponse();
    }
    render() {
        const { products } = this.props.products;
        const mapProducts = products.map((item: any) =>


            <ProductItem key={item.id} src={item.src} alt={item.alt} price={item.price} productName={item.name}></ProductItem>

        )

        return (
            <div>
                {mapProducts}

            </div>
        )
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProductsResponse: () => dispatch(fetchProductsResponse()),
    }
}
const mapStateToProps = (state: any) => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products) 