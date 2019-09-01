import React from 'react'
import FavouritePageComponent from "../../components/FavouritePageComponent/FavouritePageComponent"
import { connect } from "react-redux";

interface Iprops {
    favourite: any;
}
interface IState {

}
class FavouritePage extends React.Component<Iprops, IState> {

    render() {
        return (
            <div>
                <FavouritePageComponent />
                {console.log(this.props.favourite)}
            </div>
        )
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

const mapStateToProps = (state: any) => {
    return {
        favourite: state.products.favourite

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FavouritePage)



