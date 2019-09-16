import React from 'react'
import ProductPageComponent from '../../components/ProductPageComponent/ProductPageComponent'
import { fetchProductsResponse, addToCart } from '../../actions/products'
import { connect } from "react-redux";




interface Iprops {
    match: any,
    fetchProductsResponse: any;
    addToCart: any;
    products: any;
}
interface IState {

}
class ProductPage extends React.Component<Iprops, IState> {
    componentWillMount() {
        let postId = this.props.match.params.id
    }
    handleAddToCart = (id: number) => {
        this.props.addToCart(id)
    }
    componentDidMount() {
        this.props.fetchProductsResponse();
    }
    render() {
        const { products, match } = this.props
        const postid = parseInt(match.params.id, 10);

        return (
            <div>
                <ProductPageComponent data={products} addToCart={this.handleAddToCart} postID={postid} />

            </div>
        )
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProductsResponse: () => dispatch(fetchProductsResponse()),
        addToCart: (id: number) => dispatch(addToCart(id)),


    }
}

const mapStateToProps = (state: any) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)

