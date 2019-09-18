import React from 'react'
import SearchModal from './../../components/FirstMenu/SearchModal'
import { fetchProductsToSearchSucces, searchProductsInProducts } from '../../actions/products'
import { connect } from "react-redux";
import searchProducts from '../../Utils/searchProducts'


interface Iprops {
    products: any;
    fetchProductsToSearchSucces: any;
    switchOpenSearch: any;
    searchProductsInProducts: any;

}


interface IState {

}
class SeaarchContainer extends React.Component<Iprops, IState> {
    state = {
        inputValue: ''
    }
    handleChange = (e: any) => {
        this.setState({
            inputValue: e.target.value
        });
        this.props.searchProductsInProducts(this.state.inputValue)
    }
    componentDidMount() {
        this.props.fetchProductsToSearchSucces();
    }
    render() {
        { console.log(this.state.inputValue) }
        const { products, switchOpenSearch } = this.props
        return (
            <div>
                <SearchModal data={products} switchOpenSearch={switchOpenSearch} onChangeInput={this.handleChange} inputValue={this.state.inputValue} />

            </div >
        )
    }

}

const mapDispatchToProps = (dispatch: any) => {

    return {
        fetchProductsToSearchSucces: () => dispatch(fetchProductsToSearchSucces()),
        searchProductsInProducts: (e: any) => dispatch(searchProductsInProducts(e)),
    }
}

const mapStateToProps = (state: any) => {
    return {
        products: searchProducts(state)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeaarchContainer) 