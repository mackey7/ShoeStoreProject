import React from 'react'
import { connect } from "react-redux";
import { fetchNewArrivals } from '../../actions/products'
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory'
import { addToCart, addToFavourite } from '../../actions/products'
interface Iprops {
    products: any;
    fetchNewArrivals: any;
    addToCart: any;
    addToFavourite: any;
    newArrival: any;
}

interface IState {

}
class NewArrivals extends React.Component<Iprops, IState> {
    handleAddToCart = (id: number) => {
        this.props.addToCart(id)
    }
    handleAddToFavourite = (id: number) => {
        this.props.addToFavourite(id)
    }
    componentDidMount() {
        this.props.fetchNewArrivals();
    }
    render() {
        const { newArrival } = this.props
        return (
            <div>
                < ProductsCategory data={newArrival} CategoryTitle="New Arrivals" addToCart={this.handleAddToCart} addToFavourite={this.handleAddToFavourite} />
            </div>
        )
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNewArrivals: () => dispatch(fetchNewArrivals()),
        addToCart: (id: number) => dispatch(addToCart(id)),
        addToFavourite: (id: number) => dispatch(addToFavourite(id))
    }
}
const mapStateToProps = (state: any) => {
    return {
        newArrival: state.products.cart
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewArrivals) 
