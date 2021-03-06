import React from "react";
import SearchModal from "./../../components/FirstMenu/SearchModal";
import {
    fetchProductsResponse
} from "../../actions/products";
import { connect } from "react-redux";


interface Iprops {
    products: any;
    fetchProductsResponse: any;
    switchOpenSearch: any;
    searchProductsInProducts?: any;
}


class SeaarchContainer extends React.Component<Iprops> {
    state = {
        inputValue: "",
        searchedProducts: []
    };
    handleChange = (e: any) => {
        if (e.target.value === "") {
            return this.setState({
                searchedProducts: [],
                inputValue: ""
            });
        }

        this.setState({ inputValue: e.target.value });

        const resultOfSearchingProducts = this.props.products.filter(
            (product: any) => product.name.toLowerCase().includes(e.target.value.toLowerCase())
        );

        this.setState({
            searchedProducts: resultOfSearchingProducts
        });
    };
    componentDidMount() {
        this.props.fetchProductsResponse();
    }
    render() {
        const { switchOpenSearch } = this.props;
        return (
            <div>
                <SearchModal
                    data={this.state.searchedProducts}
                    switchOpenSearch={switchOpenSearch}
                    onChangeInput={this.handleChange}
                    inputValue={this.state.inputValue}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProductsResponse: () => dispatch(fetchProductsResponse()),

    };
};

const mapStateToProps = (state: any) => {
    return {
        products: state.products.products
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SeaarchContainer);
