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
class Products extends React.Component<Iprops, IState> {
    componentWillMount() {
        this.props.fetchProductsResponse();
    }
    render() {
        const { products } = this.props.products;
        return (
            <div>
                < ProductsCategory data={products} />
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