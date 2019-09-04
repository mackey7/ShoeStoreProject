import React from 'react'
import FavouriteSection from "../../components/SecondMenu/FavouriteSection";
import { connect } from "react-redux";
import { removeItemFromFavourite } from '../../actions/products'


interface Iprops {
    favourite?: any;
    isOpen?: boolean;
    removeItemFromFavourite: any;

}
interface IState {
    isOpen: boolean
}
class FavouriteBox extends React.Component<Iprops, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        }
    }
    handleRemove = (id: number) => {
        this.props.removeItemFromFavourite(id)
    }
    SwitchIsOpen = () => {
        this.setState((PrevState) => {
            return {
                isOpen: !PrevState.isOpen
            }
        });


    }



    render() {
        return (
            <div>
                <FavouriteSection favourite={this.props.favourite} SwitchIsOpen={this.SwitchIsOpen} isOpen={this.state.isOpen} removeItemFromFavourite={this.handleRemove} />

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
    console.log(state)

    return {
        favourite: state.products.favourite,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteBox) 
