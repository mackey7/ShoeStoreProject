import React from 'react'
import { connect } from "react-redux";
import { fetchProductsResponse } from '../../actions/products'
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory'
interface Iprops {
    products: any;
    fetchProductsResponse: any;
}

interface IState {

}
class BestSellers extends React.Component<Iprops, IState> {
    componentDidMount() {
        this.props.fetchProductsResponse();
    }
    render() {
        const { products } = this.props.products;
        return (
            <div>
                < ProductsCategory data={products} CategoryTitle="Best Sellers" />
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


export default connect(mapStateToProps, mapDispatchToProps)(BestSellers) 
