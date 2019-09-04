import React from 'react'
import FavouritePageComponent from "../../components/FavouritePageComponent/FavouritePageComponent"
import { connect } from "react-redux";
import { removeItemFromFavourite } from '../../actions/products'
interface Iprops {
    favourite: any;
    removeItemFromFavourite: any;
}
interface IState {

}
class FavouritePage extends React.Component<Iprops, IState> {
    handleRemove = (id: number) => {
        this.props.removeItemFromFavourite(id)
    }
    render() {
        const { favourite } = this.props
        return (
            <div>
                <FavouritePageComponent favourite={favourite} removeItemFromFavourite={this.handleRemove} />

            </div>
        )
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return {
        removeItemFromFavourite: (id: number) => dispatch(removeItemFromFavourite(id)),
    }
}

const mapStateToProps = (state: any) => {
    return {
        favourite: state.products.favourite

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FavouritePage)



