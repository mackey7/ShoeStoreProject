import React from 'react'
import { connect } from "react-redux";
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory'
import SortComponent from '../../components/SortComponent/SortComponent'
import { fetchProductsToSorted, addToCart, addToFavourite, sortPrice, sortCategories, sortBrands } from '../../actions/products'


interface Iprops {
    sorted: any;
    fetchProductsToSorted: any;
    addToCart: any;
    addToFavourite: any;
    sortPrice: any;
    sortBrands: any;
    sortCategories: any;

}
interface IState {

}
class Products extends React.Component<Iprops, IState> {
    handleAddToCart = (id: number) => {
        this.props.addToCart(id)
    }
    handleAddToFavourite = (id: number) => {
        this.props.addToFavourite(id)
    }
    handleSortPrice = (e: any, key: any) => {
        this.props.sortPrice(e.target.value, key)
    }
    handleSortBrands = (e: any) => {
        // console.log(this.props.sortBrands(e))
        this.props.sortBrands(e.target.value)
    }
    handleSortCategories = (e: any) => {
        // console.log(this.props.sortCategories(e))
        this.props.sortCategories(e.target.value)
    }
    componentDidMount() {
        this.props.fetchProductsToSorted();
    }
    render() {
        const { sorted } = this.props
        return (
            <div>
                <SortComponent sortPrice={this.handleSortPrice} sortCategories={this.handleSortCategories} sortBrands={this.handleSortBrands} />
                < ProductsCategory data={sorted} CategoryTitle="Products" addToCart={this.handleAddToCart} addToFavourite={this.handleAddToFavourite} />
            </div>
        )
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProductsToSorted: () => dispatch(fetchProductsToSorted()),
        addToCart: (id: number) => dispatch(addToCart(id)),
        addToFavourite: (id: number) => dispatch(addToFavourite(id)),
        sortPrice: (e: any, key: any) => dispatch(sortPrice(e, key)),
        sortBrands: (e: any) => dispatch(sortBrands(e)),
        sortCategories: (e: any) => dispatch(sortCategories(e))
    }
}
const mapStateToProps = (state: any) => {
    return {
        sorted: state.products.sorted
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products) 